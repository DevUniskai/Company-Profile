"use client";
import {
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import BuyButton from "@/components/common/BuyButton";
import Booking from "@/components/common/Booking"
import ReusableModal from "@/components/common/Modal";
import { useEffect } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const DetailBookClient = ({ tour }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   // Render midtrans snap token (snapscript)
  //   const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
  //   const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    
  //   const script = document.createElement('script')
  //   script.src = snapScript
  //   script.setAttribute('data-client-key', clientKey)
  //   script.async = true

  //   document.body.appendChild(script)

  //   return () => {
  //     document.body.removeChild(script)
  //   };
  // }, []);

  const handleBuyButtonClick = () => {
    const phoneNumber = "6282129925066"; // Your phone number in international format
    const message = `Hi, I have a group larger than 8. I'd like to discuss more about ${tour.title} packages. `;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <Box textAlign="center" mt={8}>
        <BuyButton label="Contact Us" onClick={handleBuyButtonClick} />
      </Box>

      
      {/* <ReusableModal isOpen={isOpen} onClose={onClose} title="Book Details">
        <Booking id={tour.id} product_name={tour.title} tourPrice={tour.tourPrice} />
      </ReusableModal> */}
    </>
  );
};

export default DetailBookClient;