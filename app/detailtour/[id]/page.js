"use client";
import { Divider, Grid, GridItem, Stack, Box, Flex, Text, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import {
    List,
    ListItem,
    ListIcon,
    UnorderedList,
  } from '@chakra-ui/react'
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import data from "@/components/sections/Tour/tour_list.json";
import Footer from "@/components/sections/Footer";
import styles from "./style.module.css";

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
        <Box w={"100%"} h={"auto"} backgroundColor={"Beige"}>

            {/* Header Section */}
            <Flex
                height={"50vh"}
                backgroundImage={"/static/images/main.jpg"}
                backgroundPosition={"center"}
                backgroundSize="cover"
                flexDirection="column"
                justifyContent="center"
                alignItems="left"
                color="Beige"
                pl={20}
                pt={40}
            >
                <Flex flexDir="column" mb={{ base: 10, lg: 0 }} pt="10" m={5}>
                    <Text fontSize={16} lineHeight={1.3} color={"Beige"}>
                        {tour.description}
                    </Text>
                    <Heading fontSize={32} fontWeight={600} color={"Beige"} mt={1} mb={-55}>
                        {tour.title}
                    </Heading>
                </Flex>
            </Flex>

            {/* Images Section */}
            <Grid
                templateColumns={{
                    // base: "repeat(1, 1fr)",
                    base: "repeat(3, 1fr)",
                }}
                m={5}
                ml={20}
                mr={20}
                gap={3}
                p={2}
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
                    //     width={{ base: "50%", md: "188px", lg: "282px", xl: "376px" }}
                    //     height={{ base: "50%", md: "120px", lg: "180px", xl: "240px" }}
                    // >
                    //     <Image
                    //         src={destination_img}
                    //         alt={`destination ${index + 1}`}
                    //         width={"250"}
                    //         height={"150"}
                    //         boxSize={{ base: "100%", sm: "50%", md: "25%"}}
                    //         objectFit="cover"
                    //     />
                    // </Box>
                ))}
            </Grid>

            {/* Itinerary Section */}
            <Box p={8}> 
                <Text 
                    fontWeight={600}
                    fontSize={14} 
                    letterSpacing={5}
                    color="green.700"
                    mb={4}
                    ml={20}
                    mr={20}
                >
                    ITINERARY PERJALANAN
                </Text>

                <VStack align="start" spacing={4} pl={20} pr={20}>
                    {tour?.days.map(({dayTitle, activities}, index) => (
                            <Box key={index} mb={4}>
                                <Heading key={index} as="h3" size="sm" color="brown" mb={5}>
                                    {dayTitle}
                                </Heading>

                                <Divider borderColor="brown" borderWidth="1px" mb={6} alignItems="center"/>

                                {activities.map((activity, index) => {
                                     const [title, description] = activity.split(': ', 2);
                                    return(
                                        <>
                                            {/* <UnorderedList key={index} justifyContent="center" pl={6}> */}
                                                <Text fontWeight={600} color="brown" mt={5}> {title.trim()}</Text>
                                                <Text>{description.trim()}</Text>
                                            {/* </UnorderedList> */}
                                        </>
                                    );
                                    
                                })}
                            </Box>
                    ))}
                </VStack>
            </Box>

            {/* Tour Details Section */}
            <Box p={6}>
                <Grid templateColumns="repeat(3, 1fr)" gap={2} textAlign="left" mr={20} ml={20} mb={6}>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="brown">
                                TOUR
                            </Heading>
                            {tour.tourPrice.map((priceDetail, index) =>
                                <Text>{priceDetail.pax}</Text>
                            )}
                        </Box>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="brown">
                               PRICE
                            </Heading>
                            {tour.tourPrice.map((priceDetail, index) =>
                                <Text>USD {priceDetail.price} / PAXS</Text>
                            )}
                        </Box>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="brown">
                                TRANSPORTATION
                            </Heading>
                            {tour.tourPrice.map((priceDetail, index) =>
                            <Text>{priceDetail.vehicle}</Text>
                            )}
                            </Box>
                </Grid>
                
                <Box ml={20} mr={20}>
                    <Divider borderColor="brown" borderWidth="1px" mb={6} />

                    <Text fontWeight={700} fontSize="sm" color="brown" mb={4}>
                        HOTEL
                    </Text>
                    <Text mb={6} color="black">
                        {tour.hotel}
                    </Text> 

                    <Divider borderColor="brown" borderWidth="1px" mb={6} />
                </Box>

                <Grid templateColumns="repeat(2, 1fr)" gap={2} textAlign="left" mb={6} ml={20} mr={20}>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="brown">
                                INCLUDE
                            </Heading>
                            {tour.includes.map((includeDetail, index) =>
                                <UnorderedList key={index} justifyContent="center" pl={6}>
                                    <ListItem key={index}>{includeDetail}</ListItem>
                                </UnorderedList>
                                
                            )}
                        </Box>
                        <Box>
                            <Heading as="h4" size="sm" mb={2} color="brown">
                               EXCLUDE
                            </Heading>
                            {tour.excludes.map((excludeDetail, index) =>
                                <UnorderedList key={index} justifyContent="center" pl={6}>
                                    <ListItem key={index}>{excludeDetail}</ListItem>
                                </UnorderedList>
                                
                            )}
                        </Box>
                </Grid>
                
                <Box ml={20} mr={20}>
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
}

export default DetailTourById;
