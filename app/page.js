"use client";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import Tour from "@/components/sections/Tour";
import Welcome from "@/components/sections/Welcome";
import { Box, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    const scroll = window.scrollY;

    const shouldBeVisible = scroll >= 20;

    if (shouldBeVisible == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box w={"100%"} h={"100%"} backgroundColor="white">
      {!show && <Navbar />}
      <Welcome />
      <Services />
      <Tour />
      <Box px={10}>
        <Divider />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
