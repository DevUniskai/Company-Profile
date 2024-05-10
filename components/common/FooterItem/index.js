import { Flex, Text } from "@chakra-ui/react";

const FooterItem = ({ title, description }) => {
  return (
    <Flex flexDir="column">
      <Text fontWeight={600} color={"white"} letterSpacing={3} mb={5}>
        {title}
      </Text>
      <Text lineHeight={1.3} color={"Beige"}>
        {description}
      </Text>
    </Flex>
  );
};

export default FooterItem;
