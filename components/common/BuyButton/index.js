// components/common/BuyButton.js
import { Button } from "@chakra-ui/react";

const BuyButton = ({ onClick, label }) => {
  return (
    <Button colorScheme="yellow" bgColor="brown" color="white" size="lg" width="300px" onClick={onClick}>
      {label} 
    </Button>
  );
};

export default BuyButton;
