import ServiceItem from "@/components/common/ServiceItem";
import { Flex, Text, Grid, Heading } from "@chakra-ui/react";

const Services = () => {
  return (
    <Flex bgColor="white" flexDirection="column" px={10} my={10}>
      <Heading mb={10} textAlign="center">
        Services
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <ServiceItem
          src="/static/images/fly.jpg"
          title="Fly"
          description="Booking Flight Ticket"
        />
        <ServiceItem
          src="/static/images/hotel.jpg"
          title="Stay"
          description="Hotel Booking and Services"
        />
        <ServiceItem
          src="/static/images/passport.jpg"
          title="Docs"
          description="Passport, Visa and Travel Document"
        />
        <ServiceItem
          src="/static/images/air-terjun.jpg"
          title="Tour"
          description="Tour Planning tailored to your needs giving  the best travel experience"
        />
        <ServiceItem
          src="/static/images/air-terjun.jpg"
          title="SGX"
          description="Self Travel with a brand new guided experience"
        />
        <ServiceItem
          src="/static/images/air-terjun.jpg"
          title="Play"
          description="Book your attractions, concert, and rent cars"
        />
      </Grid>
    </Flex>
  );
};

export default Services;
