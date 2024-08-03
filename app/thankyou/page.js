// pages/thank-you.js

import Footer from "@/components/sections/Footer";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      bg="gray.100"
    >
      <Heading as="h1" mb={4}>
        Thank You!
      </Heading>
      <Text fontSize="lg" mb={8}>
        Your submission has been received.
      </Text>
      <Link href="/" passHref>
        <Button colorScheme="teal">Go to Homepage</Button>
      </Link>
    </Box>
  );
};

export default ThankYouPage;
