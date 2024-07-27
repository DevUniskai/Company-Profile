import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton, Textarea } from "@chakra-ui/react";
import Image from 'next/image';
import fx from '@m00nbyte/currency-converter';
import CurrencySelect from "../CurrencySelect"; // Import the custom dropdown component
import { POST } from "@/app/transaction/route";

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
  if (cardError !== "") return;

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
      currency: currency
  };

  try {
      const response = fetch("/api/transaction", {
          method: "POST",
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const requestData = response.json();
      if (requestData.error) {
          console.error("Error from backend:", requestData.details);
          return;
      }

      window.location.href = requestData.url;
  } catch (error) {
      console.error("Fetch error:", error);
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
    <Box p={5} borderWidth="1px" borderRadius="lg" borderColor="brown">
      <HStack justifyContent="space-between" mb={2}>
        <Text fontSize="2xl">
          {isPayment ? "Payment" : "Checkout"}
        </Text>
        <CurrencySelect currency={currency} setCurrency={setCurrency} />
      </HStack>
      
      <Box mb={4}>
        <strong>Product:</strong> {productName}
      </Box>
      <Box>
        <strong>Price:</strong> {formatPrice(convertedPrice, currency)}
      </Box>
      <Box mb={4}>
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
            <FormLabel>Additional Notes (e.g: food preference, etc)</FormLabel>
            <Textarea 
              value={descriptionText} 
              onChange={(e) => setDescription(e.target.value)} 
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
