"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, SimpleGrid, Button, Text } from "@chakra-ui/react";
import { salesEvent } from "@/components/sections/SalesContactList/contact";

function waLink(phone, text) {
  const clean = String(phone).replace(/[^\d]/g, "");
  const msg = encodeURIComponent(
    text || "Hi, saya mau pre-book untuk BCA SQTF.",
  );
  return `https://wa.me/${clean}?text=${msg}`;
}

function SalesButton({ name, phone, bgColor }) {
  return (
    <Button
      as="a"
      href={waLink(phone)}
      target="_blank"
      rel="noopener noreferrer"
      variant="solid"
      bgColor={bgColor} // #2d38a9 + 50%
      color="#d47a5b"
      borderRadius="8px"
      borderWidth="1px"
      borderColor="#d47a5b"
      fontWeight="500"
      fontFamily="'Helvetica-Neu', sans-serif"
      letterSpacing="1px"
      _hover={{
        transform: "scale(1.02)",
      }}
      transition="transform 150ms ease, background-color 150ms ease"
      h={{ base: "32px", lg: "36px", xl: "40px", "2xl": "44px" }}
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
          src="/static/images/sqtf26/assets/BACKGROUND.jpg"
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
          src="/static/images/sqtf26/assets/BACKGROUND.jpg"
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
            src="/static/images/sqtf26/assets/BCA.png"
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
            src="/static/images/sqtf26/assets/Logo-Uniskai.png"
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
            src="/static/images/sqtf26/assets/SA.png"
            alt="sqtf-logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>

      {/* Main */}
      <Box
        px={{ lg: "30px", xl: "40px", "2xl": "120px" }}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        // bgColor="yellow"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column" }}
        >
          <Box
            display={{ base: "block", md: "block", lg: "block" }}
            position="relative"
            minH={{
              base: "200px",
              md: "200px",
              lg: "300px",
              xl: "320px",
              "2xl": "400px",
            }}
            minW={{
              base: "280px",
              md: "320px",
              lg: "380px",
              xl: "400px",
              "2xl": "400px",
            }}
          >
            <Image
              src="/static/images/sqtf26/assets/MAIN-LOGO.png"
              alt="bca-sqtf"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
          <Box fontFamily="'Helvetica-Neu', sans-serif" color="#d47a5b">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text
                fontSize={{
                  base: "20px",
                  lg: "24px",
                  xl: "24px",
                  "2xl": "28px",
                }}
                fontWeight="700"
                letterSpacing="0.5px"
              >
                31 JUL - 02 AUG 2026
              </Text>
              <Text
                fontSize={{
                  base: "12px",
                  md: "16px",
                  xl: "24px",
                  "2xl": "28px",
                }}
                fontWeight="500"
                letterSpacing="1px"
              >
                MAIN ATRIUM - CENTRE POINT MALL, MEDAN
              </Text>
            </Box>
          </Box>
        </Box>
        <Box mx={{ base: "20px", md: "80px", lg: "none" }}>
          <Box
            display={{ base: "block", md: "block", lg: "block" }}
            position="relative"
            mx={{ base: "auto", md: "auto", lg: "none" }}
            minH={{ base: "100px", md: "120px", xl: "240px", "2xl": "200px" }}
            minW={{ base: "280px", md: "280px", xl: "400px", "2xl": "800px" }}
          >
            <Image
              src="/static/images/sqtf26/assets/PREBOOK.png"
              alt="bca-sqtf"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={{ base: "2", md: "4", lg: "4" }}
            fontSize={{
              base: "16px",
              md: "20px",
              xl: "32px",
              "2xl": "36px",
            }}
            color="#d47a5b"
            fontFamily="'Helvetica-Neu', sans-serif"
            mb={{ base: "15px", lg: "30px", xl: "none" }}
            mx="-10px"
            fontWeight="700"
          >
            <span>WITH OUR TEAM</span>{" "}
            <span className="font-light text-[8px] md:text-[12px] lg:text-[16px] ">
              START FROM
            </span>{" "}
            <span>07 JULY 2026</span>
          </Text>
          <SimpleGrid columns={2} gap={{ base: 2, lg: 3 }}>
            {salesEvent.map((sales) => (
              <SalesButton
                name={sales.name}
                phone={sales.phone}
                bgColor={sales.bgColor}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      {/* footer */}
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={{ base: 10, lg: 0 }}
        minH={{ base: "60px", lg: "100px" }}
        px={{ base: "10px", lg: "20px", xl: "90px", "2xl": "120px" }}
        pb={{ base: "0px", lg: "60px", xl: "70px" }}
        display="flex"
        flexDirection={{ base: "column", lg: "column", xl: "row" }}
        gap={{ lg: 8, xl: 0 }}
        justifyContent="space-between"
        alignItems={{ base: "center" }}
      >
        <Text
          fontSize={{
            base: "7px",
            md: "12px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight={{ base: "700", lg: "700", xl: "500" }}
          color="#d47a5b"
        >
          BCA berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia •
          BCA merupakan peserta penjamin LPS
        </Text>

        <Text
          display={{ base: "none", lg: "none", xl: "block" }}
          fontSize={{
            base: "8px",
            md: "12px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight="500"
          color="#d47a5b"
        >
          www.uniskai.id/bcasqtf26
        </Text>
        <Text
          display={{ base: "none", lg: "none", xl: "block" }}
          fontSize={{
            base: "8px",
            md: "12px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight="600"
          color="#d47a5b"
        >
          instagram.com/uniskai
        </Text>

        <Box
          display={{ base: "flex", lg: "flex", xl: "none" }}
          width="100%"
          justifyContent="space-between"
        >
          <Text
            fontSize={{
              base: "8px",
              md: "12px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            fontWeight="700"
            color="#d47a5b"
          >
            www.uniskai.id/bcasqtf26
          </Text>
          <Text
            fontSize={{
              base: "8px",
              md: "12px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            fontWeight="700"
            color="#d47a5b"
          >
            instagram.com/uniskai
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
