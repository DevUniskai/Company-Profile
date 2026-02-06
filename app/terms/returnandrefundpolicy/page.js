import Footer from "@/components/sections/Footer";
import { Box, Flex, Text, Heading, UnorderedList, ListItem, List } from "@chakra-ui/react";
import Image from "next/image";

const ReturnRefundPolicy = () => {
  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"Beige"} color={"black"}>
      <Flex pt={10} justifyContent={"center"} bgColor={"brown"}>
        <Image
          src={"/static/images/uniskai_header.png"}
          width={192}
          height={68}
          alt="logo"
        />
      </Flex>
      
      <Flex justifyContent={"center"} 
        bgColor={"brown"}
        color="Beige"
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
    >
        <Text mb={6} letterSpacing={"5px"} fontSize={{ base: "3xl", sm: "4xl" }} textAlign="center">
            REFUND POLICY
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
        maxW="1300px"
        mx="auto"
        lineHeight="1.5"
        bgColor={"Beige"}
        color={"brown"}
      >

        <Heading as="h2" fontSize="2xl" mt={8} mb={4}>
        Terms and Conditions
        </Heading>
        <Text mb={4}>
          Please note that refunds are not guaranteed and are subject to our refund policy and management's discretion. However, in exceptional cases with valid reasons, your request may be considered.
        </Text>
        <Text mb={4}>
          To submit a refund request, please email us at tour@uniskai.com or message us via WhatsApp at +62 821-2992-5066, providing your order number and the reason for your request.
        </Text>
        <Text mb={4}>
          Once your request has been received, our team will carefully review the information and contact you to discuss on the appropriate next steps.
        </Text>
        {/* <Text mb={4}>
          Importand information:
        </Text> */}

        <Heading as="h2" fontSize="2xl" mt={8} mb={4}>
          Important information
        </Heading>
        <UnorderedList>
            <ListItem>Refund requests must be submitted at least two weeks before the scheduled tour date.</ListItem>
            <ListItem>Your refund request must be supported by a clear explanation or justification to help us assess it.</ListItem>
            <ListItem>Refunds are processed based on management's policies and regulations, and full refunds will not be issued.</ListItem>
        </UnorderedList>

        <Text mt={8} mb={4}>
          For any further questions, feel free to contact our team via WhatsApp at +62 821-2992-5066 or email us at tour@uniskai.com.
        </Text>

      </Flex>
      <Footer />
    </Box>
  );
};

export default ReturnRefundPolicy;
