// import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import Image from "next/image";
// import NextLink from "next/link";
// import { Link } from "@chakra-ui/react";

// const Welcome = () => {
//   return (
//     <Box bgColor={"Beige"}>
//       <Flex
//         position="relative"
//         height="100vh"
//         backgroundImage="/static/images/bg-new.jpg"
//         backgroundPosition="center"
//         backgroundSize="cover" //cover
//         justifyContent="center"
//         alignItems="center"
//         color="beige"
//         _before={{
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           bg: "rgba(0, 0, 0, 0.4)",
//           zIndex: 0,
//         }}
//       >
//         <Image
//           src="/static/images/logo-new.png"
//           alt="logo_uniskai_header"
//           width={156}
//           height={52}
//           style={{
//             position: "relative",
//             zIndex: 1,
//           }}
//         />
//       </Flex>

//       {/* SQTF HEADER */}

//       {/* <Box display="flex" justifyContent="center" height={"50hv"} mt={0.8}>
//         <Link
//           as={NextLink}
//           href={"/contact"}
//           _hover={{ textDecoration: "none" }}
//         >
//           <Image
//             src="/static/images/sqtf_gif.gif"
//             alt="example gif"
//             width="2000"
//             height="500"
//           />
//         </Link>
//       </Box> */}
//     </Box>
//   );
// };

// export default Welcome;

// UNISAIL

import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Container,
  Button,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import JourneyButton from "@/components/common/journeyButton";

const Welcome = () => {
  const titleBase = useBreakpointValue({
    base: "28px",
    md: "38px",
    xl: "42px",
  });
  const [isUltraWide] = useMediaQuery("(min-width: 1900px)");
  const titleSize = isUltraWide ? "65px" : titleBase;
  const btnSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box bgColor="Beige">
      <Flex
        position="relative"
        minH="100vh"
        backgroundImage="/static/images/home/background.png"
        backgroundPosition="center"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
        color="beige"
        overflow="hidden"
        // _before={{
        //   content: '""',
        //   position: "absolute",
        //   inset: 0,
        //   bg: "rgba(0, 0, 0, 0.45)",
        //   zIndex: 0,
        // }}
      >
        {/* Header: Logo kiri atas */}
        {/* <Box
          position="absolute"
          top={{ base: 4, md: 8 }}
          left={{ base: 6, md: 12 }}
          zIndex={3}
        >
          <Image
            src="/static/images/unisail/unisail-logo.png"
            alt="logo_uniskai_header"
            width={156}
            height={52}
            priority
          />
        </Box> */}

        {/* Gurun (asset 2) */}
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          w="100%"
          zIndex={2}
          pointerEvents="none"
        >
          <Image
            src="/static/images/home/gurun.png"
            alt="desert"
            width={2400}
            height={600}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            priority
          />
        </Box>

        {/* Content */}
        <Container
          zIndex={3}
          maxW={{ base: "92vw", md: "92vw", lg: "1200px", xl: "1300px" }}
          px={{ base: 4, md: 6 }}
          mx="auto"
          mb="35px"
        >
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            pt={{ base: 10, md: 0 }}
            fontFamily="'Sigvar', sans-serif"
          >
            <Flex
              w="full"
              align="center"
              direction={{ base: "column", md: "row" }}
              justify="center"
              transform="none"
              pl={0}
              gap={{ base: 10, md: 14, lg: 16, xl: 20 }}
            >
              <EventCTA
                title="BCA - SQTF"
                href="/bcasqtf"
                titleSize={titleSize}
                btnSize={btnSize}
              />

              {/* Garis pemisah (asset 5) */}
              <Box
                display={{ base: "none", md: "block" }}
                w="3px"
                h={{ md: "70px", lg: "120px" }}
                bg="whiteAlpha.900"
              />
              <Box
                display={{ base: "block", md: "none" }}
                w="160px"
                h="3px"
                bg="whiteAlpha.900"
              />

              <EventCTA
                title="ETIHAD x MANDIRI"
                href="/etihadxmandiri"
                titleSize={titleSize}
                btnSize={btnSize}
              />
            </Flex>
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};

function EventCTA({ title, href, titleSize, btnSize }) {
  return (
    <Box textAlign={{ base: "center", md: "left" }}>
      <Text
        fontSize={titleSize || "44px"}
        letterSpacing="0.04em"
        color="whiteAlpha.900"
        fontWeight="500"
      >
        {title}
      </Text>

      <JourneyButton
        href={href}
        size={btnSize || "lg"}
        mt={{ base: 4, md: 5 }}
      />
    </Box>
  );
}

export default Welcome;
