import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex backgroundColor="white" zIndex={2} position="fixed" w={"100%"} p={4}>
      <Box>
        <Image
          src={"/static/images/uniskai_header.png"}
          width={192}
          height={68}
          alt="logo"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
