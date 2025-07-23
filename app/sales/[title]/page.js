
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Button, ButtonGroup} from '@chakra-ui/react';
import Image from "next/image";
import SalesContactList from "../../../components/sections/SalesContactList";
import data from "../../../components/sections/SalesContactList/contact_list.json";
import { usePathname } from 'next/navigation'
import Footer from "@/components/sections/Footer";

const ContactByTitle = () => {

    const pathname = usePathname();
    const split = pathname.split("/");
    const slug = decodeURIComponent(split[2]);

    const [results, setResults] = useState([]);;
    
    useEffect(() => {
    //   console.log(slug);
      const filteredData = data.contact.filter(items => items.slug === slug);
    //   console.log(filteredData);

      setResults(filteredData);
    }, [slug]);
  
    return (
        <Box w={"100%"} minH={"100vh"} backgroundColor={"brown"}>
          <Flex pt={10} justifyContent={"center"}>
            <Image
              src={"/static/images/uniskai_header.png"}
              width={130}
              height={68}
              alt="logo"
            />
          </Flex>
          {/* <Flex
            color="Beige"
            flexDirection="column"
            px={{ base: 10, sm: 16 }}
            py={10}
          >
            <Button mb={6} colorScheme='white' leftIcon={'<'}>Button</Button>
          </Flex> */}
          <Flex
            color="Beige"
            flexDirection="column"
            px={{ base: 10, sm: 16 }}
            py={10}
            mt={15}
          >
            {/* <Text
              fontSize={{ base: "3xl", sm: "4xl" }}
              mb={6}
              letterSpacing={"5px"}
              textAlign={"center"}
            >
              CONTACT US
            </Text> */}
            {results.length > 0 && <SalesContactList results={results} />}
            {/* <Footer /> */}
          </Flex>
        </Box>
      );
}


export default ContactByTitle;