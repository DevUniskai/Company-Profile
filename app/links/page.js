"use client";

import { Box, Container, Stack, Heading, Text, Link, Button, Avatar, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

// Minimal, single-file, no external data. Change the constants below and ship it.

const PROFILE = {
  name: "Uniskai",
  tagline: "All your useful links in one polite little page",
  avatarUrl: "/static/images/logo/logo-bulat.png", // swap with your logo if you want a round avatar look
};

// Put your links here. Order = display order.
const LINKS = [
  { label: "Shopee", href: "https://shopee.co.id/uniskai" },
  { label: "Instagram", href: "https://instagram.com/uniskai" },
  { label: "TikTok", href: "https://www.tiktok.com/@uniskai.id" },
  { label: "Website", href: "https://uniskai.id" },
  { label: "Contact", href: "https://uniskai.id/contact" },
//   { label: "WhatsApp", href: "https://wa.me/6281234567890", sub: "Chat cepat ke tim" },
//   { label: "Email", href: "mailto:hello@uniskai.com" },
  { label: "Maps", href: "https://maps.google.com/?q=Uniskai" },
];

export default function LinkInBio() {
  return (
    <Box minH="100vh" bgGradient="linear(to-b, Beige, #f0e6d8)" py={{ base: 8, md: 14 }}>
      <Container maxW="lg">
        <Stack align="center" spacing={6}>
          <Avatar name={PROFILE.name} src={PROFILE.avatarUrl} size="xl" borderWidth="2px" borderColor="brown"/>
          <Stack spacing={1} align="center">
            <Heading size="lg" color="brown">{PROFILE.name}</Heading>
            <Text fontSize="sm" color="brown" opacity={0.8} textAlign="center">
              {PROFILE.tagline}
            </Text>
          </Stack>

          <Divider borderColor="brown" opacity={0.3} />

          <Stack w="100%" spacing={4}>
            {LINKS.map((link) => (
              <Link
                as={NextLink}
                key={link.href}
                href={link.href}
                target="_blank"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  w="100%"
                  h="56px"
                  variant="outline"
                  borderColor="brown"
                  color="brown"
                  bg="whiteAlpha.700"
                  _hover={{ bg: "brown", color: "Beige" }}
                  borderRadius="12px"
                >
                  <Stack direction="column" spacing={0} align="center" w="100%">
                    <Text fontWeight={600}>{link.label}</Text>
                    {link.sub && (
                      <Text fontSize="xs" opacity={0.8}>{link.sub}</Text>
                    )}
                  </Stack>
                </Button>
              </Link>
            ))}
          </Stack>

          <Text fontSize="xs" color="brown" opacity={0.7} pt={2}>
            © {new Date().getFullYear()} Uniskai
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
