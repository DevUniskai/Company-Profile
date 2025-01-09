import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Box bgColor={"Beige"}>
      <Flex
        height={{ base: "100vh", md: "100vh" }}
        backgroundImage={"/static/images/main_sqtf.jpg"}
        backgroundPosition={"center"}
        backgroundSize={{ base: "cover", md: "contain" }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="Beige"
        px={{ base: 4, md: 8 }}
      >
        <Image
          src="/static/images/uniskai_header.png"
          alt="logo_uniskai_header"
          width={188}
          height={52}
        />

        {/* <Heading size="3xl">Uniskai</Heading>
        <Text size="lg" backgroundColor="lightBlue" borderRadius={5} p={1}>
          Your Partner Travel Solution
        </Text> */}
      </Flex>

      {/* SQTF HEADER */}

      {/* <Box display="flex" justifyContent="center" height={"50hv"} mt={0.8}>
        <Link
          as={NextLink}
          href={"/contact"}
          _hover={{ textDecoration: "none" }}
        >
          <Image
            src="/static/images/sqtf_gif.gif"
            alt="example gif"
            width="2000"
            height="500"
          />
        </Link>
      </Box> */}
    </Box>
  );
};

export default Welcome;
