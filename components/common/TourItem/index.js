import {
  Card,
  CardBody,
  Box,
  GridItem,
  Text,
  Flex,
  Heading,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from "./style.module.css";

const TourItem = ({ src, title, description, href }) => {
  return (
    <GridItem w="100%" className={styles.card} mb={{ base: 10, md: 0 }}>
      <Link
        as={NextLink}
        href={href}
        mr={4}
        target="_blank"
        _hover={{ textDecoration: "none" }}
      >
        <Card
          variant="unstyles"
          backgroundColor={"transparent"}
          color={"brown"}
          width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
          height={{ base: "100%", md: "300px", lg: "350px", xl: "450px" }}
          alignItems={"center"}
        >
          <CardHeader p={0}>
            <Box
              width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
              height={{ base: "100%", md: "120px", lg: "180px", xl: "240px" }}
            >
              <Image src={src} alt={title} width={376} height={240} />
            </Box>
          </CardHeader>
          <CardBody p={0}>
            <Flex
              flexDir="column"
              mt={4}
              width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
            >
              <Heading size={{ base: "md", xl: "lg" }} fontWeight="600">
                {title}
              </Heading>
              <Text>{description}</Text>
            </Flex>
          </CardBody>
          <CardFooter justifyContent={"center"} p={0}>
            <Image
              src={"/static/images/Enter.png"}
              alt={title}
              width={50}
              height={50}
              className={styles.arrow}
            />
          </CardFooter>
        </Card>
      </Link>
    </GridItem>
  );
};

export default TourItem;
