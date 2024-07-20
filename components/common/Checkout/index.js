import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton, RadioGroup, Radio, Textarea } from "@chakra-ui/react";
import Image from 'next/image'; // Import Image component from next/image
import CheckoutButton from "@/components/checkout_form/CheckoutButton";

const Checkout = ({ productName, initialQuantity = 1, tourPrice }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(initialQuantity);
  const [price, setPrice] = useState(tourPrice[0].price);

  // Food preference states
  const [halal, setHalal] = useState("");
  const [halalOther, setHalalOther] = useState("");
  const [vegetarian, setVegetarian] = useState("");
  const [vegetarianOther, setVegetarianOther] = useState("");
  const [beef, setBeef] = useState("");
  const [beefOther, setBeefOther] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

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
  const orderId = ~~(Math.random() * 100) + 1;

  const handleCheckout = async (e) => {
    e.preventDefault();

    console.log({
      orderId,
      firstName,
      lastName,
      email,
      phone,
      productName,
      quantity,
      price,
      totalPrice: price * quantity,
      foodPreferences: {
        halal: halal === "other" ? halalOther : halal,
        vegetarian: vegetarian === "other" ? vegetarianOther : vegetarian,
        beef: beef === "other" ? beefOther : beef,
        additionalNotes,
      },
    });
    alert("Checkout completed! Details submitted.");
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
          <FormControl id="halal" isRequired>
            <FormLabel>Halal/Non Halal/Other</FormLabel>
            <RadioGroup onChange={setHalal} value={halal}>
              <HStack spacing={4}>
                <Radio value="halal">Halal</Radio>
                <Radio value="non-halal">Non Halal</Radio>
                <Radio value="other">Other</Radio>
              </HStack>
            </RadioGroup>
            {halal === "other" && (
              <Input 
                mt={2} 
                placeholder="Please specify" 
                value={halalOther} 
                onChange={(e) => setHalalOther(e.target.value)} 
                borderColor="brown"
                _hover={{ color: "brown", stroke: "brown" }}
              />
            )}
          </FormControl>
          <FormControl id="vegetarian" isRequired>
            <FormLabel>Vegetarian/Vegan/Other</FormLabel>
            <RadioGroup onChange={setVegetarian} value={vegetarian}>
              <HStack spacing={4}>
                <Radio value="vegetarian">Vegetarian</Radio>
                <Radio value="vegan">Vegan</Radio>
                <Radio value="other">Other</Radio>
              </HStack>
            </RadioGroup>
            {vegetarian === "other" && (
              <Input 
                mt={2} 
                placeholder="Please specify" 
                value={vegetarianOther} 
                onChange={(e) => setVegetarianOther(e.target.value)} 
                borderColor="brown"
                _hover={{ color: "brown", stroke: "brown" }}
              />
            )}
          </FormControl>
          <FormControl id="beef" isRequired>
            <FormLabel>Beef/No Beef/Other</FormLabel>
            <RadioGroup onChange={setBeef} value={beef}>
              <HStack spacing={4}>
                <Radio value="beef">Beef</Radio>
                <Radio value="no-beef">No Beef</Radio>
                <Radio value="other">Other</Radio>
              </HStack>
            </RadioGroup>
            {beef === "other" && (
              <Input 
                mt={2} 
                placeholder="Please specify" 
                value={beefOther} 
                onChange={(e) => setBeefOther(e.target.value)} 
                borderColor="brown"
                _hover={{ color: "brown", stroke: "brown" }}
              />
            )}
          </FormControl>
          <FormControl id="additional-notes">
            <FormLabel>Additional Notes</FormLabel>
            <Textarea 
              value={additionalNotes} 
              onChange={(e) => setAdditionalNotes(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <Button type="submit" bgColor="brown" colorScheme="brown" size="md">
            Submit
          </Button>
          <CheckoutButton 
            order_id={orderId} 
            product_name={productName} 
            first_name={firstName} 
            last_name={lastName} 
            user_email={email} 
            user_phoneNumber={phone} 
            food_halal_non={halal === "other" ? halalOther : halal }
            food_vegan={vegetarian === "other" ? vegetarianOther : vegetarian}
            food_beef={beef === "other" ? beefOther : beef}
            add_notes={additionalNotes}
          />
        </VStack>
      </form>
    </Box>
  );
};

export default Checkout;

