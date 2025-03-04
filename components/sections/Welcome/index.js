import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextImage from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Welcome = () => {
  return (
    // CODE LAMA ADA DI NOTION 
    <Box bgColor="Beige" position="relative" height="100vh">
      {/* Background layer */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('/static/images/waspada_bg.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        zIndex={1}
      />

      {/* Content layer */}
      <Flex
        position="relative"
        zIndex={2}
        height="100%"
        align="center"
        justify="center"
        gap={8}
        maxW="100%"
        mx="auto"
        // px={4}
      >
        {/* Phone image container */}
        <Box position="relative" flex="1" height="100%" maxH="100%">
          <NextImage
            src="/static/images/waspada_phone-1.png"
            alt="Waspada phone"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* Caution note container */}
        <Box position="relative" flex="1" height="100%" maxH="100%">
          <NextImage
            src="/static/images/waspada_note-1.png"
            alt="Waspada note"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Welcome;
