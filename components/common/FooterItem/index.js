import { Flex, Text } from "@chakra-ui/react";

const FooterItem = ({ title, description }) => {
  return (
    <Flex flexDir="column" mb={{ base: 10, lg: 0 }}>
      <Text fontWeight={600} color={"orange"} letterSpacing={3} mb={5}>
        {/* color={"white"} */}
        {title}
      </Text>
      <Text lineHeight={1.3} color={"beige"}>
        {/* color={"Beige"} */}
        {description}
      </Text>
    </Flex>
  );
};

export default FooterItem;
