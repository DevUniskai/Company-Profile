"use client";

import { Box, Stack, SimpleGrid, Button, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { salesEvent } from "@/components/sections/SalesContactList/contact";

function waLink(phone, text) {
  const clean = String(phone).replace(/[^\d]/g, "");
  const msg = encodeURIComponent(text || "Hi, saya mau pre-book untuk BCA SQTF.");
  return `https://wa.me/${clean}?text=${msg}`;
}

function SalesButton({ name, phone }) {
  return (
    <Button
        as="a"
        href={waLink(phone)}
        target="_blank"
        rel="noopener noreferrer"
        variant="solid"
        bgColor="rgba(45, 56, 169, 0.5)"   // #2d38a9 + 50%
        color="white"
        borderRadius="15px"
        borderWidth="2px"
        borderColor="whiteAlpha.900"
        // px={{ base: 8, md: 12 }}
        // py={{ base: 7, md: 8 }}
        fontWeight="700"
        // fontSize={{ base: "14px", md: "18px", lg: "20px" }}
        fontFamily="'Jost', sans-serif"
        letterSpacing="0.35em"
        _hover={{
            bgColor: "rgba(45, 56, 169, 0.65)",
            transform: "scale(1.02)",
        }}
        transition="transform 150ms ease, background-color 150ms ease"
        w="100%"
        h={{ base: "44px", sm: "48px", md: "52px" }}
        fontSize={{ base: "12px", sm: "13px", md: "16px" }}
        px={{ md: 8, xl: 10, "2xl": 12 }}
        py={0}   
    >
        {name}
    </Button>

  );
}

export default function Page() {
  const [isUltraWide] = useMediaQuery("(min-width: 1900px)");

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* BACKGROUND DESKTOP */}
      <Box 
        display={{ base: "none", md: "block" }} 
        position="absolute" 
        inset={0}             
        zIndex={0}>
            <Image
                src="/static/images/sqtf/desktop.jpg"
                alt="BCA SQTF Desktop"
                fill
                priority
                style={{ objectFit: "cover" }}
            />
      </Box>

      {/* BACKGROUND MOBILE */}
      <Box display={{ base: "block", md: "none" }} position="absolute" inset={0} zIndex={0}>
        <Image
          src="/static/images/sqtf/mobile.jpg"
          alt="BCA SQTF Mobile"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* CONTACT AREA */}
      <Box position="relative" zIndex={2} minH="100vh">
        {/* DESKTOP: vertikal lurus ke bawah */}
        <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="65%"
            right={isUltraWide ? "14%" : { md: "6%", xl: "10%", "2xl": "12%" }}
            transform={isUltraWide ? "translateY(-75%)" : "translateY(-60%)"}
            w={{ md: "280px", xl: "320px", "2xl": "360px" }}
        >
          <Stack spacing={5} align="flex-end">
            {salesEvent.map((s) => (
              <SalesButton key={s.name} name={s.name} phone={s.phone} />
            ))}
          </Stack>
        </Box>
 
        {/* MOBILE: 2 kolom + terakhir center */}
        <Box
          display={{ base: "block", md: "none" }}
          position="absolute"
          left="50%"
          bottom="25%"
          transform="translateX(-50%)"
          w="92vw"
          maxW="520px"
        >
          <SimpleGrid columns={2} spacing={5}>
            <SalesButton name={SALES[0].name} phone={SALES[0].phone} />
            <SalesButton name={SALES[1].name} phone={SALES[1].phone} />
            <SalesButton name={SALES[2].name} phone={SALES[2].phone} />
            <SalesButton name={SALES[3].name} phone={SALES[3].phone} />

            {/* item terakhir: span 2 kolom dan center */}
            <Box gridColumn="1 / -1" display="flex" justifyContent="center">
            <Box w="100%" maxW="200px">
                <SalesButton name={SALES[4].name} phone={SALES[4].phone} />
            </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
