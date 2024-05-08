import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box backgroundColor="white" zIndex={2} position="fixed" w={"100%"}>
      <Box>
        <Image
          src={"/static/images/uniskai.png"}
          width={259}
          height={93}
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
