"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const page = () => {
  return (
    <Box minH="100vh" overflow="hidden" position="relative">
      <Box position="absolute" inset={0} zIndex={-1}>
        <Image
          src="/static/images/sqtf26/bg-sqtf26.jpeg"
          alt="SQTF Aug26 Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default page;
