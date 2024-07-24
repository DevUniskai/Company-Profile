import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack, IconButton, Textarea } from "@chakra-ui/react";
import Image from 'next/image'; // Import Image component from next/image

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
  const [isPayment, setIsPayment] = useState(false)
  const [cardError, setCardError] = useState('');
  const [descriptionText, setDescription] = useState("");

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

  const handleExpiry = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');

    if (value.length >= 3) {
        value = `${value.substring(0, 2)}/${value.substring(2, 6)}`;
    }
    setCardExp(value);

    // Basic validation for MM/YYYY format
    const [month, year] = value.split('/');
    console.log(`${value} ${month > 12}`)
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

  const totalPrice = price * quantity;
  const orderId = ~~(Math.random() * 100) + 1;

  const handleCheckout = async (e) => {
    e.preventDefault();
    if(cardError != "") return

    // Passing data dari backend (route.js)
    const data = {
            id: orderId,
            productName: productName,
            price: price,
            quantity: quantity,
            totalPrice: totalPrice, 
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phone,
            descriptionText: descriptionText,
            cardNumber:cardNumber,
            cardExp: cardExp,
            cardCvv: cardCvv
    }

   const response = await fetch("/api/transaction", {
    method: "POST",
    body: JSON.stringify(data)
   })

    const requestData = await response.json()
    console.log(data)
    console.log(requestData)
    window.location.href = requestData.url
  };

  
  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" borderColor="brown">
      <Text fontSize="2xl" mb={5}>
        {isPayment ? "Payment" : "Checkout"}
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
          <FormControl id="description">
            <FormLabel>Additional Notes (e.g: food preference, etc)</FormLabel>
            <Textarea 
              // type="text" 
              value={descriptionText} 
              onChange={(e) => setDescription(e.target.value)} 
              borderColor="brown"
              _hover={{ color: "brown", stroke: "brown" }}
              // rows={2}
            />
          </FormControl>
          <Button type="submit" bgColor="brown" colorScheme="brown" size="md">
            Submit
          </Button>
        </VStack>
      </form>
      {/* { !isPayment &&
        (
          <>
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
                <Button type="submit" bgColor="brown" colorScheme="brown" size="md" onClick={() => setIsPayment(true)}>
                  Payment
                </Button>
              </VStack>
            </>
          )
        }
        { isPayment &&
          <>
            <form onSubmit={handleCheckout}>
              <VStack spacing={4}>
                {cardError != "" && <p>{cardError}</p>}
                <FormControl id="cardNumber" isRequired>
                    <FormLabel>Card Number</FormLabel>
                    <Input x
                      type="text" 
                      value={cardNumber} 
                      onChange={(e) => setCardNumber(e.target.value)} 
                      borderColor="brown"
                      _hover={{ color: "brown", stroke: "brown" }}
                    />
                  </FormControl>
                  <HStack>
                    <FormControl id="cardExp" isRequired>
                      <FormLabel>Card Expired</FormLabel>
                      <Input 
                        type="text" 
                        value={cardExp} 
                        onChange={handleExpiry} 
                        borderColor="brown"
                        placeholder="MM/YYYY"
                        _hover={{ color: "brown", stroke: "brown" }}
                      />
                    </FormControl>
                    <FormControl id="cardCvv" isRequired>
                      <FormLabel>Card CVV</FormLabel>
                      <Input 
                        type="text" 
                        value={cardCvv} 
                        onChange={(e) => setCardCvv(e.target.value)} 
                        borderColor="brown"
                        _hover={{ color: "brown", stroke: "brown" }}
                      />
                    </FormControl>
                  </HStack>
                  <Button type="submit" bgColor="brown" colorScheme="brown" size="md">
                    Pay
                  </Button>
                </VStack>
            </form>
          </>
        } */}
    </Box>
  );
};

export default Checkout;
