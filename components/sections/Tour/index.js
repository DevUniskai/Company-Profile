import TourItem from "@/components/common/TourItem";
import { Flex, Grid, Heading } from "@chakra-ui/react";

const Tour = () => {
  return (
    <Flex bgColor="white" flexDirection="column" px={10} my={10}>
      <Heading mb={10} textAlign="center">
        Tour
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", "2xl": "repeat(4, 1fr)" }}
        gap={6}
      >
        <TourItem
          src={"/./images/gunung.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
        />
        <TourItem
          src={"/./images/danau-toba.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
        />
        <TourItem
          src={"/./images/air-terjun.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
        />
        <TourItem
          src={"/./images/merdeka-walk.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
        />
      </Grid>
    </Flex>
  );
};

export default Tour;
