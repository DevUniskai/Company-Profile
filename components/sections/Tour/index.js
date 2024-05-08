import TourItem from "@/components/common/TourItem";
import { Flex, Grid, Heading } from "@chakra-ui/react";

const Tour = () => {
  return (
    <Flex
      bgColor="white"
      flexDirection="column"
      px={{ base: 16, "2xl": 10 }}
      my={10}
    >
      <Heading mb={10} textAlign="center">
        Tour
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", "2xl": "repeat(3, 1fr)" }}
        gap={9}
      >
        <TourItem
          src={"/static/images/gunung.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
          href="https://www.tiktok.com/@uniskai.id"
        />
        <TourItem
          src={"/static/images/danau-toba.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
          href="https://www.tiktok.com/@uniskai.id"
        />
        <TourItem
          src={"/static/images/air-terjun.jpg"}
          title="Berastagi Trip"
          description="3 Days 2 Night"
          href="https://www.tiktok.com/@uniskai.id"
        />
      </Grid>
    </Flex>
  );
};

export default Tour;
