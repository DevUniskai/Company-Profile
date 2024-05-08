import { Flex, Heading, Text } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Flex
      height={"100vh"}
      backgroundImage={"/static/images/welcome.jpg"}
      backgroundPosition={"center"}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Heading size="3xl">Uniskai</Heading>
      <Text size="lg" backgroundColor="lightBlue" borderRadius={5} p={1}>
        Your Partner Travel Solution
      </Text>
    </Flex>
  );
};

export default Welcome;
