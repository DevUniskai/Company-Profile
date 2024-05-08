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
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
const TourItem = ({ src, title, description, href }) => {
  return (
    <GridItem w="100%">
      <Link as={NextLink} href={href} mr={4} target="_blank">
        <Card _hover={{ transform: "scale(1.05)" }} boxShadow={"xl"}>
          <Box h="450px" position={"relative"}>
            <Image
              src={src}
              alt={title}
              fill
              objectFit="cover"
              style={{
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            />
          </Box>
          <CardBody>
            <Text fontWeight="600">{title}</Text>
            <Text color="secondary">{description}</Text>
          </CardBody>
        </Card>
      </Link>
    </GridItem>
  );
};

export default TourItem;
