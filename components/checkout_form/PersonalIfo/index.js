import { FormControl, FormLabel, Input, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const PersonalInfo = () => (
  <VStack spacing={4} align="stretch">
    <HStack spacing={4}>
      <FormControl id="first-name" isRequired>
        <FormLabel>First Name:</FormLabel>
        <Input 
          type="text" 
          name="firstName" 
          borderColor="brown"
          _hover={{ borderColor: "brown" }}
        />
      </FormControl>
      <FormControl id="last-name" isRequired>
        <FormLabel>Last Name:</FormLabel>
        <Input 
          type="text" 
          name="lastName" 
          borderColor="brown"
          _hover={{ borderColor: "brown" }}
        />
      </FormControl>
    </HStack>
    <FormControl id="email" isRequired>
      <FormLabel>Email:</FormLabel>
      <Input 
        type="email" 
        name="email" 
        borderColor="brown"
        _hover={{ borderColor: "brown" }}
      />
    </FormControl>
    <FormControl id="phone" isRequired>
      <FormLabel>Phone Number:</FormLabel>
      <Input 
        type="tel" 
        name="phone" 
        borderColor="brown"
        _hover={{ borderColor: "brown" }}
      />
    </FormControl>
  </VStack>
);

export default PersonalInfo;
