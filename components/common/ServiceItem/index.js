import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const ServiceItem = ({ src, title, description }) => {
  return (
    <GridItem w="100%">
      <Flex flexDir="column">
        <Image src={src} alt={title} width={376} height={240} />
        <Box bottom={0} py={4} w={"100%"} width={376} borderBottomRadius={8}>
          <Heading size={{ base: "lg", md: "lg" }}>{title}</Heading>
          <Text fontSize={{ base: "sm", md: "sm" }} fontWeight={500}>
            {description}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default ServiceItem;
