import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Welcome = () => {
  return (
    <Flex
      height={"100vh"}
      backgroundImage={"/static/images/main.jpg"}
      backgroundPosition={"center"}
      backgroundSize="cover"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
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
  );
};

export default Welcome;
