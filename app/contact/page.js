import SalesContactList from "@/components/sections/SalesContactList";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const ContactSales = () => {
  return (
    <Box 
      position="relative"
      minH="100vh"                          // <-- biar ikut memanjang sesuai konten
      bgImage="url('/static/images/halloween-bg.jpg')" // gunakan url()
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      color="beige"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,                           // top/left/right/bottom: 0
        bg: "rgba(0, 0, 0, 0.5)",
        zIndex: 0,
        pointerEvents: "none",
      }}   
    >
      <Flex pt={10} justifyContent={"center"}>
        {/* <BackButton /> */}
        <Image
          src={"/static/images/halloween_uniskai_header.png"}
          width={192}
          height={68}
          alt="logo"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        />
      </Flex>
      <Flex
        color="orange"
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
        style={{           
          position: "relative",
          zIndex: 1,
        }}
      >
        <Text
          fontSize={{ base: "3xl", sm: "4xl" }}
          mb={6}
          letterSpacing={"5px"}
          textAlign={"center"}
        >
          CONTACT US
        </Text>
        <SalesContactList />
      </Flex>
    </Box>
  );
};

export default ContactSales;
