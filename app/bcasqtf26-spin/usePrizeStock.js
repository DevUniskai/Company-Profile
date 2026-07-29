"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { merchandise } from "./prizes";

const STORAGE_KEY = "bcasqtf26-spin:sold-out";

/**
 * Which prizes are still winnable, persisted per device in localStorage so
 * staff can mark items sold out mid-event without a redeploy.
 *
 * State starts empty (everything available) so the server render and the first
 * client render agree; the saved list is applied immediately after mount, well
 * before anyone can press SPIN.
 */
export function usePrizeStock() {
  const [soldOut, setSoldOut] = useState(() => new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const ids = raw ? JSON.parse(raw) : null;
      if (Array.isArray(ids)) {
        // drop ids that no longer exist, so an old saved list can't hide
        // a prize that has since been renamed
        setSoldOut(
          new Set(ids.filter((id) => merchandise.some((m) => m.id === id))),
        );
      }
    } catch {
      // unreadable or blocked storage — fall back to everything available
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...soldOut]));
    } catch {
      // storage full or blocked (private mode) — availability just won't persist
    }
  }, [soldOut, loaded]);

  const toggle = useCallback((id) => {
    setSoldOut((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const markAllAvailable = useCallback(() => setSoldOut(new Set()), []);

  /** The prizes the wheel is allowed to stop on. */
  const pool = useMemo(
    () => merchandise.filter((item) => !soldOut.has(item.id)),
    [soldOut],
  );

  return { soldOut, pool, loaded, toggle, markAllAvailable };
}
