import Services from "@/components/sections/Services";
import Welcome from "@/components/sections/Welcome";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w={"100%"} h={"100%"} backgroundColor="white">
      <Welcome />
      <Services />
    </Box>
  );
};

export default Home;
