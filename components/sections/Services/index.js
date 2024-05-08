import ServiceItem from "@/components/common/ServiceItem";
import { Flex, Text, Grid, Heading } from "@chakra-ui/react";

const Services = () => {
  return (
    <Flex bgColor="white" flexDirection="column" px={10} my={10}>
      <Heading mb={10} textAlign="center">
        Services
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <ServiceItem title="Fly" description="Booking Flight Ticket" />
        <ServiceItem title="Stay" description="Hotel Booking and Services" />
        <ServiceItem
          title="Docs"
          description="Passport, Visa and Travel Document"
        />
        <ServiceItem
          title="Tour"
          description="Tour Planning tailored to your needs giving  the best travel experience"
        />
        <ServiceItem
          title="SGX"
          description="Self Travel with a brand new guided experience"
        />
        <ServiceItem
          title="Play"
          description="Book your attractions, concert, and rent cars"
        />
      </Grid>
    </Flex>
  );
};

export default Services;
