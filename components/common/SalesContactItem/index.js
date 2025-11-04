import { Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const SalesContactItem = ({ title, description, items, variant = "all" }) => {
  const newTitle = title.charAt(0).toUpperCase() + title.slice(1) + " Team";

  const isSingle = variant === "single";
  const bg = isSingle ? "brown" : "Beige";
  const textColor = isSingle ? "Beige" : "brown";
  const borderColor = isSingle ? "Beige" : "brown";
  const hoverBg = isSingle ? "Beige" : "brown";
  const hoverText = isSingle ? "brown" : "Beige";

  return (
    <Flex
      flexDir={"column"}
      backgroundColor={bg}
      pt={7}
      borderRadius={14}
      mb={1}
      maxW={"700px"}
      w={"100%"}
    >
      <Heading color={textColor} fontSize={"22px"} textAlign={"center"} mb={1}>
        {newTitle}
      </Heading>
      {description && (
        <Text
          fontSize={"xs"}
          color={textColor}
          textAlign={"center"}
          px={4}
          mb={1}
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
        {items.map((item, key) => (
          <Link
            border={`1px solid ${borderColor}`}
            textAlign={"center"}
            as={NextLink}
            key={key}
            target="_blank"
            href={`https://wa.me/${item.phone}`}
            borderRadius={"8px"}
            p={2}
            textDecor={"none"}
            mt={4}
            color={textColor}
            _hover={{
              backgroundColor: hoverBg,
              color: hoverText,
            }}
          >
            {item.name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default SalesContactItem;