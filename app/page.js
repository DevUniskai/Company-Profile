import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import Tour from "@/components/sections/Tour";
import Welcome from "@/components/sections/Welcome";
import { Box, Divider } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w={"100%"} h={"100%"} backgroundColor="white">
      <Welcome />
      <Services />
      <Tour />
      <Box px={10}>
        <Divider />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
