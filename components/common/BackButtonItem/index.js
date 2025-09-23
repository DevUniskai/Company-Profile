"use client";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Box>
      <Button
        onClick={() => router.back()}
        leftIcon={<ArrowBackIcon />}
        variant="ghost"
        colorScheme="whiteAlpha" // kontras di bg cokelat
        size="sm"
        _hover={{ bg: "whiteAlpha.300" }}
      >
        Kembali
      </Button>
    </Box>
  );
};

export default BackButton;
