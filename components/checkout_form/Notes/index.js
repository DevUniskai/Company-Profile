import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

const Notes = () => (
  <FormControl id="notes">
    <FormLabel>Additional Notes:</FormLabel>
    <Textarea 
      name="notes"
      placeholder="Any additional notes or requests" 
      borderColor="brown"
      _hover={{ borderColor: "brown" }}
    />
  </FormControl>
);

export default Notes;
