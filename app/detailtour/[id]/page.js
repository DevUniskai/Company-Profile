"use client";
import { Divider, Grid, Stack, Box, Flex, Text, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import data from "@/components/sections/Tour/tour_list.json";
import Footer from "@/components/sections/Footer";

const DetailTourById = (size) => {
    const router = useRouter();
    const useRoute = useParams();
    const id = useRoute.id;
    const [tour, setTour] = useState(null);

    useEffect(() => {
        if (id) {
            const tourId = parseInt(id, 10);
            const filteredTour = data.tours.find(tour => tour.id === tourId);
            setTour(filteredTour);
        }
    }, [id]);

    if (!tour) {
        return <div>Loading...</div>;
    }

    return (
        <Box w={"100%"} h={"auto"} backgroundColor={"#F5F5DC"}>

            {/* Header Section */}
            <Flex
                height={"50vh"}
                backgroundImage={"/static/images/main.jpg"}
                backgroundPosition={"center"}
                backgroundSize="cover"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="Beige"
            >
                <Flex flexDir="column" mb={{ base: 10, lg: 0 }}>
                    <Text lineHeight={1.3} color={"Beige"} mr="50%">
                        {tour.description}
                    </Text>
                    <Text fontWeight={600} color={"white"} letterSpacing={3} mb={5}>
                        {tour.title}
                    </Text>
                </Flex>
            </Flex>

            {/* Images Section */}
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                }}
                gap={6}
                p={6}
            >
                {tour.destination_img.map((destination_img, index) => (
                    
                    <Box
                        width={{ base: "100%", md: "188px", lg: "282px", xl: "376px" }}
                        height={{ base: "100%", md: "120px", lg: "180px", xl: "240px" }}
                        position={size == "fill" ? "relative" : "inherit"}
                        borderRadius={size == "fill" && 14}
                        overflow={size === "fill" && "hidden"}
                    >
                        {size.length > 0 ? (
                            <Image src={destination_img} alt={`destination ${index + 1}`} fill objectFit="cover" />
                        ) : (
                            <Image src={destination_img} alt={`destination ${index + 1}`} width={376} height={240} />
                        )}
                    </Box>

                    // <Box 
                    //     key={index} 
                    //     borderRadius="fill" 
                    //     display="inline-block"
                    //     boxShadow="md" 
                    // >
                    //     <Image
                    //         src={destination_img}
                    //         alt={`destination ${index + 1}`}
                    //         width={"250"}
                    //         height={"150"}
                    //         objectFit="cover"
                    //     />
                    // </Box>
                ))}
            </Grid>

            {/* Itinerary Section */}
            <Box p={6}>
                <Text 
                    fontWeight={600} 
                    letterSpacing={3}
                    color="green.700"
                    mb={5}
                >
                    ITINERARY PERJALANAN
                </Text>
                {/* {tour.days.map((dayDetail, index) =>
                    <Text
                        fontWeight={700}
                        fontSize="xl"
                        color="brown"
                        mb={4} 
                        key={index}         
                    >
                        {dayDetail.dayTitle}
                    </Text>
                )} */}
                
                
                <Divider borderColor="brown" borderWidth="2px" mb={6} />

                {/* <VStack align="start" spacing={4}>
                    {tour?.activities?.map((activity, index) => {
                        const parts = activity.split(":");
                        if (parts.length < 2) {
                            // Handle case where activity doesn't contain a colon or has invalid format
                            return null;
                        }
                        const [title, description] = parts;
                        return (
                            <Box key={index} mb={4}>
                                <Heading as="h3" size="sm" color="teal.500">
                                    {title}
                                </Heading>
                                <Text mt={2}>{description.trim()}</Text>
                            </Box>
                        );
                    })}
                </VStack> */}
            </Box>

            {/* Tour Details Section */}
            <Box p={6}>
                <Grid templateColumns="repeat(3, 1fr)" gap={2} textAlign="left" mb={6}>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="black">
                                TOUR
                            </Heading>
                            {tour.tourPrice.map((priceDetail, index) =>
                                <Text>{priceDetail.pax}</Text>
                            )}
                        </Box>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="black">
                               PRICE
                            </Heading>
                            {tour.tourPrice.map((priceDetail, index) =>
                            <Text>USD {priceDetail.price} / Paxs</Text>
                            )}
                        </Box>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="black">
                                TRANSPORTATION
                            </Heading>
                            {tour.tourPrice.map((priceDetail, index) =>
                            <Text>{priceDetail.vehicle}</Text>
                            )}
                            </Box>
                </Grid>

                <Divider borderColor="brown" borderWidth="2px" mb={6} />

                <Text fontWeight={700} fontSize="sm" color="black" mb={4}>
                    HOTEL
                </Text>
    
                <Text mb={6} color="black">
                    {tour.hotel}
                </Text>
            
                <Divider borderColor="brown" borderWidth="2px" mb={6} />

                <Grid templateColumns="repeat(2, 1fr)" gap={2} textAlign="left" mb={6}>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="black">
                                INCLUDE
                            </Heading>
                            {tour.includes.map((includeDetail, index) =>
                                <Text key={index}>{includeDetail}</Text>
                            )}
                        </Box>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="black">
                               EXCLUDE
                            </Heading>
                            {tour.excludes.map((excludeDetail, index) =>
                                <Text key={index}>{excludeDetail}</Text>
                            )}
                        </Box>
                </Grid>

                <Text fontWeight={700} mb={2} color="red.500">
                    N.B
                </Text>
                <Text color="black">
                    No booking has been made within this offer. Availability and ticket prices are subject to change depending on applicable stock.
                </Text>
            </Box>

            {/* Footer Section */}
            <Footer />
        </Box>
    );
}

export default DetailTourById;
