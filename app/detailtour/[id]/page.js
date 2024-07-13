"use client";
import { Box, Flex, Text, Heading} from "@chakra-ui/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import data from "@/components/sections/Tour/tour_list.json";
import Footer from "@/components/sections/Footer";

const DetailTourById = () => {
    const router = useRouter();
    const useRoute = useParams();
    const id = useRoute.id;
    const [tour, setTour] = useState(null);
    

    // console.log(id);
    useEffect(() => {
        if (id) {
          // Convert id to number if it is a string
          const tourId = parseInt(id, 10);
          // Filter the tour based on the id
          const filteredTour = data.tours.find(tour => tour.id === tourId);
          setTour(filteredTour);
        }
      }, [id]);

    if (!tour) {
    return <div>Loading...</div>;
  }
    
//   const splitExperience = tour.experience.split(":");
//   const experienceTitle = splitExperience[0];

  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"Beige"}>
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
        <Flex direction="column" align="left" paddingBottom="100"
            flexDir={"column"}
            bottom={0}
            py={4}
        >
            <Text position="absolute" bottom="15px" left="20px" color={"Beige"} mb={5} fontSize={{ base: "sm", md: "sm" }} fontWeight={500}>
                {tour.description} 
            </Text>
            <Heading size={{ base: "lg", md: "lg" }} position="absolute" bottom="20px" left="20px" color="Beige" mb={5}>
                {tour.title}
            </Heading>
        </Flex>
    </Flex>
    

    <Flex mt={8} justify="center" wrap="wrap" gap={2}
        width={{ base: "100%", md: "282px", xl: "376px" }}
        height={{ base: "100%", md: "180px", xl: "240px" }}
        justifyContent={"center"} color="Be"
    >
        {tour.destination_img.map((destination_img, index) => (
            <Image 
                key={index} 
                src={destination_img} 
                alt={"destination"} 
                boxsize="200px" width="200" height="200" />
        ))}
    </Flex>
    
    {/* <Flex background="Beige">
        {tour.activities.map((activity, index) => (
        const [title, description] = activity.split(':');
            return(
                <Box key={index} mb={4}>
                    <Heading as="h3" size="md" color="teal.500">
                        {title.trim()}
                    </Heading>
                    <Text mt={2}>
                        {description.trim()}
                    </Text>
                </Box>
            );
        ))}
    </Flex> */}
    <Footer />
    </Box>
    );
}

export default DetailTourById;

{/* <h1>{tour.description}</h1>
      <img src={tour.src} alt={tour.title} />
      <p>{tour.description}</p>
      {tour.href.startsWith('http') ? (
        <a href={tour.href} target="_blank" rel="noopener noreferrer">View More Details</a>
      ) : (
        <p>Internal Page: {tour.href}</p>
      )} */}