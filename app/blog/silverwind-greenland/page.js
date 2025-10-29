import Header from "@/components/common/Header";
import Footer from "@/components/sections/Footer";
import { Box, Flex, Text, Heading, Link, Divider, Stack, List, ListItem, UnorderedList} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const TermsOfServices = () => {
  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"beige"} color={"black"}>
      <Header/>

      <Flex
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
        maxW="800px"
        mx="auto"
        lineHeight="1.5"
        // bgColor={"Beige"}
        color={"black"}
      >
        <Heading as="h1" fontSize="40" mt={4} mb={1} textColor={"black"}>
          Into the Heart of Greenland:
        </Heading>
        <Heading as="h1" fontSize="40" mb={4} textColor={"black"}>
          A 7-Night Silver Wind Expedition⚓
        </Heading>
        <Heading as="h2" fontSize="2xl" mb={4} textColor={"black"}>
          Sailing 26 July - 2 August 2026 │ Round-trip Nuuk (Godthåb)
        </Heading>
        <Text textColor="black">
          Imagine waking each day to a new Arctic panorama jagged fjords, floating icebergs, and quiet coastal villages while indulging in luxury aboard the elegant Silver Wind.
        </Text>
        <Text mb={4} textColor="black">
          These seven-nights voyage unveil Greenland’s wild west coast in true luxury, where adventure and comfort meet at the edge of the world.
        </Text>
        <Text textColor="black">
          Reaching this remote frontier has never been easier. 
        </Text>
        <Text textColor="black">
          When travelling with Uniskai, guests can begin their journey with a flight package from Copenhagen to Nuuk, connecting directly to the start of the expedition. 
        </Text>
        <Text mb={4} textColor="black">
          Unlike the standard Silversea departure from Montreal, this route allows travelers to explore Greenland without the need for Canada Visa, making it the ideal choice for guests from Asia seeking a seamless Arctic experience.
        </Text>
        <Flex
          backgroundPosition="center"
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
        >
          <video 
            src="/static/images/silverwind-vid1.mp4" 
            width="750" 
            height="200" 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="auto"
            style={{ objectFit: "cover" }}
          />
        </Flex>
        <Text as="span" fontSize={11} textColor={"black"} textAlign={"right"} fontStyle={"italic"} mt={1}>
          Source: Silversea Website
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          The Route: A Journey through Ice and Time🗺️
        </Heading>
        <Text textColor={"black"}>
          Nuuk → Maniitsoq → Kuannit Point → Disko Island → Eqip Sermia Glacier → Ilulissat → Sisimiut → Amerloq Fjord → Evighedsfjord → Nuuk.
        </Text>
        <Text mb={4} textColor={"black"}>
          A voyage that unfolds like a cinematic passage through time, where each day brings a new landscape of ice, light, and silence
        </Text>
        {/* <Text as="span" fontSize={18} textColor={"black"} fontStyle={"italic"} textAlign={"center"}>
          Sailing date: 18 May - 27 May 2026
        </Text> */}
        <Flex
          backgroundPosition={"center"}
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
        >
          {/* <Stack spacing={4} align="center"> */}
            <Image 
              src="/static/images/silverwind-map.png" 
              alt="cruise" 
              width={750}
              height={200}
            />
            {/* <Image 
              src="/static/images/list.jpeg" 
              alt="cruise" 
              width={750}
              height={200}
            /> */}
          {/* </Stack> */}
        </Flex>
        
        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={8} mb={4} textColor={"black"}>
          Day-by-Day Highlights
        </Heading>
        <Text fontSize="20" fontWeight="bold" textColor={"black"} mb={1}>
          Day 1 - Embark in Nuuk (Godthåb)
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Settle into your suite aboard Silver Wind, enjoy a welcome cocktail, and sail into Greenland’s open sea under the midnight sun.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-nuuk.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 2 - Maniitsoq
        </Text>
        <Text as="span" textColor={"black"} mb={1}>
          <Text as={"span"} fontStyle={"Italic"}>Included Activity:</Text> Maniitsoq Exploration & Museum
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Discover the “Venice of Greenland,” a small town surrounded by waterways and colorful homes. 
          Visit the local museum for stories of Greenlandic heritage and Arctic life.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-maniitsoq.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 3 - Kuannit Point & Disko Island (Itilleq)
        </Text>
        <Text as="span" textColor={"black"} mb={1}>
          <Text as={"span"} fontStyle={"Italic"}>Included Activity:</Text> Expedition Activities with Silversea Expedition Team
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Embark on guided Zodiac landings led by Silversea’s Expedition Team. 
          Expect dramatic cliffs, wild seabirds, and striking lava formations shaped by time.
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Explore Disko Island’s volcanic coastline and glacial valleys, a pristine corner of Greenland known for its deep natural contrasts.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-kuannitpoint.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 4 - Eqip Sermia Glacier
        </Text>
        <Text as="span" textColor={"black"} mb={1}>
          <Text as={"span"} fontStyle={"Italic"}>Included Activity:</Text> Expedition Activities with Silversea Expedition Team
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Stand before one of Greenland's most powerful glaciers and witness ice calving into the fjord, 
          a moment of raw beauty that defines the Arctic.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-eqip.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
          {/* <Text as="span" textColor={"black"} fontStyle={"italic"} mt={2}>
            Wow fact: Athens is home to one of the world’s oldest theaters still in use today.
          </Text> */}
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 5 - Ilulissat
        </Text>
        <Text as="span" textColor={"black"} mb={1}>
          <Text as={"span"} fontStyle={"Italic"}>Included Activity:</Text> 
        </Text>
        <UnorderedList spacing={2.5} pl={6} styleType="disc" mb={4}>
          <ListItem>
            <Text>
              <Text as="span" fontWeight="bold">
                Ilulissat Iceberg Cruise - 
              </Text>
              Sail among towering icebergs at the UNESCO-listed Sermeq Kujalleq glacier.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Text as="span" fontWeight="bold">
                Ilulissat Town Walk - 
              </Text>
              Explore vibrant harbor streets and visit the Zion Church and local museum.
            </Text>
          </ListItem>
        </UnorderedList>
        <Text as="span" textColor={"black"}>
          <Text as={"span"} fontStyle={"Italic"}>Exclusive for Uniskai Guests: </Text> <Text as={"span"} fontWeight={"bold"}>Air Safari over the Ilulissat Icefjord, </Text> 
          a breathtaking flight revealing panoramic views of the glacier fields and floating icebergs.
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          This special experience is curated as part of Uniskai’s enhanced shore programme, 
          elevating the journey beyond the sea.
        </Text>
        <Flex
          backgroundPosition="center"
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
        >
          <video 
            src="/static/images/silverwind-vid2.mp4" 
            width="750" 
            height="200" 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="auto"
            style={{ objectFit: "cover" }}
          />
        </Flex>
        <Text as="span" fontSize={11} textColor={"black"} textAlign={"right"} fontStyle={"italic"} mt={1}>
          Source: Silversea Website
        </Text>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 6 - Sisimiut & Amerloq Fjord
        </Text>
        <Text as="span" textColor={"black"} mb={1}>
          <Text as={"span"} fontStyle={"Italic"}>Included Activity:</Text> Town Walk with Greenlandic Tasting at Sisimiut 
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Discover Greenlandic culture in Sisimiut with its vivid houses, local delicacies, 
          and deep traditions before sailing into the still beauty of Amerloq Fjord.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-sisimiut.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 7 - Evighedsfjord
        </Text>
        <Text as="span" textColor={"black"} mb={1}>
          <Text as={"span"} fontStyle={"Italic"}>Included Activity:</Text> Expedition Activities with Silversea Expedition Team
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          “The Fjord of Eternity” lives up to its name with dramatic cliffs and glass-calm waters, 
          the perfect farewell to Greenland’s vast wilderness.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-evighedsfjord.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Day 8 - Return to Nuuk
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          As you dock back in Nuuk, memories of ice, light, 
          and silence linger as the essence of Greenland stays with you.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/silverwind-nuuk1.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          All-Inclusive Luxury 🌟
        </Heading>
        <Text textColor={"black"}>
          Butler service, gourmet dining, and fine wines all included. Enjoy open-seating restaurants, 24-hour in-suite dining, Wi-Fi, and gratuities covered. 
          Sail in comfort with Silversea’s personalized service and world-class amenities.
        </Text>
        {/* <Text textColor={"black"}>
          Zodiac landings, guided walks, and immersive excursions are <Text as={"span"} fontWeight={"bold"}>already included</Text> in the voyage, led by an expert Expedition Team of naturalists, geologists, and historians.
        </Text>  
        <Text mb={4} textColor={"black"} fontStyle={"italic"}>
          (Landings and Zodiac explorations may vary depending on the weather and sea state of the day)
        </Text>  

        <Text textColor={"black"}>
          Guests may also enhance their experience with <Text as={"span"} fontWeight={"bold"}>special additions</Text> curated by Uniskai 
          such as the <Text as={"span"} fontStyle={"italic"}>exclusive Air Safari in Ilulissat</Text>, offering an extraordinary aerial view of Greenland’s ice kingdom
        </Text>     
        <Text mb={4} textColor={"black"}>
            Between zodiac adventures and glacier landings, guests return to the warmth of fine wines, 
            gourmet cuisine, and serene comfort, a balance few ships in the world can offer.
        </Text>     
        <Text mb={4} textColor={"black"}>
            This is not just a voyage of exploration. It’s <Text as={"span"} fontWeight={"bold"}>expedition travel, perfected.</Text>
        </Text>          */}

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          The Silversea Experience
        </Heading>
        <Text textColor={"black"}>
          Silversea’s Silver Wind brings together the essence of <Text as={"span"} fontWeight={"bold"}>luxury and expedition. </Text>
        </Text> 
        <Text textColor={"black"}>
            Guided Zodiac landings, nature walks, 
            and immersive shore excursions led by expert naturalists and historians reveal Greenland’s wonders in depth.
        </Text> 
        <Text mb={4} textColor={"black"} fontStyle={"italic"}>
          (Activities may vary depending on the weather and sea conditions of the day.)
        </Text>  
        <Text textColor={"black"}>
          After days of Arctic discovery, guests return to refined comfort: ocean-view suites, butler service, and world-class dining.
        </Text>     
        <Text mb={4} textColor={"black"}>
          Uniskai travelers also enjoy special touches such as the exclusive <Text as={"span"} fontWeight={"bold"}>Air Safari over Ilulissat</Text>, offering an unforgettable view of the Icefjord from above. 
        </Text>        
        <Text mb={4} textColor={"black"}>
            This is not just a voyage of exploration. It’s <Text as={"span"} fontWeight={"bold"}>expedition travel, perfected.</Text>
        </Text>     
        <Flex
          backgroundPosition="center"
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
        >
          <video 
            src="/static/images/silverwind-vid3.mp4" 
            width="750" 
            height="200" 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="auto"
            style={{ objectFit: "cover" }}
          />
        </Flex>
        <Text as="span" fontSize={11} textColor={"black"} textAlign={"right"} fontStyle={"italic"} mt={1}>
          Source: Silversea Website
        </Text>
        
        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          An Invitation to Explore📩
        </Heading>
        <Text textColor={"black"}>
          This expedition is more than a cruise, and it’s a rare chance to stand where few travelers ever do, surrounded by ice-sculpted landscapes, lingering daylight, and Arctic calm.
        </Text>
        <Text textColor={"black"} mb={4}>
          If you seek serenity, wonder, and meaningful travel in equal measure, Greenland's edge awaits you.
        </Text>

        <Text fontStyle="Italic" mb={4}>
          Interested in learning more about this voyage or how to reserve a suite? 
          
        </Text>

        <Text fontWeight="semibold" textColor={"black"} mb={2}>
           Contact Our Team
        </Text>
        <Box 
          borderLeft="4px solid" 
          borderColor="black" 
          pl={4} 
          py={2}
        >
          <Stack spacing={1}>
            <Stack spacing={1}>
              <Flex>
                <Box w="70px">Vetris</Box>
                <Link as={NextLink} href="https://wa.me/6282230025459" target="_blank">
                  +62 813-7641-0413
                </Link>
              </Flex>

              <Flex>
                <Box w="70px">Marvin</Box>
                <Link as={NextLink} href="https://wa.me/6285827879667" target="_blank">
                  +62 858-2787-9667
                </Link>
              </Flex>

              <Flex>
                <Box w="70px">Audrey</Box>
                <Link as={NextLink} href="https://wa.me/6285207888877" target="_blank">
                  +62 852-0788-8877
                </Link>
              </Flex>

              <Flex>
                <Box w="70px">Daniel</Box>
                <Link as={NextLink} href="https://wa.me/6282287840788" target="_blank">
                  +62 822-8784-0788
                </Link>
              </Flex>

            </Stack>
          </Stack>
        </Box>
        
        {/* <Text textColor={"black"} mb={4}>
          (Tap to call or message on WhatsApp. Fast replies!)
        </Text> */}

        <Divider borderColor="grey" mt={4}/>

        <Text mt={4}>
         In the spirit of discovery, 
        </Text>
        <Text >
          Vetris – Tour Team
        </Text>
      </Flex>
    </Box>
  );
};

export default TermsOfServices;
