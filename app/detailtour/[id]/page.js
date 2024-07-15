"use client";
import {
  Divider,
  Grid,
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "@/components/sections/Tour/tour_list.json";
import Footer from "@/components/sections/Footer";
import styles from "./style.module.css";

const DetailTourById = (size) => {
  const useRoute = useParams();
  const id = useRoute.id;
  const [tour, setTour] = useState(null);

  useEffect(() => {
    if (id) {
      const tourId = parseInt(id, 10);
      const filteredTour = data.tours.find((tour) => tour.id === tourId);
      setTour(filteredTour);
    }
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"Beige"}>
      {/* Header Section */}
      <Flex
        height={{ base: "30vh", md: "50vh" }}
        backgroundImage={"/static/images/main.jpg"}
        backgroundPosition={"center"}
        backgroundSize="cover"
        flexDirection="column"
        justifyContent="center"
        alignItems="left"
        color="Beige"
        pl={{ base: 5, md: 20 }}
        pt={{ base: 20, md: 40 }}
      >
        <Flex flexDir="column" mb={{ base: 10, lg: 0 }} pt="10" m={5}>
          <Text fontSize={{ base: "sm", md: "lg" }} lineHeight={1.3} color={"Beige"}>
            {tour.description}
          </Text>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={600}
            color={"Beige"}
            mt={1}
            mb={{ base: 5, md: -55 }}
          >
            {tour.title}
          </Heading>
        </Flex>
      </Flex>

      {/* Images Section */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        m={5}
        ml={{ base: 5, md: 20 }}
        mr={{ base: 5, md: 20 }}
        gap={3}
        p={2}
      >
        {tour.destination_img.map((destination_img, index) => {
          return (
            <Box
              key={index}
              width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
              height={{ base: "200px", md: "240px", lg: "300px", xl: "360px" }}
              position={size == "fill" ? "relative" : "inherit"}
              borderRadius={size == "fill" && 14}
              overflow={size === "fill" && "hidden"}
              alignItems={"center"}
            >
              {size?.length > 0 ? (
                <Image
                  src={destination_img}
                  alt={`destination ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <Image
                  src={destination_img}
                  alt={`destination ${index + 1}`}
                  width={376}
                  height={240}
                />
              )}
            </Box>
          );
        })}
      </Grid>

      {/* Itinerary Section */}
      <Box p={8}>
        <Text
          fontWeight={600}
          fontSize={{ base: "sm", md: "md" }}
          letterSpacing={5}
          color="green.700"
          mb={4}
          ml={{ base: 5, md: 20 }}
          mr={{ base: 5, md: 20 }}
        >
          ITINERARY PERJALANAN
        </Text>

        <VStack
          align="start"
          spacing={4}
          pl={{ base: 5, md: 20 }}
          pr={{ base: 5, md: 20 }}
        >
          {tour?.days.map(({ dayTitle, activities }, index) => {
            return (
              <Box key={index} mb={4} width={"100%"}>
                <Heading as="h3" size="sm" color="brown" mb={5}>
                  {dayTitle}
                </Heading>

                <Box w="100%">
                  <Divider
                    borderColor="brown"
                    borderWidth="1px"
                    mb={6}
                    alignItems={"center"}
                  />
                </Box>

                {activities.map((activity, index) => {
                  const [title, description] = activity.split(": ", 2);
                  return (
                    <Box key={index} mr={{ base: 5, md: 20 }} pr={{ base: 5, md: 30 }} maxWidth="1200px">
                      <Text fontWeight={600} color="brown" mt={8}>
                        {" "}
                        {title.trim()}
                      </Text>
                      <Text mb={5}>{description.trim()}</Text>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </VStack>
      </Box>

      {/* Tour Details Section */}
      <Box p={6}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={2}
          textAlign="left"
          mr={{ base: 5, md: 20 }}
          ml={{ base: 5, md: 20 }}
          mb={6}
        >
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              TOUR
            </Heading>
            {tour.tourPrice.map((priceDetail, index) => {
              return <Text key={index}>{priceDetail.pax}</Text>;
            })}
          </Box>
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              PRICE
            </Heading>
            {tour.tourPrice.map((priceDetail, index) => {
              return <Text key={index}>USD {priceDetail.price} / PAXS</Text>;
            })}
          </Box>
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              TRANSPORTATION
            </Heading>
            {tour.tourPrice.map((priceDetail, index) => {
              return <Text key={index}>{priceDetail.vehicle}</Text>;
            })}
          </Box>
        </Grid>

        <Box ml={{ base: 5, md: 20 }} mr={{ base: 5, md: 20 }} mb={6}>
          <Divider borderColor="brown" borderWidth="1px" mb={6} />

          <Heading fontWeight={700} fontSize="sm" color="brown" mb={4}>
            HOTEL
          </Heading>
          {tour.hotel.map((hotelDetail, index) => {
            return (
              <Box key={index}>
                <Text mb={2} color="black">
                  {hotelDetail}
                </Text>
              </Box>
            );
          })}

          <Divider borderColor="brown" borderWidth="1px" mb={6} mt={6} />
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={2}
          textAlign="left"
          mb={6}
          ml={{ base: 5, md: 20 }}
          mr={{ base: 5, md: 20 }}
        >
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              INCLUDE
            </Heading>
            {tour.includes.map((includeDetail, index) => {
              return (
                <UnorderedList key={index} justifyContent="center" pl={6}>
                  <ListItem key={index}>{includeDetail}</ListItem>
                </UnorderedList>
              );
            })}
          </Box>
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              EXCLUDE
            </Heading>
            {tour.excludes.map((excludeDetail, index) => {
              return (
                <UnorderedList key={index} justifyContent="center" pl={6}>
                  <ListItem key={index}>{excludeDetail}</ListItem>
                </UnorderedList>
              );
            })}
          </Box>
        </Grid>

        <Box ml={{ base: 5, md: 20 }} mr={{ base: 5, md: 20 }}>
          <Text fontWeight={700} mb={2} color="red.500">
            N.B
          </Text>
          <Text color="black">
            No booking has been made within this offer. Availability and ticket prices are subject to change depending on applicable stock.
          </Text>
        </Box>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default DetailTourById;
