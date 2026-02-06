"use client";
import {
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import BuyButton from "@/components/common/BuyButton";
import Checkout from "@/components/common/Checkout";
import ReusableModal from "@/components/common/Modal";
import { useEffect } from "react";

const DetailTourClient = ({ tour }) => {
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
    onOpen();
  };

  return (
    <>
      <Box textAlign="center" mt={8}>
        <BuyButton label="Buy Now"onClick={handleBuyButtonClick} />
      </Box>

      <ReusableModal isOpen={isOpen} onClose={onClose} title="Checkout Details">
        <Checkout id={tour.id} productName={tour.title} tourPrice={tour.tourPrice} />
      </ReusableModal>
    </>
  );
};

export default DetailTourClient;
