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
      bg="Beige"
    >
      <Heading as="h1" mb={4} color={"brown"}>
        Thank You for Booking Domestic Tour with Us!
      </Heading>
      <Text fontSize="lg" mb={8} color={"brown"}>
        Thank you for your reservation. 
        Our Staff will contact you shortly.
      </Text>
      <Link href="/" passHref>
        <Button color="white" bgColor="brown" colorScheme="yellow">Go to Homepage</Button>
      </Link>
    </Box>
  );
};

export default ThankYouPage;
