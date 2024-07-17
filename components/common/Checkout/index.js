import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton } from "@chakra-ui/react";
import Image from 'next/image'; // Import Image component from next/image
import data from "@/components/sections/Tour/tour_list.json";

const Checkout = ({ id, productName, initialQuantity = 1, tourPrice }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 4) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;

  const handleCheckout = async (e) => {
    e.preventDefault();

    // Passing data dari backend (route.js)
    const data = {
            id: id,
            productName: productName,
            price: price,
            quantity: quantity,
            totalPrice: totalPrice, 
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phone
    }

    const response = await fetch("/api/tokenizer", {
        method: "POST",
        body: JSON.stringify(data)
    })

    const requestData = await response.json()
    console.log({requestData})
    // console.log({ id, firstName, lastName, email, phone, productName, quantity, price, totalPrice: price * quantity });
    // alert("Checkout completed! Details submitted.");
  };

  
  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" borderColor="brown">
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
          <HStack spacing={4} w="100%">
            <FormControl id="first-name" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                borderColor="brown"
                _hover={{ color: "brown", stroke: "brown" }}
              />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                borderColor="brown"
                _hover={{ color: "brown", stroke: "brown" }}
              />
            </FormControl>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <Button type="submit" bgColor="brown" colorScheme="brown" size="md">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Checkout;
