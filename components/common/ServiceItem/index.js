import {
  Box,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const ServiceItem = ({ src, title, description }) => {
  return (
    <GridItem w="100%" display={"flex"} justifyContent={"center"}>
      <Box
        position="relative"
        justifyContent={"center"}
        display="flex"
        alignItems="center"
      >
        <Box position="relative" width={"450px"} height={"450px"}>
          <Image
            src={src}
            alt={title}
            objectFit="cover"
            fill
            style={{ borderRadius: "8px" }}
          />
        </Box>
        <Box
          position={"absolute"}
          color={"white"}
          bottom={0}
          p={4}
          bgColor={"rgba(0, 0, 0, .5 )"}
          w={"100%"}
          borderBottomRadius={8}
        >
          <Heading size={{ base: "sm", md: "md" }}>{title}</Heading>
          <Text size={{ base: "sm", md: "md" }}>{description}</Text>
        </Box>
      </Box>

      {/* <Card variant={"filled"} bgColor="rgba(0,0,0,.2)">
        <Box h="200px" position={"relative"}>
          <Image src={src} alt={title} fill objectFit="cover" />
        </Box>
        <CardHeader pb={0}>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
      </Card> */}
    </GridItem>
  );
};

export default ServiceItem;
