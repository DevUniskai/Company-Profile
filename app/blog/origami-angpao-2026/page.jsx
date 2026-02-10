import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Header from "@/components/common/Header";

export const metadata = {
  title: "CNY 2026",
  description: "Angpao, Folded Into Meaning.",
};

const CNY2026 = () => {
  return (
    <>
      <Box
        minHeight="100dvh"
        bgColor="#BF1E2E"
        // alignContent="center"
        // justifyItems="center"
        textColor="#C4996C"
      >
        <Header bgColor="#0C0C0C" color="#C4996C" />
        <Flex
          flexDirection="column"
          px={{ base: 10, sm: 16 }}
          py={10}
          maxW="800px"
          mx="auto"
          lineHeight="1.5"
          // fontSize={{ base: "14px", sm: "16px", md: "18px" }}
        >
          <Heading as="h1" mt={6} mb={1}>
            Angpao, Folded Into Meaning.
          </Heading>
          <Text mb={12}>
            Some objects are meant to be used once. Others are meant to be
            remembered.
          </Text>

          <Text>Angpao ini lahir dari sebuah pertanyaan sederhana:</Text>
          <Text fontWeight="bold" mt={2}>
            {/* <Text as="span" fontWeight="bold"> */}
            bisakah sebuah amplop menjadi lebih dari sekadar wadah?
            {/* </Text> */}
          </Text>
          <Text mt={2} mb={4}>
            Bukan hanya menyimpan, tapi juga bercerita. Bukan hanya memberi,
            tapi juga meninggalkan rasa.
          </Text>

          <Flex
            backgroundPosition="center"
            backgroundSize="cover"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="Beige"
          >
            <video
              src="/static/images/cny-2026/angpao-step.mp4"
              width="750"                                                                                                                                                                                                                  
              height="200"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="auto"
              style={{ objectFit: "cover" }}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CNY2026;
