// import { Image } from "@chakra-ui/next-js";
import {
  Card,
  CardBody,
  CardHeader,
  Box,
  GridItem,
  Heading,
  Text,
  Stack,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import Image from "next/image";

const TourItem = ({ src, title, description }) => {
  return (
    <GridItem w="100%">
      <Card _hover={{ transform: "scale(1.05)" }} boxShadow={"xl"}>
        <Box h="250px" position={"relative"}>
          <Image
            src={src}
            alt={title}
            fill
            objectFit="cover"
            style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
          />
        </Box>
        <CardBody>
          <Text fontWeight="600">{title}</Text>
          <Text color="secondary">{description}</Text>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default TourItem;
