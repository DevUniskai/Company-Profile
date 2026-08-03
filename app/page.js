"use client";
import Welcome from "@/components/sections/Welcome";
import { Box, Divider } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  const toast = useToast();
  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");
    if (status == "VERIFIED")
      toast({
        title: "Payment Success",
        description: `Payment ${searchParams.get("authentication_id")} success`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
  }, []);

  return (
    <Box w={"100%"} h={"100%"} backgroundColor="white">
      <Welcome />
      <Analytics />
    </Box>
  );
};

export default Home;
