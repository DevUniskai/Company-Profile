"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

/**
 * Prize reveal popup. Deliberately not a Chakra Modal — this is on the
 * customer path, and pulling Modal in costs ~59kB of shared bundle for what is
 * a click-anywhere-to-dismiss overlay.
 *
 * Sits below the confetti (z-index 1000) so the burst rains over the top.
 */
export default function PrizeReveal({ prize, onClose }) {
  const [entered, setEntered] = useState(false);

  // flip on the next frame so the transition has a starting state to animate
  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Escape only — Enter/Space would also re-activate the still-focused SPIN
  // button underneath, closing the popup and immediately starting a new spin.
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
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="24px"
      cursor="pointer"
      bg="rgba(60, 20, 8, 0.72)"
      backdropFilter="blur(4px)"
      opacity={entered ? 1 : 0}
      transition="opacity 200ms ease"
    >
      <Box
        w={{ base: "280px", md: "340px", xl: "380px" }}
        maxW="100%"
        bgGradient="linear(to-b, #ef9a5c, #bf5432)"
        border="2px solid rgba(255, 255, 255, 0.75)"
        borderRadius={{ base: "24px", md: "30px" }}
        boxShadow="0 24px 60px rgba(0, 0, 0, 0.45)"
        p={{ base: "16px", md: "20px" }}
        textAlign="center"
        transform={entered ? "scale(1)" : "scale(0.85)"}
        transition="transform 280ms cubic-bezier(0.2, 0.9, 0.3, 1.25)"
      >
        <Text
          fontFamily="'Helvetica-Neu', sans-serif"
          fontWeight="700"
          letterSpacing="1.5px"
          color="#fff"
          fontSize={{ base: "18px", md: "22px" }}
          mb={{ base: "10px", md: "14px" }}
        >
          CONGRATULATIONS!
        </Text>

        <Box
          position="relative"
          w="100%"
          aspectRatio={1}
          bg="#fff"
          borderRadius={{ base: "18px", md: "22px" }}
          overflow="hidden"
        >
          <Image
            src={prize.src}
            alt={prize.name}
            fill
            sizes="(max-width: 768px) 80vw, 380px"
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Text
          mt={{ base: "12px", md: "14px" }}
          fontFamily="'Helvetica-Neu', sans-serif"
          fontWeight="400"
          letterSpacing="1px"
          color="rgba(255, 255, 255, 0.85)"
          fontSize={{ base: "10px", md: "11px" }}
        >
          YOU WON
        </Text>

        <Text
          fontFamily="'Helvetica-Neu', sans-serif"
          fontWeight="700"
          letterSpacing="0.5px"
          color="#fff"
          textTransform="uppercase"
          lineHeight="1.3"
          fontSize={{ base: "14px", md: "16px", xl: "18px" }}
          mt="2px"
        >
          {prize.name}
        </Text>

        <Text
          mt={{ base: "14px", md: "18px" }}
          fontFamily="'Helvetica-Neu', sans-serif"
          fontWeight="500"
          color="rgba(255, 255, 255, 0.75)"
          fontSize={{ base: "9px", md: "10px" }}
          letterSpacing="1px"
        >
          TAP ANYWHERE TO CONTINUE
        </Text>
      </Box>
    </Box>
  );
}
