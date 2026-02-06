"use client";

import Fonts from "@/styles/font";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
