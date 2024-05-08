import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Flex
      height={"100vh"}
      backgroundImage={"/static/images/welcome.jpg"}
      backgroundPosition={"center"}
      backgroundSize="cover"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      boxShadow="inset 0 0 0 100vh rgba(0,0,0,.2);"
    >
      <Heading size="3xl">Uniskai</Heading>
      <Text size="lg" backgroundColor="lightBlue" borderRadius={5} p={1}>
        Your Partner Travel Solution
      </Text>
    </Flex>
  );
};

export default Welcome;
