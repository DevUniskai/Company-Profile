"use client";

import { Flex, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header = ({ bgColor = "brown", color = "Beige" }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bgColor={bgColor}
      color={color}
      position="relative"
      pt={10}
      py={{ base: 6, md: 7 }}
    >
      <Button
        onClick={() => window.location.href = "/blog"}
        position="absolute"
        left={{ base: "20px", md: "30px", lg: "40px" }}
        top={{ base: "40%", md: "35%", lg: "35%" }}
        bg="transparent"
        _hover={{ bg: "transparent", opacity: 0.8 }}
        _active={{ bg: "transparent" }}
        p={0}
        minW="auto"
      >
        <Box
          position="relative"
          w={{ base: "30px", md: "50px", lg: "50px" }}
          h={{ base: "30px", md: "50px", lg: "50px" }}
        >
          <Image
            src="/static/images/back.png"
            alt="Back"
            fill
            style={{ objectFit: "contain" }}
            sizes="(min-width: 992px) 50px, (min-width: 768px) 40px, 30px"
          />
        </Box>
      </Button>

      <Image
        src="/static/images/uniskai_header.png"
        width={192}
        height={68}
        alt="logo"
        style={{ height: "auto" }}
      />
    </Flex>
  );
};

export default Header;
