import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bgColor="white" flexDirection="column" px={10} my={6}>
      <Flex flexDirection={"row"} alignItems="center">
        <Flex flexDirection="row" alignItems="center" w="50%">
          <Box pos="relative" h="100px" w="50%" textAlign="left">
            <Image
              src="/static/images/uniskai.png"
              alt="uniskai"
              fill
              objectFit="contain"
            />
          </Box>
          <Flex flexDir={"column"}>
            <Text fontSize="sm" pl={4}>
              Kompleks CBD, Jl. Padang Golf Blok. AA No.3, Suka Damai, Kec.
              Medan Polonia, Kota Medan, Sumatera Utara 20219
            </Text>
            <Text fontSize="sm" pl={4} mt={2}>
              +62 821-2992-5066 (Samuel)
            </Text>
          </Flex>
        </Flex>
        <Flex w="50%" h="100%" justifyContent="flex-end">
          <Link
            as={NextLink}
            href="https://wa.me/6282129925066"
            mr={4}
            target="_blank"
          >
            <Image
              src={"/static/images/whatsapp.png"}
              alt="whatsapp"
              width={20}
              height={20}
            />
          </Link>
          <Link
            as={NextLink}
            href="https://www.tiktok.com/@uniskai.id"
            mr={4}
            target="_blank"
          >
            <Image
              src={"/static/images/tik-tok.png"}
              alt="tiktok"
              width={20}
              height={20}
            />
          </Link>
          <Link
            as={NextLink}
            href="https://www.instagram.com/uniskai/"
            mr={4}
            target="_blank"
          >
            <Image
              src={"/static/images/instagram.png"}
              alt="instagram"
              width={20}
              height={20}
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
