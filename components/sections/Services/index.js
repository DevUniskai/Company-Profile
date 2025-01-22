import ServiceItem from "@/components/common/ServiceItem";
import { Flex, Text, Grid, Heading } from "@chakra-ui/react";

const Services = () => {
  return (
    <Flex
      bgColor="Beige"
      color="brown"
      flexDirection="column"
      px={{ base: 10, sm: 16 }}
      py={10}
    >
      <Text fontSize={"4xl"} mb={6} letterSpacing={"5px"}>
        OUR SERVICES
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 3, lg: 6 }}
      >
        <ServiceItem
          src="/static/images/Fly.png"
          title="FLY"
          // description="Booking Flight Ticket"
          description="Elevate your journey with seamless flight bookings."
        />
        <ServiceItem
          src="/static/images/Stay.png"
          title="STAY"
          // description="Hotel Booking and Services"
          description="Indulge in exquisite stays at premier destinations."
        />
        <ServiceItem
          src="/static/images/passport.jpg"
          title="DOCS"
          // description="Passport, Visa and Travel Document"
          description="Streamline your travel with effortless travel document services."
        />
        <ServiceItem
          src="/static/images/Tour.png"
          title="TOUR"
          // description="Tour Planning tailored to your needs giving the best travel experience"
          description="Curated journeys crafted just for you."
        />
        <ServiceItem
          src="/static/images/SGX.png"
          title="SGX"
          // description="Self Travel with a brand new guided experience"
          description="Travel reimagined, with itineraries tailored to your preferences and our expertise."
        />
        <ServiceItem
          src="/static/images/Play.png"
          title="PLAY"
          // description="Book your attractions, concert, and rent cars"
          description="Unlock extraordinary adventures and exclusive attractions."
        />
        <ServiceItem
          src="/static/images/cruise.png"
          title="CRUISE"
          description="Set sail in ultimate luxury to unforgettable horizons."
        />
        <ServiceItem
          src="/static/images/Docs.png"
          title="B2B & CORPORATE"
          // description="Partner with us or enjoy exclusive perks for corporate customers"
          description="Partner in prestige, benefit from tailored corporate privileges."
        />
      </Grid>
    </Flex>
  );
};

export default Services;
