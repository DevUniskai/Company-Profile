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
    <GridItem w="100%" className={styles.card}>
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
          height={450}
        >
          <CardHeader p={0}>
            <Image src={src} alt={title} width={376} height={240} />
          </CardHeader>
          <CardBody p={0}>
            <Flex flexDir="column" mt={4} width={376}>
              <Heading size={"lg"} fontWeight="600">
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
