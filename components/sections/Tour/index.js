import TourItem from "@/components/common/TourItem";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

const Tour = () => {
  return (
    <Flex
      flexDirection="column"
      px={{ base: 10, sm: 16 }}
      paddingBottom={10}
      paddingTop={5}
      bgColor="Beige"
      color="brown"
    >
      <Text fontSize={"4xl"} mb={6} letterSpacing={"5px"}>
        TOUR
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: 3, lg: 6, xl: 9 }}
      >
        <TourItem
          src={"/static/images/Berastagi_1.png"}
          title="BERASTAGI TRIP"
          description="3 Days 2 Night"
          href="https://www.tiktok.com/@uniskai.id"
        />
        <TourItem
          src={"/static/images/Berastagi_2.png"}
          title="MEDAN - SAMOSIR TRIP"
          description="3 Days 2 Night"
          href="https://www.tiktok.com/@uniskai.id"
        />
        <TourItem
          src={"/static/images/Berastagi_3.png"}
          title="BERASTAGI - SAMOSIR TRIP"
          description="4 Days 3 Night"
          href="https://www.tiktok.com/@uniskai.id"
        />
      </Grid>
    </Flex>
  );
};

export default Tour;
