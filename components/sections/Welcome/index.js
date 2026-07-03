import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Box bgColor={"Beige"}>
      <Flex
        position="relative"
        height="100vh"
        backgroundImage="/static/images/bg-new.jpg"
        backgroundPosition="center"
        backgroundSize="cover" //cover
        justifyContent="center"
        alignItems="center"
        color="beige"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        }}
      >
        <Image
          src="/static/images/logo-new.png"
          alt="logo_uniskai_header"
          width={156}
          height={52}
          style={{
            position: "relative",
            zIndex: 1,
          }}
        />
      </Flex>
    </Box>
  );
};

export default Welcome;
