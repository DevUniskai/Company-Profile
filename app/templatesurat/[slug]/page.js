import NextImage from "next/image";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { TEMPLATE_DOCUMENTS } from "@/libs/templateDocuments.mjs";

function getDocKey(rawDoc) {
  if (typeof rawDoc !== "string") return null;
  return TEMPLATE_DOCUMENTS[rawDoc] ? rawDoc : null;
}

function HiddenTemplatePage({ template }) {
  const pdfViewerPath = `${template.pdfPath}#view=FitH`;

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
          {template.title}
        </Heading>

        {/* <HStack spacing={3} mb={4} flexWrap="wrap">
          <Button
            as="a"
            href={template.pdfPath}
            download
            bg="Beige"
            border="1px solid"
            borderColor="brown"
            color="brown"
            _hover={{ bg: "brown", color: "Beige" }}
          >
            Unduh PDF
          </Button>
        </HStack> */}

        <Box
          border="1px solid"
          borderColor="brown"
          rounded="md"
          bg="white"
          overflow="hidden"
        >
          <Box
            as="iframe"
            src={pdfViewerPath}
            title={template.title}
            w="100%"
            h={{ base: "64svh", md: "78svh" }}
            aria-label={`PDF ${template.title}`}
            border="0"
          />
        </Box>
        {/* <Text mt={3} fontSize="sm" color="secondary">
          Jika PDF tidak tampil di perangkat Anda, gunakan tombol "Unduh PDF".
        </Text> */}
      </Container>
    </Box>
  );
}

export function generateMetadata({ params }) {
  const template = TEMPLATE_DOCUMENTS[params.slug];
  if (!template) return {};
  return {
    title: template.title,
    description: `${template.title} - Uniskai`,
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
}

export default function TemplatePage({ params }) {
  const template = TEMPLATE_DOCUMENTS[params.slug];
  if (!template) notFound();
  return <HiddenTemplatePage template={template} />;
}