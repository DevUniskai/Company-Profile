import Navbar from "@/components/common/Navbar";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import Tour from "@/components/sections/Tour";
import Welcome from "@/components/sections/Welcome";
import { Box, Divider } from "@chakra-ui/react";

const Home = () => {
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
      <Services />
      <Tour />
      <Experience />
      <Footer />
    </Box>
  );
};

export default Home;
