import { useState, useEffect } from "react";
import { Flex, Link, Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton, Textarea } from "@chakra-ui/react";
import Image from 'next/image';
import NextLink from "next/link"
import fx from '@m00nbyte/currency-converter';
import CurrencySelect from "../CurrencySelect"; // Import the custom dropdown component

const Checkout = ({ productName, initialQuantity = 1, tourPrice }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [quantity, setQuantity] = useState(initialQuantity);
  const [price, setPrice] = useState(tourPrice[0].price);
  const [isPayment, setIsPayment] = useState(false);
  const [cardError, setCardError] = useState('');
  const [descriptionText, setDescription] = useState("");
  const [currency, setCurrency] = useState('USD');
  const [convertedPrice, setConvertedPrice] = useState(price);

  useEffect(() => {
    if (quantity < 2) {
      setQuantity(2); // Minimum quantity is 2
    } else if (quantity >= 2 && quantity < 4) {
      setPrice(tourPrice[0].price);
    } else if (quantity >= 4 && quantity < 8) {
      setPrice(tourPrice[1].price);
    } else {
      setPrice(tourPrice[2].price);
    }
  }, [quantity, tourPrice]);

  useEffect(() => {
    const convertPrice = async () => {
      if (currency === 'IDR') {
        try {
          const result = await fx(price, 'USD', 'IDR');
          setConvertedPrice(result);
        } catch (error) {
          console.error("Currency conversion error:", error);
        }
      } else {
        setConvertedPrice(price);
      }
    };

    convertPrice();
  }, [price, currency]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 2) {
      setQuantity(quantity - 1);
    }
  };

  const handleExpiry = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');

    if (value.length >= 3) {
        value = `${value.substring(0, 2)}/${value.substring(2, 6)}`;
    }
    setCardExp(value);

    // Basic validation for MM/YYYY format
    const [month, year] = value.split('/');
    if (value.length !== 7 || month < 1 || month > 12 || year.length !== 4) {
        setCardError('Invalid date format');
    } else {
        setCardError('');
    }
    if (month && year) {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const inputYear = parseInt(year, 10);
      const inputMonth = parseInt(month, 10);

      if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
          setCardError('Expiry date must be in the future');
      } else {
          setCardError('');
      }
  }
};

  const handleCheckout = async (e) => {
    e.preventDefault();
    if(cardError !== "") return;

    // Determine the total price to send based on currency
    const totalPrice = currency === 'USD' ? convertedPrice * quantity : price * quantity;

    const data = {
      id: ~~(Math.random() * 100) + 1,
      productName: productName,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phone,
      descriptionText: descriptionText,
      cardNumber: cardNumber,
      cardExp: cardExp,
      cardCvv: cardCvv,
      currency: currency // Send currency type to the back end
    }

    const response = await fetch("/api/transaction", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const requestData = await response.json();
    // console.log(data);
    // console.log(requestData);
    window.location.href = requestData.url;
  };

  const formatPrice = (value, currency) => {
    let formattedValue = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);

    if (currency === 'USD') {
      return `USD ${formattedValue}`;
    } else if (currency === 'IDR') {
      return `IDR ${formattedValue.replace(/,/g, '.')}`;
    } else {
      return `${currency} ${formattedValue}`;
    }
  };

  return (
    <Box p={5} pb={2} borderWidth="1px" borderRadius="lg" borderColor="brown">
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl">
          {isPayment ? "Payment" : "Checkout"}
        </Text>
        <CurrencySelect currency={currency} setCurrency={setCurrency} />
      </HStack>
      <Box mb={2}>
        <strong>Product:</strong> {productName}
      </Box>
      <Box mb={2}>
        <strong>Price:</strong> {formatPrice(convertedPrice, currency)}
      </Box>
      <Box mb={2}>
        <strong>Quantity:</strong>
        <HStack>
          <IconButton
            icon={<Image src="/static/images/minus.png" alt="Minus" width={16} height={16} />}
            onClick={decreaseQuantity}
            size="sm" // Set the button size to small
            variant="outline" // Optional: change the button variant
            borderColor={"Beige"}
          />
          <Text borderBottom="1px solid brown">{quantity}</Text>
          <IconButton
            icon={<Image src="/static/images/plus.png" alt="Plus" width={16} height={16} />}
            onClick={increaseQuantity}
            size="sm" // Set the button size to small
            variant="outline" // Optional: change the button variant
            borderColor={"Beige"}
          />
        </HStack>
      </Box>
      <Box mb={4}>
        <strong>Total Price:</strong> {formatPrice(convertedPrice * quantity, currency)}
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
          <FormControl id="description">
            <FormLabel>Additional Notes (e.g: pick up location, allergic food, etc)</FormLabel>
            <Textarea 
              value={descriptionText} 
              onChange={(e) => setDescription(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <Button type="submit" bgColor="brown" colorScheme="yellow" textColor="white" size="md">
            Checkout
          </Button>
        </VStack>
      </form>
      <Flex flexDir="column" alignItems={"center"} mt={2}>
            <Text lineHeight={1} color={"brown"} fontSize={10}>
              If you have any difficulties in making payments, contact us at :
            </Text>
            <Link
              as={NextLink}
              href="https://wa.me/6282129925066"
              target="_blank"
              fontSize={10}
              color={"brown"}
            >
              +62 821-2992-5066
            </Link>
      </Flex>
    </Box>
  );
};

export default Checkout;
