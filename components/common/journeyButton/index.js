"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function JourneyButton({
  href = "/",
  label = "Step Into the Journey",
  size = "lg",
  ...props
}) {
  return (
    <Button
      as={NextLink}
      href={href}
      size={size}
      variant="outline"
      borderWidth="2px"
      borderColor="whiteAlpha.900"
      color="whiteAlpha.900"
      borderRadius="999px"
      px={{ base: 6, md: 8 }}
      fontWeight="400"
      _hover={{
        bg: "whiteAlpha.100",
        transform: "scale(1.04)",
      }}
      {...props}
    >
      {label}&nbsp;→
    </Button>
  );
}
