"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { useSpinAudio } from "./useSpinAudio";
import { usePrizeStock } from "./usePrizeStock";
import PrizeReveal from "./PrizeReveal";
import { merchandise, MYSTERY_IMAGE } from "./prizes";
import {
  ACCENT,
  BACKGROUND_IMAGE,
  CIRCULAR,
  CONFETTI_COLORS,
  MYSTERY_SCALE,
  STAGE_HEIGHT,
  STAGE_MAX_WIDTH,
} from "./tokens";

// staff-only, so keep the modal out of the bundle customers download
const StaffPanel = dynamic(() => import("./StaffPanel"), { ssr: false });

// full trips around the reel before it settles on the winner
const MIN_LOOPS = 2;
const EXTRA_LOOPS = 2;
const FAST_DELAY = 70;
const SLOW_DELAY = 420;

function SoundIcon({ muted }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      {muted ? (
        <>
          <line x1="16" y1="9" x2="22" y2="15" />
          <line x1="22" y1="9" x2="16" y2="15" />
        </>
      ) : (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </>
      )}
    </svg>
  );
}

const page = () => {
  const [index, setIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [revealed, setRevealed] = useState(null);
  const [staffOpen, setStaffOpen] = useState(false);
  const timeoutRef = useRef(null);
  const confettiRef = useRef(null);
  const { muted, toggleMuted, playTick, playWin } = useSpinAudio();
  const { soldOut, pool, loaded, toggle, markAllAvailable } = usePrizeStock();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // ?staff=1 is the only way in — there is nowhere on this layout to hide a
  // gesture without a customer finding it by accident
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("staff")) {
      setStaffOpen(true);
    }
  }, []);

  // warm the confetti chunk up front so the reveal burst fires instantly
  useEffect(() => {
    let alive = true;
    import("canvas-confetti").then((mod) => {
      if (alive) confettiRef.current = mod.default;
    });
    return () => {
      alive = false;
    };
  }, []);

  const celebrate = useCallback(() => {
    const confetti = confettiRef.current;
    if (!confetti) return;

    const shared = {
      colors: CONFETTI_COLORS,
      disableForReducedMotion: true,
      zIndex: 1000,
    };

    // main burst out of the middle, then two angled side volleys
    confetti({ ...shared, particleCount: 110, spread: 75, origin: { y: 0.6 } });
    confetti({
      ...shared,
      particleCount: 45,
      angle: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.75 },
    });
    confetti({
      ...shared,
      particleCount: 45,
      angle: 120,
      spread: 60,
      origin: { x: 0.9, y: 0.75 },
    });
  }, []);

  const spin = useCallback(() => {
    // `revealed` guard: the popup must be dismissed before the next spin, no
    // matter how the click or keypress got through
    if (spinning || revealed || pool.length === 0) return;

    setSpinning(true);

    // Pick the winner from what's actually in stock, then work out how many
    // steps land the reel on it. The reel itself still cycles every prize, so
    // a sold-out item is only missing from the *result*, never from the spin.
    const winner = pool[Math.floor(Math.random() * pool.length)];
    const winnerIndex = merchandise.indexOf(winner);
    const gap = (winnerIndex - index + merchandise.length) % merchandise.length;
    const loops = MIN_LOOPS + Math.floor(Math.random() * EXTRA_LOOPS);
    const totalSteps = loops * merchandise.length + gap;
    let step = 0;

    const tick = () => {
      setIndex((prev) => (prev + 1) % merchandise.length);
      step += 1;
      playTick();

      if (step >= totalSteps) {
        setSpinning(false);
        setRevealed(winner);
        playWin();
        celebrate();
        return;
      }

      // ease-out: fast at the start, dragging out towards the last steps
      const progress = step / totalSteps;
      const delay = FAST_DELAY + SLOW_DELAY * Math.pow(progress, 4);
      timeoutRef.current = setTimeout(tick, delay);
    };

    tick();
  }, [spinning, revealed, pool, index, playTick, playWin, celebrate]);

  const current = merchandise[index];
  const outOfPrizes = loaded && pool.length === 0;

  // The stage only shows a real prize mid-spin and while the reveal is up.
  // Idle — before the first spin and after each reveal is dismissed — it falls
  // back to the mystery mark so the next prize isn't sitting on screen.
  const showingPrize = spinning || revealed !== null;
  const stageImage = showingPrize ? current.src : MYSTERY_IMAGE;

  return (
    <Box
      minH="100vh"
      sx={{ "@supports (height: 100lvh)": { minHeight: "100lvh" } }}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Background */}
      <Box position="absolute" inset={0} zIndex={-1}>
        <Image
          src={BACKGROUND_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Stage */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: "24px", md: "32px", xl: "40px" }}
        px="24px"
        py="32px"
        w="100%"
      >
        <Box
          position="relative"
          w="100%"
          maxW={STAGE_MAX_WIDTH}
          h={STAGE_HEIGHT}
        >
          <Image
            key={stageImage}
            src={stageImage}
            alt={showingPrize ? current.name : "Mystery prize"}
            fill
            sizes="(max-width: 768px) 94vw, 1500px"
            priority
            style={{
              objectFit: "contain",
              // scale, not padding — percentage padding resolves against the
              // stage's *width*, which on this wide box would crush the mark
              transform: showingPrize ? "none" : `scale(${MYSTERY_SCALE})`,
            }}
          />
        </Box>

        {outOfPrizes ? (
          <Text
            fontFamily={CIRCULAR}
            fontWeight="700"
            color={ACCENT}
            fontSize={{ base: "16px", md: "22px", xl: "26px" }}
            textAlign="center"
          >
            Silakan hubungi tim kami di booth.
          </Text>
        ) : (
          <Box
            as="button"
            type="button"
            onClick={spin}
            disabled={spinning}
            aria-label="Start the spin"
            fontFamily={CIRCULAR}
            fontWeight="700"
            color={ACCENT}
            fontSize={{ base: "24px", md: "34px", xl: "42px" }}
            letterSpacing={{ base: "1px", md: "2px" }}
            lineHeight="1"
            textTransform="uppercase"
            bg="transparent"
            px="8px"
            // held in the layout while spinning so the stage stays centred
            opacity={spinning ? 0 : 1}
            pointerEvents={spinning ? "none" : "auto"}
            cursor="pointer"
            _hover={{ transform: "scale(1.04)" }}
            _active={{ transform: "scale(0.98)" }}
            transition="transform 150ms ease, opacity 200ms ease"
            sx={{ WebkitTapHighlightColor: "transparent" }}
          >
            Start Here
          </Box>
        )}
      </Box>

      {/* Sound toggle, kept out of the way */}
      <IconButton
        onClick={toggleMuted}
        aria-label={muted ? "Unmute sound" : "Mute sound"}
        title={muted ? "Unmute sound" : "Mute sound"}
        variant="ghost"
        isRound
        position="absolute"
        bottom={{ base: "16px", md: "24px" }}
        right={{ base: "16px", md: "24px" }}
        color={ACCENT}
        opacity={0.55}
        _hover={{ opacity: 1, bgColor: "rgba(211, 119, 78, 0.12)" }}
        transition="opacity 150ms ease, background-color 150ms ease"
        boxSize={{ base: "40px", md: "44px" }}
        icon={<SoundIcon muted={muted} />}
      />

      {/* Preload every prize so the spin never stalls on a fetch */}
      <Box position="absolute" w={0} h={0} overflow="hidden" aria-hidden>
        <Image
          src={MYSTERY_IMAGE}
          alt=""
          width={360}
          height={360}
          loading="eager"
        />
        {merchandise.map((item) => (
          <Image
            key={item.src}
            src={item.src}
            alt=""
            width={680}
            height={680}
            loading="eager"
          />
        ))}
      </Box>

      {revealed && (
        <PrizeReveal prize={revealed} onClose={() => setRevealed(null)} />
      )}

      {staffOpen && (
        <StaffPanel
          isOpen
          onClose={() => setStaffOpen(false)}
          soldOut={soldOut}
          toggle={toggle}
          markAllAvailable={markAllAvailable}
        />
      )}
    </Box>
  );
};

export default page;
