import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box backgroundColor="white" zIndex={2} position="fixed" w={"100%"} p={4}>
      <Box>
        <Image
          src={"/static/images/uniskai.png"}
          width={192}
          height={68}
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
