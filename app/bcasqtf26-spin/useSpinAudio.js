"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Output levels — turn these up or down to taste. Everything runs through a
// limiter, so they can sit high without the stacked arpeggio notes distorting.
const MASTER_LEVEL = 0.9;
const TICK_LEVEL = 0.26;
const WIN_LEVEL = 0.34;
const SPARKLE_LEVEL = 0.12;

/**
 * Spin sounds synthesised with the Web Audio API — no audio files to ship,
 * and nothing to load before the first click.
 *
 * The AudioContext is created lazily on the first spin because browsers block
 * audio that isn't started by a user gesture.
 */
export function useSpinAudio() {
  const ctxRef = useRef(null);
  const busRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(muted);

  // keep a ref copy so the playback callbacks never read a stale value
  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(
    () => () => {
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        ctxRef.current.close();
      }
      busRef.current = null;
    },
    [],
  );

  const getCtx = useCallback(() => {
    if (mutedRef.current || typeof window === "undefined") return null;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;

    if (!ctxRef.current || ctxRef.current.state === "closed") {
      const ctx = new AudioCtx();

      // master gain -> limiter -> speakers, so stacked notes stay clean
      const master = ctx.createGain();
      master.gain.setValueAtTime(MASTER_LEVEL, ctx.currentTime);

      const limiter = ctx.createDynamicsCompressor();
      // sits just under clipping so it only catches true peaks and leaves the
      // punch of the arpeggio intact
      limiter.threshold.setValueAtTime(-4, ctx.currentTime);
      limiter.knee.setValueAtTime(4, ctx.currentTime);
      limiter.ratio.setValueAtTime(10, ctx.currentTime);
      limiter.attack.setValueAtTime(0.003, ctx.currentTime);
      limiter.release.setValueAtTime(0.25, ctx.currentTime);

      master.connect(limiter);
      limiter.connect(ctx.destination);

      ctxRef.current = ctx;
      busRef.current = master;
    }
    // iOS/Chrome park the context until a gesture resumes it
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();

    return ctxRef.current;
  }, []);

  const tone = useCallback((ctx, { freq, at, duration, peak, type }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, at);

    // short attack + exponential decay, so it reads as a pluck not a beep
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.linearRampToValueAtTime(peak, at + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

    osc.connect(gain);
    gain.connect(busRef.current || ctx.destination);
    osc.start(at);
    osc.stop(at + duration + 0.02);
  }, []);

  /** Reel click — one per item the wheel steps past. */
  const playTick = useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;

    // tiny pitch jitter keeps a long spin from sounding like a machine gun
    const freq = 840 + Math.random() * 120;
    tone(ctx, {
      freq,
      at: ctx.currentTime,
      duration: 0.055,
      peak: TICK_LEVEL,
      type: "triangle",
    });
  }, [getCtx, tone]);

  /** Prize reveal — rising major arpeggio. */
  const playWin = useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;

    const start = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6

    notes.forEach((freq, i) => {
      tone(ctx, {
        freq,
        at: start + i * 0.09,
        duration: i === notes.length - 1 ? 0.7 : 0.22,
        peak: WIN_LEVEL,
        type: "triangle",
      });
    });

    // soft sparkle over the top of the final note
    tone(ctx, {
      freq: 2093,
      at: start + 0.27,
      duration: 0.5,
      peak: SPARKLE_LEVEL,
      type: "sine",
    });
  }, [getCtx, tone]);

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);

  return { muted, toggleMuted, playTick, playWin };
}
