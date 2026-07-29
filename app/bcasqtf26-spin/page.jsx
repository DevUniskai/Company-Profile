"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import { useSpinAudio } from "./useSpinAudio";
import { usePrizeStock } from "./usePrizeStock";
import PrizeReveal from "./PrizeReveal";
import { merchandise, MYSTERY_IMAGE, MYSTERY_LABEL } from "./prizes";

// staff-only, so keep the modal out of the bundle customers download
const StaffPanel = dynamic(() => import("./StaffPanel"), { ssr: false });

const CONFETTI_COLORS = ["#bf5432", "#ef9a5c", "#e7ca9e", "#ffffff", "#f7b267"];

// taps on the BCA logo needed to open the staff panel, and the window to do it
const STAFF_TAPS = 3;
const STAFF_TAP_WINDOW = 2000;

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

// full trips around the reel before it settles on the winner
const MIN_LOOPS = 2;
const EXTRA_LOOPS = 2;
const FAST_DELAY = 70;
const SLOW_DELAY = 420;

const page = () => {
  const [index, setIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [revealed, setRevealed] = useState(null);
  const [staffOpen, setStaffOpen] = useState(false);
  const timeoutRef = useRef(null);
  const confettiRef = useRef(null);
  const tapsRef = useRef({ count: 0, since: 0 });
  const { muted, toggleMuted, playTick, playWin } = useSpinAudio();
  const { soldOut, pool, loaded, toggle, markAllAvailable } = usePrizeStock();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // ?staff=1 opens the panel directly, for setting stock up before the event
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("staff")) {
      setStaffOpen(true);
    }
  }, []);

  // five quick taps on the BCA logo is the in-event way in
  const registerStaffTap = useCallback(() => {
    const now = Date.now();
    const { count, since } = tapsRef.current;

    if (now - since > STAFF_TAP_WINDOW) {
      tapsRef.current = { count: 1, since: now };
      return;
    }

    const next = count + 1;
    if (next >= STAFF_TAPS) {
      tapsRef.current = { count: 0, since: 0 };
      setStaffOpen(true);
      return;
    }

    tapsRef.current = { count: next, since };
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

    // main burst out of the card, then two angled side volleys
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
    setHasSpun(true);

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

  // The card only ever shows a real prize mid-spin and while the reveal popup
  // is up. Idle — before the first spin and after each popup is dismissed — it
  // falls back to the mystery mark so the next prize isn't sitting on screen.
  const showingPrize = spinning || revealed !== null;
  const cardImage = showingPrize ? current.src : MYSTERY_IMAGE;
  const cardLabel = showingPrize ? current.name : MYSTERY_LABEL;

  return (
    <Box
      minH="100dvh"
      display="flex"
      flexDirection="column"
      position="relative"
      overflowX="hidden"
    >
      {/* Background */}
      <Box position="absolute" inset={0} zIndex={-1}>
        <Image
          src="/static/images/sqtf26/assets/BACKGROUND.jpg"
          alt="BCA SQTF background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Navbar */}
      <Box
        flexShrink={0}
        px={{ base: "25px", md: "50px", xl: "80px", "2xl": "130px" }}
        py={{ base: "20px", md: "24px", lg: "28px", xl: "40px" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Box
          position="relative"
          flexShrink={0}
          aspectRatio={167 / 52}
          w={{
            base: "55px",
            md: "70px",
            lg: "90px",
            xl: "110px",
            "2xl": "130px",
          }}
          onClick={registerStaffTap}
          sx={{ WebkitTapHighlightColor: "transparent" }}
          userSelect="none"
        >
          <Image
            src="/static/images/sqtf26/assets/BCA.png"
            alt="BCA"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          as={Link}
          href="/"
          position="relative"
          flexShrink={0}
          aspectRatio={6660 / 1836}
          w={{
            base: "62px",
            md: "80px",
            lg: "100px",
            xl: "120px",
            "2xl": "140px",
          }}
          cursor="pointer"
          pointerEvents="auto"
        >
          <Image
            src="/static/images/sqtf26/assets/Logo-Uniskai.png"
            alt="Uniskai"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          position="relative"
          flexShrink={0}
          aspectRatio={4277 / 1573}
          w={{
            base: "64px",
            md: "82px",
            lg: "100px",
            xl: "120px",
            "2xl": "145px",
          }}
        >
          <Image
            src="/static/images/sqtf26/assets/SA.png"
            alt="Singapore Airlines"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>

      {/* Main */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: 5, md: 6, xl: 8 }}
        w="100%"
        maxW="1500px"
        mx="auto"
        px={{ base: "25px", md: "50px", lg: "30px", xl: "50px", "2xl": "40px" }}
        py={{ base: "10px", lg: "20px" }}
      >
        {/* Tier pill */}
        <Box
          fontSize={{
            base: "16px",
            md: "22px",
            lg: "20px",
            xl: "26px",
            "2xl": "30px",
          }}
          w={{ base: "240px", md: "320px", xl: "400px" }}
          maxW="100%"
          py={{ base: "8px", md: "10px", xl: "12px" }}
          bgColor="#bf5432"
          color="#e7ca9e"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="40px"
          fontWeight="bold"
          fontFamily="'Helvetica-Neu', sans-serif"
        >
          25 - 50JT
        </Box>

        {/* Merch card */}
        <Box
          w={{ base: "230px", md: "280px", xl: "320px", "2xl": "360px" }}
          maxW="100%"
          bgGradient="linear(to-b, #ef9a5c, #bf5432)"
          border="2px solid rgba(255, 255, 255, 0.6)"
          borderRadius={{ base: "24px", md: "30px" }}
          boxShadow="0 18px 45px rgba(138, 52, 20, 0.3)"
          p={{ base: "12px", md: "14px", xl: "16px" }}
          transform={spinning ? "scale(1.01)" : "scale(1)"}
          transition="transform 200ms ease"
        >
          <Box
            position="relative"
            w="100%"
            aspectRatio={1}
            bg="#fff"
            borderRadius={{ base: "18px", md: "22px" }}
            overflow="hidden"
          >
            <Image
              key={cardImage}
              src={cardImage}
              alt={showingPrize ? current.name : "Mystery prize"}
              fill
              sizes="(max-width: 768px) 60vw, 360px"
              priority
              style={{
                // the mystery mark is a logo, so inset it rather than letting
                // it fill the panel edge to edge like a product photo
                objectFit: "contain",
                padding: showingPrize ? 0 : "16%",
                filter: spinning ? "blur(1.5px)" : "none",
                transition: "filter 150ms ease",
              }}
            />
          </Box>

          <Text
            // mt matches the card padding so the label band is evenly spaced
            // between the white panel and the card's bottom edge
            mt={{ base: "12px", md: "14px", xl: "16px" }}
            px="4px"
            minH={{ base: "32px", md: "38px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#fff"
            fontFamily="'Helvetica-Neu', sans-serif"
            fontWeight="700"
            letterSpacing="0.5px"
            fontSize={{ base: "10px", md: "12px", xl: "14px" }}
            textAlign="center"
            textTransform="uppercase"
            lineHeight="1.3"
          >
            {cardLabel}
          </Text>
        </Box>

        {/* Spin button + sound toggle */}
        <Box display="flex" alignItems="center" gap={{ base: 2, md: 3 }}>
          <Button
            onClick={spin}
            isDisabled={spinning || outOfPrizes}
            variant="solid"
            bgColor="#bf5432"
            color="#e7ca9e"
            borderRadius="40px"
            borderWidth="1px"
            borderColor="#b14824"
            fontFamily="'Helvetica-Neu', sans-serif"
            fontWeight="700"
            letterSpacing="2px"
            boxShadow="0 10px 24px rgba(138, 52, 20, 0.28)"
            _hover={{ bgColor: "#b14824", transform: "scale(1.03)" }}
            _active={{ transform: "scale(0.98)" }}
            _disabled={{
              bgColor: "#bf5432",
              opacity: 0.55,
              cursor: "not-allowed",
              transform: "scale(1)",
              _hover: { bgColor: "#bf5432", transform: "scale(1)" },
            }}
            transition="transform 150ms ease, background-color 150ms ease"
            w={{ base: "200px", md: "240px", xl: "280px" }}
            maxW="100%"
            h={{ base: "42px", md: "48px", xl: "54px" }}
            fontSize={{ base: "14px", md: "16px", xl: "18px" }}
          >
            {hasSpun ? "SPIN AGAIN" : "SPIN"}
          </Button>

          <IconButton
            onClick={toggleMuted}
            aria-label={muted ? "Unmute sound" : "Mute sound"}
            title={muted ? "Unmute sound" : "Mute sound"}
            variant="outline"
            isRound
            bgColor="transparent"
            color="#b14824"
            borderWidth="1px"
            borderColor="#b14824"
            _hover={{ bgColor: "rgba(177, 72, 36, 0.12)" }}
            _active={{ transform: "scale(0.95)" }}
            transition="transform 150ms ease, background-color 150ms ease"
            boxSize={{ base: "42px", md: "48px", xl: "54px" }}
            icon={<SoundIcon muted={muted} />}
          />
        </Box>

        {outOfPrizes && (
          <Text
            fontFamily="'Helvetica-Neu', sans-serif"
            fontSize={{ base: "11px", md: "13px" }}
            fontWeight="600"
            color="#b14824"
            textAlign="center"
          >
            Silakan hubungi tim kami di booth.
          </Text>
        )}
      </Box>

      {/* Footer */}
      <Box
        flexShrink={0}
        w="100%"
        maxW="1500px"
        mx="auto"
        px={{ base: "25px", md: "50px", lg: "30px", xl: "60px", "2xl": "40px" }}
        py={{ base: "16px", md: "20px", lg: "24px", xl: "32px" }}
        display="flex"
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: 3, xl: 6 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize={{
            base: "8px",
            sm: "9px",
            md: "12px",
            lg: "13px",
            xl: "15px",
            "2xl": "17px",
          }}
          fontWeight="500"
          color="#b14824"
          textAlign="center"
        >
          BCA berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia •
          BCA merupakan peserta penjamin LPS
        </Text>

        {/* Desktop (xl+) inline links */}
        <Text
          display={{ base: "none", xl: "block" }}
          flexShrink={0}
          fontSize={{ xl: "15px", "2xl": "17px" }}
          fontWeight="500"
          color="#b14824"
        >
          www.uniskai.id/bcasqtf26
        </Text>
        <Text
          display={{ base: "none", xl: "block" }}
          flexShrink={0}
          fontSize={{ xl: "15px", "2xl": "17px" }}
          fontWeight="500"
          color="#b14824"
        >
          instagram.com/uniskai
        </Text>

        {/* Mobile / tablet stacked links */}
        <Box
          display={{ base: "flex", xl: "none" }}
          w="100%"
          justifyContent="space-between"
          gap={2}
        >
          <Text
            fontSize={{ base: "9px", md: "12px", lg: "13px" }}
            fontWeight="500"
            color="#b14824"
          >
            www.uniskai.id/bcasqtf26
          </Text>
          <Text
            fontSize={{ base: "9px", md: "12px", lg: "13px" }}
            fontWeight="500"
            color="#b14824"
          >
            instagram.com/uniskai
          </Text>
        </Box>
      </Box>

      {/* Preload every merch image so the spin never stalls on a fetch */}
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
            width={360}
            height={360}
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
