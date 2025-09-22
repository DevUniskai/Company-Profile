"use client";
import { Flex, Grid } from "@chakra-ui/react";
import SalesContactItem from "@/components/common/SalesContactItem";
import allData from "./contact_list.json";

const SalesContactList = ({ results = null }) => {
  const isSingle = results && results.length === 1;
  const dataToShow = results || allData.contact;

  if (dataToShow.length === 0) return null;

  if (isSingle) {
    return (
      <Flex justify="center">
        <SalesContactItem
          title={dataToShow[0].title}
          description={dataToShow[0].description}
          items={dataToShow[0].items}
          variant="single"
        />
      </Flex>
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={{ base: 3, lg: 6, xl: 9 }}
      justifyContent="center"
    >
      {dataToShow.map((item, key) => (
        <SalesContactItem
          key={key}
          title={item.title}
          // description={item.description}
          items={item.items}
          variant="all"
        />
      ))}
    </Grid>
  );
};

export default SalesContactList;

// ,
// {
//   "title": "B2B & Corporate",
//   "slug": "b2b-&-corporate",
//   "description": "Supporting business and corporate clients with tailored travel services",
//   "items": [
//     {
//       "name": "Denny",
//       "phone": "628818128661"
//     }
//   ]
// }