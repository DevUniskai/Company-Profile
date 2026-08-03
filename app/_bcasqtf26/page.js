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
      bgColor={bgColor}
      color="#b14824"
      borderRadius="8px"
      borderWidth="1px"
      borderColor="#b14824"
      fontWeight="500"
      fontFamily="'Helvetica-Neu', sans-serif"
      letterSpacing="1px"
      _hover={{ transform: "scale(1.02)" }}
      transition="transform 150ms ease, background-color 150ms ease"
      w="100%"
      h={{ base: "34px", md: "38px", lg: "40px", xl: "46px", "2xl": "52px" }}
      px={{ base: 2, md: 4 }}
      py={0}
      fontSize={{ base: "12px", md: "14px", lg: "15px", xl: "17px", "2xl": "18px" }}
    >
      {name}
    </Button>
  );
}

const page = () => {
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
          w={{ base: "55px", md: "70px", lg: "90px", xl: "110px", "2xl": "130px" }}
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
          w={{ base: "62px", md: "80px", lg: "100px", xl: "120px", "2xl": "140px" }}
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
          w={{ base: "64px", md: "82px", lg: "100px", xl: "120px", "2xl": "145px" }}
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
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent={{ base: "center", lg: "space-between" }}
        gap={{ base: 8, lg: 6, xl: 12 }}
        w="100%"
        maxW="1500px"
        mx="auto"
        px={{ base: "25px", md: "50px", lg: "30px", xl: "50px", "2xl": "40px" }}
        py={{ base: "10px", lg: "20px" }}
      >
        {/* Left column: event logo + date/location */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          flexShrink={0}
        >
          <Box
            position="relative"
            aspectRatio={846 / 513}
            w={{
              base: "250px",
              sm: "290px",
              md: "330px",
              lg: "300px",
              xl: "380px",
              "2xl": "440px",
            }}
          >
            <Image
              src="/static/images/sqtf26/assets/MAIN-LOGO.png"
              alt="BCA SQTF"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          <Box
            fontFamily="'Helvetica-Neu', sans-serif"
            color="#b14824"
            mt={{ base: "8px", lg: "6px", xl: "12px" }}
          >
            <Text
              fontSize={{
                base: "22px",
                md: "26px",
                lg: "22px",
                xl: "28px",
                "2xl": "34px",
              }}
              fontWeight="700"
              letterSpacing="0.5px"
            >
              31 JUL - 02 AUG 2026
            </Text>
            <Text
              fontSize={{
                base: "12px",
                md: "15px",
                lg: "12px",
                xl: "16px",
                "2xl": "19px",
              }}
              fontWeight="500"
              letterSpacing="1px"
            >
              MAIN ATRIUM - CENTRE POINT MALL, MEDAN
            </Text>
          </Box>
        </Box>

        {/* Right column: pre-book + team grid */}
        <Box
          w="100%"
          maxW={{ base: "420px", md: "520px", lg: "540px", xl: "660px", "2xl": "760px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            position="relative"
            aspectRatio={1031 / 252}
            w="100%"
            maxW={{ base: "360px", md: "460px", lg: "100%" }}
          >
            <Image
              src="/static/images/sqtf26/assets/PREBOOK.png"
              alt="Pre-book"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          <Text
            display="flex"
            justifyContent="center"
            alignItems="baseline"
            flexWrap="wrap"
            gap={{ base: "2", md: "3", lg: "3" }}
            fontSize={{
              base: "16px",
              md: "22px",
              lg: "20px",
              xl: "26px",
              "2xl": "30px",
            }}
            color="#b14824"
            fontFamily="'Helvetica-Neu', sans-serif"
            fontWeight="700"
            textAlign="center"
            my={{ base: "12px", lg: "14px", xl: "20px" }}
          >
            <span>WITH OUR TEAM</span>{" "}
            <span className="font-light text-[9px] md:text-[13px] lg:text-[13px] xl:text-[16px]">
              START FROM
            </span>{" "}
            <span>07 JULY 2026</span>
          </Text>

          <SimpleGrid columns={2} gap={{ base: 2, md: 3, lg: 3 }} w="100%">
            {salesEvent.map((sales) => (
              <SalesButton
                key={sales.phone}
                name={sales.name}
                phone={sales.phone}
                bgColor={sales.bgColor}
              />
            ))}
          </SimpleGrid>
        </Box>
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
          fontSize={{ base: "8px", sm: "9px", md: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
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
    </Box>
  );
};

export default page;
