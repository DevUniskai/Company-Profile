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
      <Card>
        <Box h="200px" position={"relative"}>
          <Image src={src} alt={title} fill objectFit="cover" />
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
