import { Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const SalesContactItem = ({ title, description, items }) => {
  const newTitle = title.charAt(0).toUpperCase() + title.slice(1) + " Team";
  return (
    <Flex
      flexDir={"column"}
      backgroundColor={"Beige"}
      pt={7}
      borderRadius={14}
      mb={1}
    >
      <Heading color={"brown"} fontSize={"24px"} textAlign={"center"} mb={3}>
        {newTitle}
      </Heading>
      {description && (
        <Text
          fontSize={"xs"}
          color={"brown"}
          textAlign={"center"}
          px={4}
          mb={2}
        >
          {description}
        </Text>
      )}
      <Flex
        mt={0}
        flexDir={"column"}
        justifyContent={"space-around"}
        h={"100%"}
        px={8}
        pb={15}
      >
        {items.map((item, key) => {
          return (
            <Link
              border={"1px solid #846353"}
              textAlign={"center"}
              as={NextLink}
              key={key}
              target="_blank"
              href={`https://wa.me/${item.phone}`}
              borderRadius={"8px"}
              p={2}
              textDecor={"none"}
              mt={4}
              color={"brown"}
              _hover={{
                backgroundColor: "brown",
                color: "Beige",
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SalesContactItem;
