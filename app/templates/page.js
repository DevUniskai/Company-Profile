import NextImage from "next/image";
import { Box, Container, Heading, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { TEMPLATE_DOCUMENTS } from "@/libs/templateDocuments.mjs";

export const metadata = {
  title: "Template Surat",
  description: "Daftar template dokumen - Uniskai",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export default function TemplatesPage() {
  const templateEntries = Object.entries(TEMPLATE_DOCUMENTS);

  return (
    <Box bg="Beige" minH="100svh" color="black">
      <Box as="header" bg="brown" py={5} display="flex" justifyContent="center">
        <a href="/" aria-label="Uniskai Home">
          <NextImage
            src="/static/images/uniskai_header.png"
            width={192}
            height={68}
            alt="Uniskai"
            priority
          />
        </a>
      </Box>

      <Container
        as="main"
        maxW="1100px"
        py={{ base: 5, md: 7 }}
        px={{ base: 4, md: 6 }}
      >
        <Heading as="h1" size={{ base: "md", md: "lg" }} color="brown" mb={4}>
          Daftar Template Dokumen
        </Heading>

        <VStack align="stretch" spacing={3}>
          {templateEntries.map(([slug, template]) => (
            <Box
              key={slug}
              border="1px solid"
              borderColor="brown"
              rounded="md"
              bg="white"
              px={4}
              py={3}
            >
              <ChakraLink
                href={`/${slug}`}
                color="brown"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
              >
                {template.title}
              </ChakraLink>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
