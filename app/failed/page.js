import Footer from "@/components/sections/Footer";
import { Box, Flex, Text, Heading, UnorderedList, ListItem, List } from "@chakra-ui/react";
import Image from "next/image";

const Failed = () => {
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
          Something went wrong, please try again or contact our staff tour@uniskai.com
        </Heading>
       
      </Flex>
      <Footer />
    </Box>
  );
};

export default Failed;
