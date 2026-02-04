"use client";

import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  useMediaQuery,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { salesEvent } from "@/components/sections/SalesContactList/contact";

function waLink(phone, text) {
  const clean = String(phone).replace(/[^\d]/g, "");
  const msg = encodeURIComponent(
    text || "Hi, saya mau pre-book untuk Etihad x Mandiri Travel Fair."
  );
  return `https://wa.me/${clean}?text=${msg}`;
}

function EtihadSalesButton({ name, phone }) {
  return (
    <Button
      as="a"
      href={waLink(phone)}
      target="_blank"
      rel="noopener noreferrer"
      variant="solid"
      bgColor="rgba(0,0,0,0.5)"
      color="white"
      borderRadius={{ base: "14px", md: "18px" }}
      borderWidth="2px"
      borderColor="whiteAlpha.900"
      fontWeight="700"
      fontFamily="'Jost', sans-serif"
      letterSpacing="0.45em"
      w={{ base: "100%", md: "auto" }}
      h={{ base: "38px", sm: "48px", md: "50px" }}
      fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "16px" }}
      px={{ base: 6, md: 10 }}
      py={0}
      _hover={{
        bgColor: "rgba(0,0,0,0.85)",
        transform: "scale(1.02)",
      }}
      transition="transform 150ms ease, background-color 150ms ease"
    >
      {name}
    </Button>
  );
}

export default function Page() {
  // untuk bedain laptop vs monitor extra (kalau butuh geser posisi kanan)
  const [isUltraWide] = useMediaQuery("(min-width: 1900px)");

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* ===== BACKGROUND LANGIT (asset) ===== */}
      <Box position="absolute" inset={0} zIndex={0}>
        <Image
          src="/static/images/etihad/Langit.png"
          alt="Langit"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* ===== GURUN BAWAH (asset) ===== */}
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        pointerEvents="none"
      >
        <Image
          src="/static/images/etihad/Gurun.png"
          alt="Gurun"
          width={2400}
          height={400}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          priority
        />
      </Box>

      {/* ===== TOP LOGOS (ETIHAD - UNISKAI - MANDIRI) ===== */}
      <Flex
        position="absolute"
        top={{ base: "22px", md: "36px" }}
        left={{ base: "18px", md: "46px" }}
        right={{ base: "18px", md: "46px" }}
        zIndex={3}
        align="center"
        justify="space-between"
        pointerEvents="none"
      >
        <Box
          position="relative"
          w={{ base: "80px", md: "120px" }}
          h={{ base: "30px", md: "30px" }}
        >
          <Image
            src="/static/images/etihad/Logo Etihad.png"
            alt="Etihad"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          as={Link}
          href="/"
          position="relative"
          w={{ base: "80px", md: "120px" }}
          h={{ base: "30px", md: "30px" }}
          cursor="pointer"
          pointerEvents="auto"
        >
          <Image
            src="/static/images/etihad/Logo Uniskai.png"
            alt="Uniskai"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          position="relative"
          w={{ base: "80px", md: "120px" }}
          h={{ base: "30px", md: "30px" }}
        >
          <Image
            src="/static/images/etihad/Logo Mandiri.png"
            alt="Mandiri"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Flex>

      {/* ===== TEXT UTAMA (asset: Etihad Travel Fair) ===== */}
      {/* DESKTOP */}
      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        zIndex={2}
        top={{ md: "18%", xl: "16%" }} // << EDIT ini kalau mau naik/turun
        left={{ md: "4%", xl: "2%" }} // << EDIT ini kalau mau lebih kiri/kanan
        w="clamp(520px, 50vw, 980px)"
      >
        <Image
          src="/static/images/etihad/Text.png"
          alt="Etihad Mandiri Text"
          width={1400}
          height={800}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </Box>

      {/* tab */}
      <Box
        display={{ base: "none", md: "block", lg: "none" }}
        position="absolute"
        zIndex={2}
        top="18%" // << EDIT ini kalau kepotong
        left="50%"
        transform="translateX(-50%)"
        w="92vw"
        maxW="450px"
      >
        <Image
          src="/static/images/etihad/Text.png"
          alt="Etihad Mandiri Text"
          width={1200}
          height={700}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </Box>

      {/* MOBILE */}
      <Box
        display={{ base: "block", md: "none" }}
        position="absolute"
        zIndex={2}
        top="16%" // << EDIT ini kalau kepotong
        left="50%"
        transform="translateX(-50%)"
        w="92vw"
        maxW="350px"
      >
        <Image
          src="/static/images/etihad/Text.png"
          alt="Etihad Mandiri Text"
          width={1200}
          height={700}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </Box>

      {/* ===== CONTACT AREA (prebook) ===== */}
      {/* DESKTOP: kanan (seperti contoh) */}
      <Box
        position="absolute"
        zIndex={3}
        // desktop pakai top, mobile/tab pakai bottom
        top={{ base: "auto", md: "auto", lg: "46%" }}
        bottom={{ base: "10%", md: "15%", lg: "auto" }}
        left={{ base: "50%", md: "50%", lg: "auto" }}
        right={{ base: "auto", md: "auto", lg: isUltraWide ? "9%" : "6%" }}
        transform={{
          base: "translateX(-50%)",
          md: "translateX(-50%)",
          lg: "translateY(-50%)",
        }}
        w={{ base: "90vw", md: "92vw", lg: "clamp(520px, 34vw, 720px)" }}
        maxW={{ base: "420px", md: "640px", lg: "none" }}
      >
        <Text
          mb={4}
          color="whiteAlpha.900"
          fontSize={{ base: "16px", md: "18px", lg: "16px", xl: "18px" }}
          fontFamily="'Jost', sans-serif"
          textAlign="center"
        >
          Pre-book with Our Team.
        </Text>

        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 2 }}
          spacing={{ base: 3, md: 4 }}
        >
          {salesEvent.map((s) => (
            <EtihadSalesButton key={s.name} name={s.name} phone={s.phone} />
          ))}
        </SimpleGrid>
      </Box>

      {/* ===== TEXT BAWAH (asset) ===== */}
      {/* <Box
                position="absolute"
                left={{ base: "18px", md: "46px" }}
                right={{ base: "18px", md: "46px" }}
                bottom={{ base: "18px", md: "22px" }}
                zIndex={2}
                pointerEvents="none"
            >
                <Image
                    src="/static/images/etihad/Text Bawah.png"
                    alt="Text Bawah"
                    width={2400}
                    height={200}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                    priority
                />
            </Box> */}
      <Flex
        position="absolute"
        left={{ base: 4, md: 10 }}
        right={{ base: 4, md: 10 }}
        bottom={{ base: 4, md: 6 }}
        zIndex={10}
        justify="space-between"
        align="center"
        fontSize={{ base: "7px", md: "sm" }}
        opacity={0.95}
        color="whiteAlpha.900"
        // fontFamily="'Helvetica-Neu', sans-serif"
        pointerEvents="auto"
      >
        <Box lineHeight="shorter">
          <Text _hover={{ opacity: 0.8 }}>
            Bank Mandiri Berizin dan Diawasi Oleh Otoritas Jasa Keuangan dan
            Bank Indonesia
          </Text>
          <Text _hover={{ opacity: 0.8 }}>
            Serta Merupakan Peserta Penjamin LPS
          </Text>
        </Box>

        <Link href="https://instagram.com/uniskai" target="_blank">
          <Text _hover={{ opacity: 0.8 }}>instagram @uniskai</Text>
        </Link>
      </Flex>
    </Box>
  );
}