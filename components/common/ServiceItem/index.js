import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const ServiceItem = ({ title, description }) => {
  return (
    <GridItem>
      <Card height={160}>
        <CardHeader pb={0}>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default ServiceItem;
