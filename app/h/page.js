// pages/h.js

import { Box, Container, VStack, HStack, Image, Heading, Text, Button, Link as ChakraLink, Divider } from "@chakra-ui/react";
import Link from "next/link";

const HPage = () => {
  return (
    <Box bg="black" color="white" minH="100vh" display="flex" flexDir="column">
      {/* Header minimal */}
      <Box as="header" px={{ base: 4, md: 8 }} py={4}>
        {/* <Link href="/" passHref>
          <Button variant="ghost" color="white" _hover={{ bg: "whiteAlpha.200" }}>
            ← Home
          </Button>
        </Link> */}
      </Box>

      {/* Main content */}
      <Container as="main" maxW="720px" flex="1" px={{ base: 4, md: 8 }} pb={12}>
        <VStack spacing={6} align="stretch">
          {/* Foto + Nama */}
          <VStack spacing={4} align="center" textAlign="center">
            <Box
              w={{ base: "140px", md: "180px" }}
              h={{ base: "140px", md: "180px" }}
              overflow="hidden"
              rounded="full"
              border="2px solid"
              borderColor="whiteAlpha.300"
              bgColor={"white"}
            >
              <Image
                src="/static/images/black.png"
                alt="Profile Photo"
                w="100%"
                h="100%"
                objectFit="contain"
                objectPosition="center"
              />
            </Box>

            <Heading as="h1" size="lg" letterSpacing="wide">
              Herbert Johan
            </Heading>
            <Text fontSize="md" color="whiteAlpha.700">
              COO · Uniskai
            </Text>
            {/* <Text fontSize="sm" color="whiteAlpha.700">
              Passion: travel, product design, photography
            </Text> */}
          </VStack>

          <Divider borderColor="whiteAlpha.300" />

          {/* Kontak Utama */}
          <VStack spacing={3} align="stretch">
            <Heading as="h2" size="sm" color="whiteAlpha.800" textTransform="uppercase" letterSpacing="widest">
              Contacts
            </Heading>

            <HStack justify="space-between" wrap="wrap">
              <Text color="whiteAlpha.800">Email</Text>
              <ChakraLink href="mailto:herbert@uniskai.id" color="white" _hover={{ textDecoration: "underline" }}>
                herbert@uniskai.id
              </ChakraLink>
            </HStack>

            <HStack justify="space-between" wrap="wrap">
              <Text color="whiteAlpha.800">WhatsApp</Text>
              <ChakraLink
                href="https://wa.me/62819872228"
                isExternal
                color="white"
                _hover={{ textDecoration: "underline" }}
              >
                +62 819-872-228
              </ChakraLink>
            </HStack>

            <HStack justify="space-between" wrap="wrap">
              <Text color="whiteAlpha.800">Instagram</Text>
              <ChakraLink
                href="https://instagram.com/uni.bert"
                isExternal
                color="white"
                _hover={{ textDecoration: "underline" }}
              >
                @uni.bert
              </ChakraLink>
            </HStack>

            {/* Tambahkan kontak lain bila perlu */}
            {/* <HStack justify="space-between" wrap="wrap">
              <Text color="whiteAlpha.800">LinkedIn</Text>
              <ChakraLink
                href="https://www.linkedin.com/in/yourprofile"
                isExternal
                color="white"
                _hover={{ textDecoration: "underline" }}
              >
                linkedin.com/in/yourprofile
              </ChakraLink>
            </HStack> */}
          </VStack>

          <Divider borderColor="whiteAlpha.300" />

          {/* CTA vCard */}
          <VStack pt={2}>
            {/* Untuk sekarang tombol ini menuju placeholder; nanti kita ganti ke route vCard */}
            <Link href="/contact/h.vcf" passHref>
              <Button
                size="lg"
                w="full"
                bg="white"
                color="black"
                _hover={{ bg: "whiteAlpha.800" }}
              >
                Add to Contact
              </Button>
            </Link>
            {/* <Text fontSize="xs" color="whiteAlpha.600" textAlign="center">
              iOS & Android supported • vCard akan kita aktifkan setelah route siap
            </Text> */}
          </VStack>
        </VStack>
      </Container>

      {/* Footer minimal (opsional) */}
      <Box as="footer" px={{ base: 4, md: 8 }} py={6} color="whiteAlpha.600" textAlign="center">
        © {new Date().getFullYear()} Uniskai
      </Box>
    </Box>
  );
};

export default HPage;