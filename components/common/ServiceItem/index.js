import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const ServiceItem = ({ src, title, description }) => {
  return (
    <GridItem w="100%">
      <Link as={NextLink} href={"/contact"} mr={4}>
        <Flex flexDir="column" alignItems={{ sm: "center", md: "flex-start" }}>
          <Flex
            width={{ base: "100%", md: "282px", xl: "376px" }}
            height={{ base: "100%", md: "180px", xl: "240px" }}
            justifyContent={"center"}
          >
            <Image src={src} alt={title} width={376} height={240} />
          </Flex>
          <Flex
            flexDir={"column"}
            bottom={0}
            py={4}
            width={{
              base: "100%",
              sm: "376px",
              md: "188px",
              lg: "282px",
              xl: "376px",
            }}
            borderBottomRadius={8}
          >
            <Heading size={{ base: "lg", md: "lg" }}>{title}</Heading>
            <Text fontSize={{ base: "sm", md: "sm" }} fontWeight={500}>
              {description}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </GridItem>
  );
};

export default ServiceItem;
