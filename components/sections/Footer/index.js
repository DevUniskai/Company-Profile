import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import FooterItem from "@/components/common/FooterItem";

const Footer = () => {
  return (
    <Flex
      bgColor="brown"
      color="Beige"
      px={16}
      py={10}
      flexDirection={"row"}
      alignItems="center"
      justifyContent={"space-between"}
      height={320}
    >
      <Image
        src="/static/images/uniskai_footer.png"
        alt="uniskai"
        width={199}
        height={100}
      />
      <Flex
        flexDir={"column"}
        w={"30%"}
        h={"100%"}
        justifyContent={"space-between"}
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
        w={"30%"}
        h={"100%"}
        justifyContent={"space-between"}
      >
        <Flex flexDir="column">
          <Text fontWeight={600} color={"white"} letterSpacing={3} mb={5}>
            CONTACT US
          </Text>
          <Text lineHeight={1.3} color={"Beige"}>
            Phone : +62 821-2992-5066 (Samuel)
          </Text>
          <Text lineHeight={1.3} color={"Beige"}>
            Email : tour@uniskai.id
          </Text>
        </Flex>
        <Flex>
          <Link
            as={NextLink}
            href="https://www.instagram.com/uniskai/"
            mr={10}
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
            mr={10}
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
            mr={10}
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
    </Flex>
  );
};

export default Footer;
