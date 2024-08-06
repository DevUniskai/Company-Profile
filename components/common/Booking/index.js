"use client"
import { useState, useEffect } from "react";
import { Flex, Link, Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton, Textarea } from "@chakra-ui/react";
import Image from 'next/image';
import NextLink from "next/link"
import fx from '@m00nbyte/currency-converter';
import CurrencySelect from "../CurrencySelect"; // Import the custom dropdown component
import { useRouter } from "next/navigation";

const Checkout = ({ product_name, initialQuantity = 1, tourPrice }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_phoneNumber, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [quantity, setQuantity] = useState(initialQuantity);
  const [price, setPrice] = useState(tourPrice[0].price);
  const [isPayment, setIsPayment] = useState(false);
  const [cardError, setCardError] = useState('');
  const [add_notes, setDescription] = useState("");
  const [currency, setCurrency] = useState('USD');
  const [convertedPrice, setConvertedPrice] = useState(price);

  const router = useRouter();

  useEffect(() => {
    if (quantity < 4) {
      setQuantity(4); // Minimum quantity is 4
    } else if (quantity >= 4 && quantity <= 8) {
      setPrice(tourPrice[0].price);
    } else {
      setPrice(tourPrice[1].price);
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
    if (quantity > 4) {
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

    try {
        const res = await fetch('/api/user', {
          method: "POST",
          headers: {
            "Content-type" : "application/json"
          },
          body: JSON.stringify({product_name,
            quantity,       
            first_name,         
            last_name,         
            user_email,         
            user_phoneNumber,          
            add_notes})
        })
  
        if (res.ok) {
          router.push('/thankyou')
        } else {
          throw new Error("Failed to add user")
        }
      } catch (error) {
        console.log(error)
      }
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
          {isPayment ? "Payment" : "Book"}
        </Text>
        <CurrencySelect currency={currency} setCurrency={setCurrency} />
      </HStack>
      <Box mb={2}>
        <strong>Product:</strong> {product_name}
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
                value={first_name} 
                onChange={(e) => setFirstName(e.target.value)} 
                borderColor="brown"
                _hover={{ color: "brown", stroke: "brown" }}
              />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input 
                type="text" 
                value={last_name} 
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
              value={user_email} 
              onChange={(e) => setEmail(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input 
              type="tel" 
              value={user_phoneNumber} 
              onChange={(e) => setPhone(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Additional Notes (e.g: food preference, etc)</FormLabel>
            <Textarea 
              value={add_notes} 
              onChange={(e) => setDescription(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
            />
          </FormControl>
          <Button type="submit" bgColor="brown" colorScheme="yellow" textColor="white" size="md">
            Booking
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
