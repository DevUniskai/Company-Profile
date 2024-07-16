// components/common/BuyButton.js
import { Button } from "@chakra-ui/react";

const BuyButton = ({ onClick, label = "Buy Now" }) => {
  return (
    <Button colorScheme="brown" bgColor="brown" color="white" size="lg" onClick={onClick}>
      {label}
    </Button>
  );
};

export default BuyButton;
