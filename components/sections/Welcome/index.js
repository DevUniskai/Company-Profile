import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Box bgColor={"Beige"}>
      <Flex
        height={"110vh"}
        backgroundImage={"/static/images/bg.jpg"}
        backgroundPosition={"center"}
        backgroundSize="cover"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="Beige"
      >
        <Image
          src="/static/images/all-text.png"
          alt="logo_uniskai_header"
          width={1400}
          height={100}
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
