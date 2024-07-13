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
import data from "@/components/sections/Tour/tour_list.json";

const TourItem = ({id, src, title, description, href, size = "" }) => {
  // const newTitle =  title.split(" ").join("").toLowerCase();
  // const newId = data.id;
  // console.log(id);
  return (

    <GridItem w="100%" className={styles.card} mb={{ base: 10, md: 0 }}>
      <Link
        as={NextLink}
        href={`/detailtour/${id}`}
        mr={4}
        // target="_blank"
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
              position={size == "fill" ? "relative" : "inherit"}
              borderRadius={size == "fill" && 14}
              overflow={size === "fill" && "hidden"}
            >
              {size.length > 0 ? (
                <Image src={src} alt={title} fill objectFit="cover" />
              ) : (
                <Image src={src} alt={title} width={376} height={240} />
              )}
            </Box>
          </CardHeader>
          <CardBody p={0}>
            <Flex
              flexDir="column"
              mt={4}
              width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
            >
              <Heading size={{ base: "md", xl: "lg" }} fontWeight="600">
                {/* {id} */}
                {title}
              </Heading>
              {description.length > 0 && <Text>{description}</Text>}
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