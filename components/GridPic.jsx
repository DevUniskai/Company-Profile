import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";

const GridPic = ({image1, image2, image3}) => {
  return (
    <Grid
      templateColumns="2fr 1fr"
      templateRows="1fr 1fr"
      gap={5}
      h={{ base: "160px", md: "320px" }}
      mb={4}
    >
      {/* Kiri besar */}
      <GridItem
        rowSpan={2}
        position="relative"
        borderRadius="sm"
        overflow="hidden"
      >
        <Image
          src={image1}
          alt="Ship"
          fill
          style={{ objectFit: "cover" }}
        />
      </GridItem>

      {/* Kanan atas */}
      <GridItem position="relative" borderRadius="sm" overflow="hidden">
        <Image
          src={image2}
          alt="Deck"
          fill
          style={{ objectFit: "cover" }}
        />
      </GridItem>

      {/* Kanan bawah */}
      <GridItem position="relative" borderRadius="sm" overflow="hidden">
        <Image
          src={image3}
          alt="Room"
          fill
          style={{ objectFit: "cover" }}
        />
      </GridItem>
    </Grid>
  );
};

export default GridPic;
