// app/blog/page.js  (Server Component)
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
  LinkBox,
  LinkOverlay,
  AspectRatio,
} from "@chakra-ui/react";
import Footer from "@/components/sections/Footer";

// ====== Data daftar post ======
const posts = [
  {
    slug: "mediterranean-magic",
    title:
      "Mediterranean Magic: 9 Nights, 9 Ports, 1 Unforgettable Cruise aboard Norwegian Viva",
    date: "2025-08-29",
    excerpt:
      "Imagine sipping Turkish coffee at sunrise in Istanbul… and just days later, raising a glass to the Santorini sunset...",
    cover: "/static/images/athen.png",
  },
  {
    slug: "visa-asean",
    title:
      "Visa ASEAN 5 Tahun ke China: Fasilitas Baru untuk Pebisnis Indonesia dan Keluarganya",
    date: "2025-09-15",
    excerpt:
      "Visa ASEAN 5 Tahun ke China: Fasilitas Baru untuk Pebisnis Indonesia dan Keluarganya...",
    cover: "/static/images/china-flag.jpg",
  },
  {
    slug: "visa-schengen",
    title:
      "Schengen Visa 5 Tahun untuk WNI: Peluang Baru lewat Skema Visa Cascade",
    date: "2025-09-15",
    excerpt:
      "Buat kamu warga negara Indonesia (WNI) yang sering bepergian ke Eropa, ada kabar gembira...",
    cover: "/static/images/schengen-flag.jpg",
  },
  {
    slug: "apec-abtc",
    title:
      "Apa Itu APEC Business Travel Card?",
    date: "2025-09-20",
    excerpt:
      "Pernah dengar tentang APEC Business Travel Card (ABTC)?...",
    cover: "/static/images/apec-card.jpg",
  }
];

// ====== SEO metadata ======
export const metadata = {
  title: "Blog",
  description: "Daftar artikel Uniskai",
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Box minH="100svh" bg="Beige" color="black" display="flex" flexDir="column">
      {/* Header */}
      <Flex as="header" justify="center" bg="brown" py={6}>
        <Link href="/" aria-label="Uniskai Home">
          <Image
            src="/static/images/uniskai_header.png"
            width={192}
            height={68}
            alt="logo"
            priority
          />
        </Link>
      </Flex>

      {/* Main */}
      <Box as="main" flex="1" py={7}>
        <Box maxW="1000px" mx="auto" py={2} px={4}>
          <Heading mb={6} color="brown">
            Blog
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {sorted.map((p) => (
              <LinkBox
                key={p.slug}
                as={Card}
                bg="white"
                // border="1px solid"
                borderColor="secondary"
                transition="all 120ms ease"
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
              >
                <CardBody>
                  {/* Cover */}
                  {p.cover ? (
                    <AspectRatio ratio={16 / 9} mb={4} borderRadius="12px" overflow="hidden">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </AspectRatio>
                  ) : (
                    <Flex
                      mb={4}
                      h="160px"
                      align="center"
                      justify="center"
                      bg="Beige"
                      borderRadius="12px"
                    >
                      <Text color="secondary" fontSize="sm">
                        No cover
                      </Text>
                    </Flex>
                  )}

                  <Heading size="md" mb={2} color="brown">
                    <LinkOverlay as={Link} href={`/blog/${p.slug}`}>
                      {p.title}
                    </LinkOverlay>
                  </Heading>

                  <Text fontSize="sm" color="secondary" mb={2}>
                    {new Date(p.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </Text>

                  <Text noOfLines={3}>{p.excerpt}</Text>

                  {/* hint kecil di bawah */}
                  <Text mt={3} fontSize="sm" color="lightBlue">
                    Baca selengkapnya →
                  </Text>
                </CardBody>
              </LinkBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
