"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, SimpleGrid, Button, Text } from "@chakra-ui/react";
import { salesEvent } from "@/components/sections/SalesContactList/contact";

function waLink(phone, text) {
  const clean = String(phone).replace(/[^\d]/g, "");
  const msg = encodeURIComponent(
    text || "Hi, saya mau pre-book untuk BCA SQTF."
  );
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
      bgColor="rgba(45, 56, 169, 0.5)" // #2d38a9 + 50%
      color="white"
      borderRadius="12px"
      borderWidth="2px"
      borderColor="whiteAlpha.900"
      fontWeight="700"
      fontFamily="'Jost', sans-serif"
      letterSpacing="0.35em"
      _hover={{
        bgColor: "rgba(45, 56, 169, 0.65)",
        transform: "scale(1.02)",
      }}
      transition="transform 150ms ease, background-color 150ms ease"
      h={{ base: "40px", lg: "40px", xl: "45px", "2xl": "50px" }}
      w="100%"
      fontSize={{ base: "12px", md: "14px", lg: "16px" }}
      px={{ base: "10px", md: "30px", lg: "35px", xl: "60px", "2xl": "100px" }}
      py={{ base: 0 }}
    >
      {name}
    </Button>
  );
}

const page = () => {
  return (
    <Box minH="100vh" overflow="hidden" position="relative">
      {/* Desktop BG (cross-fade) */}
      <Box
        position="absolute"
        inset={0}
        zIndex={-1}
        opacity={{ base: 0, lg: 1 }}
        transition="opacity 400ms ease"
        willChange="opacity"
      >
        <Image
          src="/static/images/sqtf/background-sqtf.jpg"
          alt="BCA SQTF Desktop"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Tab-Mobile BG (cross-fade) */}
      <Box
        position="absolute"
        inset={0}
        zIndex={-1}
        opacity={{ base: 1, lg: 0 }}
        transition="opacity 400ms ease"
        willChange="opacity"
      >
        <Image
          src="/static/images/sqtf/bg_mobile.jpg"
          alt="BCA SQTF Mobile"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Navbar */}
      <Box
        minH={{ base: "50px", md: "65px", lg: "100px" }}
        px={{ base: "25px", md: "50px", xl: "100px", "2xl": "130px" }}
        py={{ base: "20px", md: "30px", lg: "60px" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          position="relative"
          w={{ base: "60px", md: "75px", lg: "120px" }}
          h={{ base: "25px", lg: "30px" }}
        >
          <Image
            src="/static/images/sqtf/logo-bca.png"
            alt="sqtf"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          as={Link}
          href="/"
          position="relative"
          w={{ base: "65px", md: "80px", lg: "120px" }}
          h={{ base: "25px", lg: "30px" }}
          cursor="pointer"
          pointerEvents="auto"
        >
          <Image
            src="/static/images/sqtf/logo-uniskai.png"
            alt="uniskai-logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          position="relative"
          w={{ base: "65px", md: "80px", lg: "120px" }}
          h={{ base: "25px", lg: "40px" }}
        >
          <Image
            src="/static/images/sqtf/logo-sq.png"
            alt="sqtf-logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>

      {/* Main */}
      <Box
        px={{ lg: "50px", xl: "80px", "2xl": "120px" }}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        // bgColor="yellow"
      >
        <Box
          display="flex"
          alignItems={{ base: "center", lg: "left" }}
          flexDirection={{ base: "column" }}
          // bgColor="yellow"
        >
          <Box
            display={{ base: "block", md: "block", lg: "block" }}
            position="relative"
            h={{ base: "200px", md: "200px", xl: "350px", "2xl": "400px" }}
            w={{ base: "280px", md: "350px", xl: "450px", "2xl": "600px" }}
          >
            <Image
              src="/static/images/sqtf/logo-bca-sqtf.png"
              alt="bca-sqtf"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
          <Box
            fontFamily="'Helvetica-Neu', sans-serif"
            color="#f9e89b"
            mr={{ lg: "auto" }}
            ms={{ lg: "20px" }}
          >
            <Box display="flex" flexDirection="column">
              <Text
                fontSize={{
                  base: "16px",
                  md: "20px",
                  lg: "22px",
                  xl: "26px",
                  "2xl": "30px",
                }}
                fontWeight="600"
              >
                30 JAN - 01 FEB 2026
              </Text>
              <Text
                fontSize={{
                  base: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight="300"
              >
                MAIN ATRIUM CENTRE POINT MALL, MEDAN
              </Text>
              <Text
                opacity={{ base: 0, lg: 1 }}
                transform={{ base: "translateY(8px)", lg: "translateY(0px)" }}
                transition="opacity 300ms ease, transform 300ms ease"
                visibility={{ base: "hidden", lg: "visible" }}
                fontSize={{
                  base: "0",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight="300"
                mt={{ base: "0px", lg: "50px" }}
              >
                TRAVEL DOESN'T CHANGE WHO WE ARE.
                <br />
                IT UNCOVERS WHO WE'VE ALWAYS BEEN.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          mx={{ base: "40px", md: "80px", lg: "none" }}
          mr={{ lg: "20px", xl: "30px", "2xl": "50px" }}
          mt={{ lg: "60px", xl: "80px", "2xl": "100px" }}
        >
          <Text
            align="center"
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="whiteAlpha.900"
            fontFamily="'Jost', sans-serif"
            my={{ base: "30px", md: "15px" }}
          >
            Pre-book With Our Team.
          </Text>
          <SimpleGrid columns={2} columnGap="6" rowGap="4">
            {salesEvent.map((sales) => (
              <SalesButton name={sales.name} phone={sales.phone} />
            ))}
          </SimpleGrid>
        </Box>
        <Box
          fontFamily="'Helvetica-Neu', sans-serif"
          color="#f9e89b"
          display="flex"
          justifyContent="center"
          mt="40px"
        >
          <Text
            opacity={{ base: 1, lg: 0 }}
            transform={{ base: "translateY(8px)", lg: "translateY(0px)" }}
            transition="opacity 300ms ease, transform 300ms ease"
            visibility={{ base: "visible", lg: "hidden" }}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "0px",
            }}
            fontWeight="400"
          >
            TRAVEL DOESN'T CHANGE WHO WE ARE.
            <br />
            IT UNCOVERS WHO WE'VE ALWAYS BEEN.
          </Text>
        </Box>
      </Box>

      {/* footer */}
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        minH={{ base: "50px", lg: "100px" }}
        px={{ base: "20px", lg: "60px", xl: "90px", "2xl": "120px" }}
        pb={{ base: "30px", lg: "60px", xl: "70px" }}
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Text
          fontSize={{
            base: "8px",
            md: "12px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight="300"
          color="#f9e89b"
        >
          BCA berizin dan diawasi oleh Otoritas Jasa Keuangan
          <br />
          BCA merupakan peserta penjamin LPS
        </Text>

        <Text
          fontSize={{
            base: "8px",
            md: "12px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight="300"
          color="#f9e89b"
          textAlign="right"
        >
          www.uniskai.id
        </Text>
      </Box>
    </Box>
  );
};

export default page;
