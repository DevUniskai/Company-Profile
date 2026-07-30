"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import {
  ACCENT,
  BACKGROUND_IMAGE,
  CIRCULAR,
  REVEAL_HEIGHT,
  STAGE_MAX_WIDTH,
} from "./tokens";

export default function PrizeReveal({ prize, onClose }) {
  const [entered, setEntered] = useState(false);

  // flip on the next frame so the transition has a starting state to animate
  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Escape only — Enter/Space would also re-activate the still-focused start
  // button underneath, closing this and immediately starting a new spin.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <Box
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`You won ${prize.name}`}
      position="fixed"
      inset={0}
      zIndex={900}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={{ base: "16px", md: "24px" }}
      px="24px"
      cursor="pointer"
      opacity={entered ? 1 : 0}
      transition="opacity 200ms ease"
    >
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

      <Text
        fontFamily={CIRCULAR}
        fontWeight="700"
        color={ACCENT}
        fontSize={{ base: "30px", md: "48px", xl: "60px" }}
        lineHeight="1"
        textAlign="center"
        transform={entered ? "translateY(0)" : "translateY(-12px)"}
        transition="transform 300ms cubic-bezier(0.2, 0.9, 0.3, 1.2)"
      >
        Congratulations!
      </Text>

      <Box
        position="relative"
        w="100%"
        maxW={STAGE_MAX_WIDTH}
        h={REVEAL_HEIGHT}
        transform={entered ? "scale(1)" : "scale(0.85)"}
        transition="transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1.25)"
      >
        <Image
          src={prize.src}
          alt={prize.name}
          fill
          sizes="(max-width: 768px) 94vw, 1500px"
          priority
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Text
        fontFamily={CIRCULAR}
        fontWeight="500"
        color={ACCENT}
        opacity={0.65}
        fontSize={{ base: "10px", md: "12px" }}
        letterSpacing="2px"
        textTransform="uppercase"
      >
        Tap anywhere to continue
      </Text>
    </Box>
  );
}
