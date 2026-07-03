import Image from "next/image";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

const BCASQTF26 = () => {
  return (
    <Box
      minH="100dvh"
      display="flex"
      flexDirection="column"
      position="relative"
      overflowX="hidden"
      isolation="isolate"
    >
      {/* Background */}
      <Box position="absolute" inset={0} zIndex={-1}>
        <Image
          src="/static/images/sqtf26/landing-page/BACKGROUND.png"
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
          aspectRatio={139 / 44}
          w={{ base: "55px", md: "70px", lg: "90px", xl: "110px", "2xl": "130px" }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/LOGO-BCA.png"
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
          aspectRatio={162 / 45}
          w={{ base: "62px", md: "80px", lg: "100px", xl: "120px", "2xl": "140px" }}
          cursor="pointer"
          pointerEvents="auto"
        >
          <Image
            src="/static/images/sqtf26/landing-page/LOGO-UNISKAI.png"
            alt="Uniskai"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          position="relative"
          flexShrink={0}
          aspectRatio={146 / 53}
          w={{ base: "64px", md: "82px", lg: "100px", xl: "120px", "2xl": "145px" }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/LOGO-SQ.png"
            alt="Singapore Airlines"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        w="100%"
        px={{ base: "25px", md: "50px" }}
        py={{ base: "20px", lg: "10px" }}
      >
        {/* Main Logo */}
        <Box
          position="relative"
          aspectRatio={846 / 513}
          w={{
            base: "260px",
            sm: "300px",
            md: "380px",
            lg: "420px",
            xl: "520px",
            "2xl": "620px",
          }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/MAIN-LOGO.png"
            alt="BCA SQTF"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        {/* Date + Location */}
        <Box
          fontFamily="'Helvetica-Neu', sans-serif"
          color="#d47a5b"
          mt={{ base: "10px", lg: "14px", xl: "20px" }}
        >
          <Text
            fontSize={{
              base: "24px",
              md: "30px",
              lg: "36px",
              xl: "42px",
              "2xl": "48px",
            }}
            fontWeight="700"
            letterSpacing="0.5px"
          >
            31 JUL - 02 AUG 2026
          </Text>
          <Text
            fontSize={{
              base: "13px",
              md: "17px",
              lg: "20px",
              xl: "24px",
              "2xl": "28px",
            }}
            fontWeight="500"
            letterSpacing="1px"
          >
            MAIN ATRIUM - CENTRE POINT MALL, MEDAN
          </Text>
        </Box>

        {/* Click here button */}
        <Box
          as={Link}
          href="/bcasqtf26"
          position="relative"
          aspectRatio={374 / 69}
          w={{
            base: "200px",
            md: "240px",
            lg: "260px",
            xl: "300px",
            "2xl": "340px",
          }}
          mt={{ base: "28px", md: "36px", xl: "48px" }}
          cursor="pointer"
          pointerEvents="auto"
          transition="transform 150ms ease"
          _hover={{ transform: "scale(1.03)" }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/CLICK-HERE.png"
            alt="Click here"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
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
          color="#d47a5b"
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
          color="#d47a5b"
        >
          www.uniskai.id/bcasqtf26
        </Text>
        <Text
          display={{ base: "none", xl: "block" }}
          flexShrink={0}
          fontSize={{ xl: "15px", "2xl": "17px" }}
          fontWeight="500"
          color="#d47a5b"
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
            color="#d47a5b"
          >
            www.uniskai.id/bcasqtf26
          </Text>
          <Text
            fontSize={{ base: "9px", md: "12px", lg: "13px" }}
            fontWeight="500"
            color="#d47a5b"
          >
            instagram.com/uniskai
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BCASQTF26;
