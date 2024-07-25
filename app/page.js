"use client"
import Navbar from "@/components/common/Navbar";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import Tour from "@/components/sections/Tour";
import Welcome from "@/components/sections/Welcome";
import { Box, Divider } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';

const Home = () => {
  const toast = useToast()
  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get('status');
    if(status == "VERIFIED") toast({
      title: 'Payment Success',
      description: `Payment ${searchParams.get('authentication_id')} success`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }, [])
  // const [show, setShow] = useState(true);

  // const handleScroll = () => {
  //   const scroll = window.scrollY;

  //   const shouldBeVisible = scroll >= 20;

  //   if (shouldBeVisible == true) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Box w={"100%"} h={"100%"} backgroundColor="white">
      {/* {!show && <Navbar />} */}
      <Welcome />
      <Tour />
      <Services />
      {/* <Experience /> */}
      <Footer />
    </Box>
  );
};

export default Home;

// "use client"
// import { Suspense } from 'react';
// import Navbar from "@/components/common/Navbar";
// import Experience from "@/components/sections/Experience";
// import Footer from "@/components/sections/Footer";
// import Services from "@/components/sections/Services";
// import Tour from "@/components/sections/Tour";
// import Welcome from "@/components/sections/Welcome";
// import { Box, Divider } from "@chakra-ui/react";
// import { useToast } from '@chakra-ui/react'
// import { useEffect } from "react";
// import { useSearchParams } from 'next/navigation';

// const HomeContent = () => {
//   const toast = useToast();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const status = searchParams.get('status');
//     if(status === "VERIFIED") {
//       toast({
//         title: 'Payment Success',
//         description: `Payment ${searchParams.get('authentication_id')} success`,
//         status: 'success',
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//   }, [searchParams, toast]);

//   return (
//     <Box w={"100%"} h={"100%"} backgroundColor="white">
//       {/* {!show && <Navbar />} */}
//       <Welcome />
//       <Tour />
//       <Services />
//       {/* <Experience /> */}
//       <Footer />
//     </Box>
//   );
// };

// const Home = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <HomeContent />
//     </Suspense>
//   );
// };

// export default Home;
