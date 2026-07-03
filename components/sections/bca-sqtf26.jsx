import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Text, Container } from "@chakra-ui/react";

const BCASQTF26 = () => {
  return (
    <Box
      backgroundImage="/static/images/sqtf26/landing-page/BACKGROUND.png"
      height="100vh"
    >
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
          h={{ base: "25px", lg: "40px" }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/LOGO-BCA.png"
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
          h={{ base: "25px", lg: "40px" }}
          cursor="pointer"
          pointerEvents="auto"
        >
          <Image
            src="/static/images/sqtf26/landing-page/LOGO-UNISKAI.png"
            alt="uniskai-logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        <Box
          position="relative"
          w={{ base: "65px", md: "80px", lg: "120px" }}
          h={{ base: "25px", lg: "50px" }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/LOGO-SQ.png"
            alt="sqtf-logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {/* Main Logo */}
        <Box
          display={{ base: "block", md: "block", lg: "block" }}
          position="relative"
          minH={{ base: "280px", md: "200px", xl: "350px", "2xl": "400px" }}
          minW={{ base: "280px", md: "350px", xl: "450px", "2xl": "600px" }}
        >
          <Image
            src="/static/images/sqtf26/landing-page/MAIN-LOGO.png"
            alt="bca-sqtf"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        {/* Main Text */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="'Helvetica-Neu', sans-serif"
          color="#d47a5b"
          mx="auto"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text
              fontSize={{
                base: "24px",
                md: "28px",
                lg: "32px",
                xl: "36px",
                "2xl": "40px",
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
        </Box>

        <Link href="/bcasqtf26" passHref>
          <Box
            minW={{ base: "240px", md: "280px", lg: "280px" }}
            minH={{ base: "120px", md: "160px", lg: "80px" }}
            position="relative"
            my={{base: "40px", lg: "none"}}
          >
            <Image
              src="/static/images/sqtf26/landing-page/CLICK-HERE.png"
              alt="sqtf"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        </Link>
      </Box>

      {/* footer */}
      <Box
              position="absolute"
              left={0}
              right={0}
              bottom={{ base: 20, lg: 0 }}
              minH={{ base: "60px", lg: "100px" }}
              px={{ base: "10px", lg: "20px", xl: "90px", "2xl": "120px" }}
              pb={{ base: "0px", lg: "60px", xl: "40px" }}
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
                px={{base:"10px", md:"20px"}}
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

export default BCASQTF26;
