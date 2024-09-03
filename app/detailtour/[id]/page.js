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
import data from "@/components/sections/Tour/tour_list.json";
import Footer from "@/components/sections/Footer";
import DetailTourClient from "@/components/sections/DetailTourClient";
import DetailBookClient from "@/components/sections/DetailBookClient"

export function generateStaticParams() {
  return data.tours.map((tour) => ({
    id: tour.id.toString(),
  }));
}

export default function DetailTourById({ params }) {
  const { id } = params;
  const tourId = parseInt(id, 10);
  const tour = data.tours.find((tour) => tour.id === tourId);

  if (!tour) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box w="100%" h="auto" backgroundColor="Beige">
      {/* Header Section */}
      <Flex
        height={{ base: "30vh", md: "50vh" }}
        backgroundImage="/static/images/main.jpg"
        backgroundPosition="center"
        backgroundSize="cover"
        flexDirection="column"
        justifyContent="center"
        alignItems="left"
        color="Beige"
        pl={{ base: 5, md: 20 }}
        pt={{ base: 20, md: 40 }}
      >
        <Flex flexDir="column" mb={{ base: 10, lg: 0 }} pt="10" m={5}>
          <Text fontSize={{ base: "sm", md: "lg" }} lineHeight={1.3} color="Beige">
            {tour.description}
          </Text>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={600}
            color="Beige"
            mt={1}
            mb={{ base: 5, md: 55 }}
          >
            {tour.title}
          </Heading>
        </Flex>
      </Flex>

      {/* Images Section */}
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
        mt={5}
        ml={{ base: 5, md: 20 }}
        mr={{ base: 5, md: 20 }}
        gap={3}
        p={5}
        height="fit-content"
      >
        {tour.destination_img.map((destination_img, index) => (
          <Box
            key={index}
            width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
            position="inherit"
            borderRadius="14"
            overflow="hidden"
            alignItems="center"
            height="fit-content"
          >
            <Image
              src={destination_img}
              alt={`destination ${index + 1}`}
              width={376}
              height={240}
            />
          </Box>
        ))}
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
          {tour?.days.map(({ dayTitle, activities }, index) => (
            <Box key={index} mb={4} width="100%">
              <Heading as="h3" size="sm" color="brown" mb={5}>
                {dayTitle}
              </Heading>

              <Box w="100%">
                <Divider
                  borderColor="brown"
                  borderWidth="1px"
                  mb={6}
                  alignItems="center"
                />
              </Box>

              {activities.map((activity, index) => {
                const [title, description] = activity.split(": ", 2);
                return (
                  <Box key={index} mr={{ base: 5, md: 20 }} pr={{ base: 5, md: 30 }} maxWidth="1200px">
                    <Text fontWeight={600} color="brown" mt={8}>
                      {title.trim()}
                    </Text>
                    <Text mb={5}>{description.trim()}</Text>
                  </Box>
                );
              })}
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Tour Details Section */}
      <Box p={6}>
        <Grid
          templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
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
            {tour.tourPrice.map((priceDetail, index) => (
              <Text key={index}>{priceDetail.pax}</Text>
            ))}
          </Box>
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              PRICE
            </Heading>
            {tour.tourPrice.map((priceDetail, index) => (
              <Text key={index}>USD {priceDetail.price} / PAXS</Text>
            ))}
          </Box>
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              TRANSPORTATION
            </Heading>
            {tour.tourPrice.map((priceDetail, index) => (
              <Text key={index}>{priceDetail.vehicle}</Text>
            ))}
          </Box>
        </Grid>

        <Box ml={{ base: 5, md: 20 }} mr={{ base: 5, md: 20 }} mb={6}>
          <Divider borderColor="brown" borderWidth="1px" mb={6} />

          <Heading as="h4" size="sm" mb={2} color="brown">
            HOTEL
          </Heading>
          {tour.hotel.map((hotelDetail, index) => (
            <Box key={index}>
              <Text mb={2} color="black">
                {hotelDetail}
              </Text>
            </Box>
          ))}

          <Divider borderColor="brown" borderWidth="1px" mb={6} mt={6} />
        </Box>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
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
            {tour.includes.map((includeDetail, index) => (
              <UnorderedList key={index} justifyContent="center" pl={6}>
                <ListItem>{includeDetail}</ListItem>
              </UnorderedList>
            ))}
          </Box>
          <Box>
            <Heading as="h4" size="sm" mb={2} color="brown">
              EXCLUDE
            </Heading>
            {tour.excludes.map((excludeDetail, index) => (
              <UnorderedList key={index} justifyContent="center" pl={6}>
                <ListItem>{excludeDetail}</ListItem>
              </UnorderedList>
            ))}
          </Box>
        </Grid>

        <Box ml={{ base: 5, md: 20 }} mr={{ base: 5, md: 20 }}>
          <Text fontWeight={700} mb={2} color="red.500">
            N.B
          </Text>
          <Text color="black">
            No booking has been made within this offer. Availability and ticket prices are subject to change depending on applicable stock.
          </Text>
          <Text color="black" fontWeight="bold" mt={3}>
            Price valid until <Text as="span" color="red.500">10 October 2024</Text>. Afterward, prices may change based on availability 
          </Text>
        </Box>

        {/* Client-specific logic moved to client component */}
        <DetailTourClient tour={tour} />
        <DetailBookClient tour={tour}/>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
}
