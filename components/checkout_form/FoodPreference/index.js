import { FormControl, FormLabel, RadioGroup, Stack, Radio, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const FoodPreferences = () => {
  const [halal, setHalal] = useState("");
  const [vegan, setVegan] = useState("");
  const [beef, setBeef] = useState("");
  const [otherHalal, setOtherHalal] = useState("");
  const [otherVegan, setOtherVegan] = useState("");
  const [otherBeef, setOtherBeef] = useState("");

  return (
    <VStack spacing={4} align="stretch">
      <FormControl id="halal" isRequired>
        <FormLabel>Food Preference (Halal):</FormLabel>
        <RadioGroup onChange={setHalal} value={halal}>
          <Stack direction="row">
            <Radio value="halal">Halal</Radio>
            <Radio value="non-halal">Non Halal</Radio>
            <Radio value="other">Other</Radio>
          </Stack>
        </RadioGroup>
        {halal === "other" && (
          <Input 
            mt={2} 
            type="text" 
            placeholder="Please specify" 
            value={otherHalal} 
            onChange={(e) => setOtherHalal(e.target.value)} 
            name="otherHalal"
            borderColor="brown"
            _hover={{ borderColor: "brown" }}
          />
        )}
      </FormControl>
      <FormControl id="vegan" isRequired>
        <FormLabel>Food Preference (Vegan):</FormLabel>
        <RadioGroup onChange={setVegan} value={vegan}>
          <Stack direction="row">
            <Radio value="vegan">Vegan</Radio>
            <Radio value="vegetarian">Vegetarian</Radio>
            <Radio value="other">Other</Radio>
          </Stack>
        </RadioGroup>
        {vegan === "other" && (
          <Input 
            mt={2} 
            type="text" 
            placeholder="Please specify" 
            value={otherVegan} 
            onChange={(e) => setOtherVegan(e.target.value)} 
            name="otherVegan"
            borderColor="brown"
            _hover={{ borderColor: "brown" }}
          />
        )}
      </FormControl>
      <FormControl id="beef" isRequired>
        <FormLabel>Food Preference (Beef):</FormLabel>
        <RadioGroup onChange={setBeef} value={beef}>
          <Stack direction="row">
            <Radio value="beef">Beef</Radio>
            <Radio value="no-beef">No Beef</Radio>
            <Radio value="other">Other</Radio>
          </Stack>
        </RadioGroup>
        {beef === "other" && (
          <Input 
            mt={2} 
            type="text" 
            placeholder="Please specify" 
            value={otherBeef} 
            onChange={(e) => setOtherBeef(e.target.value)} 
            name="otherBeef"
            borderColor="brown"
            _hover={{ borderColor: "brown" }}
          />
        )}
      </FormControl>
    </VStack>
  );
};

export default FoodPreferences;
