"use client";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      // onClick={() => router.back()}
      onClick={() => router.push("/")}
      aria-label="Back"
      position="absolute"
      left={{ base: "30px", md: "40px", lg: "50px" }}
      top="70%"
      transform="translateY(-50%)"
      bg="transparent"
      _hover={{ bg: "transparent", opacity: 0.8 }}
      _active={{ bg: "transparent" }}
      p={0}
      minW="auto"
    >
      <Box
        position="relative"
        w={{ base: "40px", md: "50px", lg: "50px" }}
        h={{ base: "40px", md: "50px", lg: "50px" }}
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
  );
};

export default BackButton;
