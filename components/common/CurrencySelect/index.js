import { Menu, MenuButton, MenuList, MenuItem, Button, HStack, Text, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CurrencySelect = ({ currency, setCurrency }) => {
  return (
    <Menu>
      <MenuButton 
        as={Button} 
        borderWidth="1px" 
        borderColor="brown" 
        width="120px" 
        bg="Beige" 
        _hover={{ bg: "Beige"}} 
        _active={{ bg: "Beige" }}
      >
        <HStack justifyContent="space-between">
          <HStack>
            <Image 
              src={currency === 'USD' ? "/static/images/us.png" : "/static/images/id.png"} 
              alt={currency} 
              boxSize="16px" // Adjust image size here
            />
            <Text>{currency}</Text>
          </HStack>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList bg="Beige" borderColor="brown">
        <MenuItem onClick={() => setCurrency('USD')} bg="Beige" _hover={{ color: "brown" }}>
          <HStack>
            <Image src="/static/images/us.png" alt="USD" boxSize="16px" /> {/* Adjust image size here */}
            <Text>USD</Text>
          </HStack>
        </MenuItem>
        <MenuItem onClick={() => setCurrency('IDR')} bg="Beige" _hover={{ color: "brown" }}>
          <HStack>
            <Image src="/static/images/id.png" alt="IDR" boxSize="16px" /> {/* Adjust image size here */}
            <Text>IDR</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CurrencySelect;
