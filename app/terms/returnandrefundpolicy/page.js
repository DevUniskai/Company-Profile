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
            COMPLAINT AND REFUND POLICY
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
          Tidak Ada Penjaminan
        </Heading>
        <Text mb={4}>
            If you wish to complain and refund, please send an e-mail to tour@uniskai.com or text us via WhatsApp +62 821-2992-5066 and tell
            us your order number, reason for refund and the evidence.
        </Text>
        <Text mb={4}>
            Once confirmed and we have received the evidence, our staff will contact you to discuss the next steps regarding this matter.
        </Text>

        <Heading as="h2" fontSize="2xl" mt={8} mb={4}>
          Terms and Conditions
        </Heading>
        <UnorderedList>
            <ListItem>Complaints must be submitted a maximum of 24 hours after the tour activity is completed.</ListItem>
            <ListItem>Refund requests must be accompanied by clear evidence so that we can process them.</ListItem>
            <ListItem>Complaints and Refund policy stated are subjective to management changes in accordance to offers & promotion applied.</ListItem>
        </UnorderedList>

        <Text mt={8} mb={4}>
            In case you need any other information, please contact our staff via WhatsApp +62 821-2992-5066 or send an e-mail to tour@uniskai.com
        </Text>

      </Flex>
      <Footer />
    </Box>
  );
};

export default ReturnRefundPolicy;
