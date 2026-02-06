import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const ServiceItem = ({ src, title, slug, description, size = "" }) => {
  const newTitle = title.toLowerCase();

  return (
    <GridItem w="100%">
      <Link as={NextLink} href={`/sales/${slug}/`} mr={4}>
        <Flex flexDir="column" alignItems={{ sm: "center", md: "flex-start" }} >
          <Flex
            width={{ base: "90%", sm: "100%", md: "250px", lg: "282px", xl: "320px" }}
            height={{ base: "90%", md: "160px", lg: "180px", xl: "200px" }}
            justifyContent={"center"}
          >
            <Image src={src} alt={title} width={320} height={200} style={{ borderRadius: "14px" }} />
          </Flex>
          <Flex
            flexDir={"column"}
            bottom={0}
            py={4}
            width={{
              base: "100%",
              sm: "320px",
              md: "250px",
              lg: "282px",
              xl: "320px",
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