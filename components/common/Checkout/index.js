import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton } from "@chakra-ui/react";
import Image from 'next/image'; // Import Image component from next/image

const Checkout = ({ productName, initialQuantity = 1, tourPrice }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(initialQuantity);
  const [price, setPrice] = useState(tourPrice[0].price);

  useEffect(() => {
    if (quantity < 4) {
      setQuantity(4); // Minimum quantity is 4
    } else if (quantity >= 4 && quantity <= 8) {
      setPrice(tourPrice[0].price);
    } else {
      setPrice(tourPrice[1].price);
    }
  }, [quantity, tourPrice]);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle the checkout process here
    console.log({ name, email, phone, productName, quantity, price, totalPrice: price * quantity });
    alert("Checkout completed! Details submitted.");
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 4) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg">
      <Text fontSize="2xl" mb={5}>
        Checkout
      </Text>
      <Box mb={4}>
        <strong>Product:</strong> {productName}
      </Box>
      <Box mb={4}>
        <strong>Price:</strong> USD {price.toFixed(2)}
      </Box>
      <Box mb={4}>
        <strong>Quantity:</strong>
        <HStack>
          <IconButton 
            icon={<Image src="/static/images/Enter.png" alt="Minus" width={24} height={24} />} 
            onClick={decreaseQuantity} 
          />
          <Text>{quantity}</Text>
          <IconButton 
            icon={<Image src="/static/images/Enter.png" alt="Plus" width={24} height={24} />} 
            onClick={increaseQuantity} 
          />
        </HStack>
      </Box>
      <Box mb={4}>
        <strong>Total Price:</strong> USD {totalPrice.toFixed(2)}
      </Box>
      <form onSubmit={handleCheckout}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="md">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Checkout;
