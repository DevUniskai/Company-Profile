import { Grid } from "@chakra-ui/react";
import data from "./contact_list.json";
import SalesContactItem from "@/components/common/SalesContactItem";

const SalesContactList = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={{ base: 3, lg: 6, xl: 9 }}
    >
      {data.contact.map((data, key) => {
        return (
          <SalesContactItem title={data.title} description={data.description} items={data.items} key={key} />
        );
      })}
    </Grid>
  );
};

export default SalesContactList;
