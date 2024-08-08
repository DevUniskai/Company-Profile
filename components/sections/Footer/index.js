import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import FooterItem from "@/components/common/FooterItem";

const Footer = () => {
  return (
    <Flex
      bgColor="brown"
      color="Beige"
      px={{ base: 10, sm: 16 }}
      py={10}
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent={"space-between"}
      height={{ base: "auto", lg: 320 }}
    >
      <Box
        width={"204px"}
        height={"56px"}
        position="relative"
        mb={{ base: 10, lg: 0 }}
      >
        <Link
            as={NextLink}
            href="/"
            mr={{ base: 0, md: 10 }}
          >
            <Image src="/static/images/uniskai_footer.png" alt="uniskai" fill />
          </Link>
      </Box>
      <Flex
        flexDir={"column"}
        w={{ base: "100%", lg: "30%" }}
        h={"100%"}
        justifyContent={"space-between"}
        // bgColor={"orange"}
      >
        <FooterItem
          title={"MEDAN"}
          description={
            "Komplek CBD, Jl. Padang Golf Blok. AA No.3, Suka Damai, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20219"
          }
        />
        <FooterItem
          title={"JAKARTA"}
          description={
            "Tokopedia Care Tower Ciputra International Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta"
          }
        />
      </Flex>
      <Flex
        flexDirection="column"
        w={{ base: "100%", lg: "20%" }}
        h={"100%"}
        justifyContent={"space-between"}
        // bgColor={"green"}
      >
        <Flex flexDir="column" mb={{ base: 10, lg: 0 }}>
          <Text fontWeight={600} color={"white"} letterSpacing={3} mb={5}>
            CONTACT US
          </Text>
          <Flex alignItems={"center"}>
            <Text lineHeight={1.3} color={"Beige"} w={"50px"}>
              Phone
            </Text>
            <Text ml={3} mr={1}>
              :
            </Text>
            <Link
              as={NextLink}
              href="https://wa.me/6282129925066"
              target="_blank"
            >
              +62 821-2992-5066
            </Link>
          </Flex>
          <Flex alignItems={"center"}>
            <Text lineHeight={1.3} color={"Beige"} w={"50px"}>
              Email
            </Text>
            <Text ml={3} mr={1}>
              :
            </Text>
            <Link as={NextLink} href="mailto:tour@uniskai.id" target="_blank">
              tour@uniskai.id
            </Link>
          </Flex>
        </Flex>
        <Flex
          justifyContent={{ base: "space-between", md: "center" }}
          w={{ base: "100%", md: "auto" }}
          mb={{ base: 10, lg: 0 }}
        >
          <Link
            as={NextLink}
            href="https://www.instagram.com/uniskai/"
            mr={{ base: 0, md: 10 }}
            target="_blank"
          >
            <Image
              src={"/static/images/ig_logo.png"}
              alt="instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link
            as={NextLink}
            href="https://www.facebook.com/uniskai/"
            mr={{ base: 0, md: 10 }}
            target="_blank"
          >
            <Image
              src={"/static/images/fb_logo.png"}
              alt="instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link
            as={NextLink}
            href="https://www.tiktok.com/@uniskai.id"
            mr={{ base: 0, md: 10 }}
            target="_blank"
          >
            <Image
              src={"/static/images/tiktok_logo.png"}
              alt="tiktok"
              width={40}
              height={40}
            />
          </Link>
        </Flex>
      </Flex>
      
      <Flex
        flexDir={"column"}
        w={{ base: "100%", lg: "15%" }}
        h={"100%"}
        // justifyContent={"space-between"}
        // bgColor={"orange"}
      >
        <Text fontWeight={600} color={"white"} letterSpacing={3} mb={5}>
          POLICY
        </Text>
        <Link
          as={NextLink}
          href="/terms/termsofservice"
          mr={{ base: 0, md: 10 }}
          mb={2}
        >
            Terms of Service
        </Link>
        <Link
          as={NextLink}
          href="/terms/returnandrefundpolicy"
          mr={{ base: 0, md: 10 }}
        >
            Refund Policy
        </Link>
        
      </Flex>
      
    </Flex>
  );
};

export default Footer;

