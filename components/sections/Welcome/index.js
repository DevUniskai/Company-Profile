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

import { Box, Flex, Grid, Stack, Text, Link, Container } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useBreakpointValue } from "@chakra-ui/react";


const CONTENT_MAXW = "1200px"; // satu sumber kebenaran

const Welcome = () => {
  const logoMaxW = useBreakpointValue({
  base: "100%",
  md: "640px",
  xl: "640px", // laptop tetap
  "2xl": "680px", // layar ekstra gede naik
}) || "640px";
  return (
    <Box bgColor={"Beige"}>
      <Flex
        position="relative"
        height="100vh"
        backgroundImage="/static/images/unisail/unisail-bg.jpg"
        backgroundPosition="center"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
        color="beige"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "rgba(0, 0, 0, 0.45)",
          zIndex: 0,
        }}
      >
        {/* Logo Uniskai (atas tengah) */}
        <Box position="absolute" mt={5} top={{ base: 4, md: 8 }} left="50%" transform="translateX(-50%)" zIndex={1}>
          <Image src="/static/images/unisail/unisail-logo.png" alt="logo_uniskai_header" width={156} height={52} priority />
        </Box>

        {/* Satu container untuk semua konten supaya tepi kiri/kanan sejajar */}
        <Container
          zIndex={1}
          maxW={{ base: "92vw", md: "92vw", lg: "1300px", xl: "1400px" }}
          px={{ base: 4, md: 6 }}     // gutter konsisten
        >
          <Stack spacing={{ base: 3, md: 5 }} align="stretch">
            {/* GRID UTAMA */}
            <Grid
              templateColumns={{ base: "1fr", md: "1.1fr 0.9fr" }}
              gap={{ base: 1, md: 2, lg: 3, xl: 3, "2xl": 10 }}
              justifyContent="center"
              alignItems="center"
              w="full"
            >
              {/* Kiri: Logo Unisail */}
              <Box>
                <Box 
                  position="relative" 
                  w="auto" 
                  maxW="clamp(640px, 46vw, 820px)"
                  h={{ base: "200px", md: "320px", xl: "clamp(320px, 28vw, 380px)" }}
                >
                  <Image
                    src="/static/images/unisail/unisail-unisail.png"
                    alt="Unisail"
                    fill
                    style={{ objectFit: "contain" }}
                    // Responsive hint untuk Next.js
                    sizes="
                      (max-width: 768px) 90vw,
                      (max-width: 1200px) 45vw,
                      42vw
                    "
                  />
                </Box>
              </Box>

              {/* Kanan: Keterangan Event */}
              <Box w="100%">
                {/* “Rail” kanan: tumbuh halus di layar besar tapi tetap aman di laptop */}
                <Box
                  position="relative"
                  w="auto"
                  maxW={{ base: "100%", md: "clamp(550px, 38vw, 760px)" }}
                  ml={{ base: 0, md: "auto" }}
                  h={{ base: "260px", md: "340px", xl: "clamp(340px, 26vw, 380px)" }}
                >
                  <Image
                    src="/static/images/unisail/unisail-keterangan1.png"
                    alt="Unisail Event Info"
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="
                      (max-width: 768px) 90vw,
                      (max-width: 992px) 550px,
                      (max-width: 1280px) 34vw,
                      680px
                    "
                  />
                </Box>
              </Box>
            </Grid>


            {/* BAR KONTAK: ikut alur layout, tepi sejajar karena share Container */}
            <Flex
              w="full"
              justify="space-between"
              align="center"
              fontSize={{ base: "xs", md: "sm" }}
              opacity={0.95}
              fontFamily="'Sigvar', sans-serif"
            >
              <Box lineHeight="shorter">
                <Link as={NextLink} href="https://uniskai.id" _hover={{ textDecoration: "none", opacity: 0.8 }} target="_blank">
                  <Text>www.uniskai.id</Text>
                </Link>
                <Link as={NextLink} href="https://maps.app.goo.gl/BvJxGEXAVZ8uzvpi6" _hover={{ textDecoration: "none", opacity: 0.8 }} target="_blank">
                  <Text>CBD Polonia Blok AA-3 Medan</Text>
                </Link>
              </Box>
              <Link as={NextLink} href="https://instagram.com/uniskai" _hover={{ textDecoration: "none", opacity: 0.8 }} target="_blank">
                instagram @uniskai
              </Link>
            </Flex>
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};

export default Welcome;

