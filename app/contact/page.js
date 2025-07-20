import SalesContactList from "@/components/sections/SalesContactList";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const ContactSales = () => {
  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"brown"}>
      
      <Flex pt={10} justifyContent={"center"}>
        {/* <BackButton /> */}
        <Image
          src={"/static/images/uniskai_header.png"}
          width={192}
          height={68}
          alt="logo"
        />
      </Flex>
      <Flex
        color="Beige"
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
      >
        <Text
          fontSize={{ base: "3xl", sm: "4xl" }}
          mb={6}
          letterSpacing={"5px"}
          textAlign={"center"}
        >
          CONTACT US
        </Text>
        <SalesContactList />
      </Flex>
    </Box>
  );
};

export default ContactSales;
