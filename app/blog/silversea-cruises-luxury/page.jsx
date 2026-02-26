import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Link,
  Divider,
  Stack,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Header from "@/components/common/Header";
import GridPic from "@/components/GridPic";
import NextLink from "next/link";

const SilverSea = () => {
  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"Beige"} color={"black"}>
      <Header />
      <Flex
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
        maxW="900px"
        mx="auto"
        lineHeight="1.5"
        bgColor={"Beige"}
        color={"black"}
      >
        <Heading as="h1" fontSize="40" mt={4} mb={2} textColor={"black"}>
          Silversea Cruises: Luxury Without the Noise
        </Heading>
        <Flex
          backgroundPosition={"center"}
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
          mb={4}
        >
          <Image
            src="/static/images/silversea/silversea-1.png"
            alt="silversea-cruises"
            width={900}
            height={200}
          />
        </Flex>
        <Text textColor="black">
          Luxury, at its highest expression, is never loud.
        </Text>
        <Text textColor="black" my={2}>
          {"It reveals itself in space."}
          <br />
          {"In discretion."}
          <br />
          {"In the quiet precision with which everything unfolds."}
        </Text>
        <Text textColor="black">Silversea was conceived around this idea.</Text>
        <Text textColor="black" my={2}>
          {"Every guest resides in a suite."}
          <br />
          {"Every suite is attended by a dedicated butler."}
          <br />
          {
            "Nearly every detail is anticipated so attention can return to what truly matters, the destination, and the experience of reaching it."
          }
        </Text>
        <Text textColor="black">
          {"This is travel without excess."}
          <br />
          {"Without spectacle."}
          <br />
          {"Without noise."}
        </Text>
        <Divider borderColor="grey" mt={6} />
        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Silver Spirit
        </Heading>
        <GridPic
          image1={"/static/images/silversea/silversea-14.png"}
          image2={"/static/images/silversea/silversea-13.png"}
          image3={"/static/images/silversea/silversea-12.png"}
        />
        <Text textColor="black">
          Routes: Mediterranean, Northern Europe, Transatlantic
        </Text>
        <Text textColor="black" my={2}>
          Sailing the storied coastlines of Italy, Greece, Spain, France, and
          the Baltic capitals, Silver Spirit embodies the romance of Europe at
          sea.
        </Text>
        <Text textColor="black" mb={2}>
          With generous proportions and a timeless aesthetic, the ship feels
          established confident in its refinement. Multiple dining venues,
          expansive deck space, and a graceful onboard rhythm make it
          particularly suited to longer European voyages where cultural
          immersion and unhurried days define the experience.
        </Text>
        <Text textColor="black">
          It is a ship for travelers who value depth over pace.
        </Text>

        <Divider borderColor="grey" mt={6} />
        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Silver Moon
        </Heading>
        <GridPic
          image1={"/static/images/silversea/silversea-15.png"}
          image2={"/static/images/silversea/silversea-11.png"}
          image3={"/static/images/silversea/silversea-10.png"}
        />
        <Text textColor="black" mb={2}>
          Routes: Mediterranean, Caribbean, Northern Europe
        </Text>
        <Text textColor="black" mb={2}>
          Silver Moon is shaped by a sense of place.
        </Text>
        <Text textColor="black" mb={2}>
          Through Silversea’s S.A.L.T. (Sea And Land Taste) program, each
          destination influences what appears on the table. Ingredients,
          techniques, and traditions from ashore are translated into immersive
          culinary experiences onboard.
        </Text>
        <Text textColor="black" my={1}>
          {"Dining becomes narrative."}
          <br />
          {"Cuisine becomes context."}
        </Text>
        <Text textColor="black">
          Intimate and thoughtfully designed, Silver Moon appeals to travelers
          who see gastronomy not as indulgence, but as exploration.
        </Text>

        <Divider borderColor="grey" mt={6} />
        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Silver Dawn
        </Heading>
        <GridPic
          image1={"/static/images/silversea/silversea-9.png"}
          image2={"/static/images/silversea/silversea-8.png"}
          image3={"/static/images/silversea/silversea-7.png"}
        />
        <Text textColor="black" mb={2}>
          Routes: Mediterranean, Caribbean, Northern Europe
        </Text>
        <Text textColor="black" mb={2}>
          On Silver Dawn, wellbeing is woven quietly into the journey.
        </Text>
        <Text textColor="black" mb={2}>
          A serene atmosphere, expansive spa facilities, and the Otium wellness
          concept introduce a slower, more restorative rhythm to life at sea.
          Days unfold deliberately. Evenings feel composed.
        </Text>
        <Text textColor="black">
          This is a ship for those who understand that discovery is enhanced by
          balance, that restoration and exploration are not opposites, but
          companions.
        </Text>

        <Divider borderColor="grey" mt={6} />
        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Silver Muse
        </Heading>
        <GridPic
          image1={"/static/images/silversea/silversea-6.png"}
          image2={"/static/images/silversea/silversea-5.png"}
          image3={"/static/images/silversea/silversea-4.png"}
        />
        <Text textColor="black" mb={2}>
          Routes: Alaska, Asia, Australia, Mediterranean
        </Text>
        <Text textColor="black" mb={2}>
          With one of the broadest geographic ranges in the fleet, Silver Muse
          is defined by versatility.
        </Text>
        <Text textColor="black" mb={2}>
          From the glacial drama of Alaska to the cultural depth of Asia and the
          warmth of the Mediterranean, it adapts effortlessly to varied
          landscapes and climates.
        </Text>
        <Text textColor="black">
          Its contemporary elegance and diverse dining venues create a refined
          yet dynamic onboard atmosphere, ideal for long-haul itineraries where
          comfort is not a luxury, but a necessity.
        </Text>

        <Divider borderColor="grey" mt={6} />
        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Silver Nova
        </Heading>
        <GridPic
          image1={"/static/images/silversea/silversea-16.jpg"}
          image2={"/static/images/silversea/silversea-3.png"}
          image3={"/static/images/silversea/silversea-2.png"}
        />
        <Text textColor="black" mb={2}>
          Routes: Northern Europe, Mediterranean, Caribbean
        </Text>
        <Text textColor="black" mb={2}>
          Silver Nova represents a more architectural vision of ocean travel.
        </Text>
        <Text textColor="black" mb={2}>
          Sweeping lines, asymmetrical design, and expansive open decks dissolve
          the boundary between ship and horizon. Natural light dominates. The
          sea is never far from view.
        </Text>
        <Text textColor="black" mb={2}>
          The result is a ship that feels modern yet understated, progressive
          without abandoning the quiet sensibility that defines Silversea.
        </Text>

        <Text textColor="black" mt={6}>
          Silversea is not defined by scale.
        </Text>
        <Text textColor="black" my={2}>
          {"It is defined by proportion."}
          <br />
          {"By attentiveness."}
          <br />
          {
            "By the rare luxury of moving through the world without feeling hurried."
          }
        </Text>
        <Text textColor="black">Travel, as it was meant to be.</Text>
      </Flex>
    </Box>
  );
};

export default SilverSea;
