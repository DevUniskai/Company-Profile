import Footer from "@/components/sections/Footer";
import { Box, Flex, Text, Heading, Link, Divider, Stack, List, ListItem} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const TermsOfServices = () => {
  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"Beige"} color={"black"}>
      <Flex pt={10} justifyContent={"center"} bgColor={"brown"}>
        <Image
          src={"/static/images/uniskai_header.png"}
          width={192}
          height={68}
          alt="logo"
        />
      </Flex>
      
      <Flex justifyContent={"center"} 
        bgColor={"brown"}
        color="Beige"
        flexDirection="column"
        px={{ base: 15, sm: 16 }}
        py={10}
        >
        {/* <Text mb={6} letterSpacing={"5px"} fontSize={{ base: "3xl", sm: "4xl" }} textAlign="center">
          TERMS OF SERVICE
        </Text> */}
      </Flex>

      <Flex
        flexDirection="column"
        px={{ base: 10, sm: 16 }}
        py={10}
        maxW="800px"
        mx="auto"
        lineHeight="1.5"
        bgColor={"Beige"}
        color={"black"}
      >
        <Heading as="h1" fontSize="40" mt={4} mb={1} textColor={"black"}>
          Mediterranean Magic:
        </Heading>
        <Heading as="h1" fontSize="40" mb={2} textColor={"black"}>
          9 Nights, 9 Ports, 1 Unforgettable Cruise aboard Norwegian Viva
        </Heading>
        <Text mb={4} textColor="black">
            Imagine sipping Turkish coffee at sunrise in Istanbul… and just days later, raising a glass to the Santorini sunset. That’s the rhythm of this 9-night Greek Isles & Mediterranean cruise aboard Norwegian Viva. And the best part? You only unpack once. 
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
            src="/static/images/vid-ncl.mp4" 
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
          Source: NCL Youtube
        </Text>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Why a Mediterranean Cruise with Norwegian Viva Is Special
        </Heading>
        <Text mb={4} textColor={"black"}>
            This isn’t just a vacation, it’s a voyage where the journey is the destination. Every morning, you’ll wake up in a new land: ancient ruins one day, infinity-blue beaches the next. 
            Think of it as your <Text as="span" fontWeight="bold">floating boutique hotel</Text> that delivers you straight into history, culture, and seaside bliss.
        </Text>
        <Text as="span" fontSize={18} textColor={"black"} fontStyle={"italic"} textAlign={"center"}>
          Sailing date: 18 May - 27 May 2026
        </Text>
        <Flex
          backgroundPosition={"center"}
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
        >
          <Stack spacing={4} align="center">
            <Image 
              src="/static/images/map.png" 
              alt="cruise" 
              width={750}
              height={200}
            />
            <Image 
              src="/static/images/list.jpeg" 
              alt="cruise" 
              width={750}
              height={200}
            />
          </Stack>
        </Flex>

        <Heading as="h2" fontSize="35" textColor={"black"} mt={8} mb={4}>
          Race the Waves: The Only Go-Kart Track at Sea
        </Heading>
        <Text mb={2} textColor={"black"}>
          Only Norwegian Cruise Line brings the thrill of go-kart racing onto the ocean. 
          Onboard Norwegian Viva, you’ll find the Viva Speedway, a three-level racetrack that twists and turns high above the sea.
        </Text>
        <Text mb={4} textColor={"black"}>
          Imagine strapping into an electric kart, the ocean breeze on your face, as you speed past other racers with nothing but endless blue water as your backdrop. 
          It’s not just a ride. It’s an adrenaline-pumping experience you won’t find on any other cruise line.
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
            src="/static/images/ncl-gocart.mp4" 
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
          Source: NCL Youtube
        </Text>

        <Heading as="h2" fontSize="2xl" mt={8} mb={4} textColor={"black"}>
          9 Ports in 9 Nights: Cruise Itinerary Highlights
        </Heading>
        <Text fontSize="20" fontWeight="bold" textColor={"black"} mb={1}>
          Istanbul, Turkey
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Istanbul is the only city in the world that spans two continents. Hagia Sophia, Grand Bazaar, and a fusion of East meets West glamour.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/istanbul.png" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Santorini, Greece
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          The ethereal sunset you’ve seen on postcards, live in real time.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/santorini.png" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Mykonos, Greece
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Windmills by day, nightlife by night, all in picture-postcard perfection.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/mykonos.png" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Athens (Piraeus), Greece
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Ancient wonderland with the Acropolis, the Parthenon, and the footsteps of philosophers.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/athen.png" 
            alt="cruise" 
            width={750}
            height={200}
          />
          <Text as="span" textColor={"black"} fontStyle={"italic"} mt={2}>
            Wow fact: Athens is home to one of the world’s oldest theaters still in use today.
          </Text>
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Valleta, Malta
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          A city that feels straight out of a fantasy saga.
        </Text>
        <Flex gap={6} justify="center">
          <Box position="relative" w="375px" h="200px">
            <Image 
              src="/static/images/valleta1.png"
              alt="cruise"
              fill
              style={{ objectFit: "cover" }}  // isi penuh, bisa terpotong
            />
          </Box>

          <Box position="relative" w="375px" h="200px">
            <Image 
              src="/static/images/valleta2.png"
              alt="cruise"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Flex>
        <Text as="span" textColor={"black"} mt={2} mb={4}>
          Game of Thrones fans will love this stop! Mdina’s gate became the entrance to King’s Landing in Season 1, and Valletta’s fortresses set the stage for the Red Keep. Walking here is like stepping into Westeros, minus the dragons. 
        </Text>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Catania, Sicily 
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          The birthplace of cannoli, one of Italy’s most famous desserts.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/catania.webp" 
            alt="cruise" 
            width={750}
            height={200}
          />
          <Text as="span" textColor={"black"} mt={2}>
            Etna views and cannoli that taste like Sicilian joy.
          </Text>
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Salerno, Italy
        </Text>
        <Text as="span" textColor={"black"} mb={2}>
          Launch pad to the Amalfi Coast’s pastel-cliff villages.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/salerno.webp" 
            alt="cruise" 
            width={750}
            height={200}
          />
          <Text as="span" textColor={"black"} fontStyle={"italic"} mt={2}>
            Wow fact: Salerno was home to the world’s first medical school, founded in the 9th century.
          </Text>
        </Flex>

        <Text as="span" textColor={"black"} mt={6}>
          This Mediterranean cruise itinerary is your sampler of iconic Europe without the logistics stress of hotels or trains.
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Ready to Book Your Mediterranean Cruise?
        </Heading>
        <Heading as="h2" fontSize="20" mb={1} textColor={"black"}>
          Starting Prices (Per Person)
        </Heading>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/harga.jpeg" 
            alt="cruise" 
            width={500}
            height={50}
          />
        </Flex>

        <Text textColor={"black"} mb={4}>
          Cabins are limited, and promotional offers change fast. Most guests are surprised by how approachable this kind of dream can be. 
          A 9-night journey through 9 ports often starts around <Text as={"span"} fontWeight={"bold"} >USD 2,700 per person</Text>, depending on the cabin and season.
        </Text>

        <Text textColor={"black"} mb={4}>
          <Text as={"span"} fontWeight={"bold"} >That’s less than what many spend on flights and hotels hopping between countries! </Text>
          Here, you only unpack once and wake up in a new destination every morning. 
        </Text>

        <Text fontWeight="semibold" textColor={"black"} mb={1}>
          👉 Check Price & Availability – Contact Our Team
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

              <Flex>
                <Box w="70px">Rosinta</Box>
                <Link as={NextLink} href="https://wa.me/6281376410413" target="_blank">
                  +62 813-7641-0413
                </Link>
              </Flex>
            </Stack>

          </Stack>
        </Box>
        
        <Text textColor={"black"} mb={4}>
          (Tap to call or message on WhatsApp. Fast replies!)
        </Text>

        <Divider borderColor="grey" mt={4}/>


        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={6} mb={2}>
          Life Onboard Norwegian Viva: Where Luxury Meets Adventure
        </Heading>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={2}
        >
          <Image 
            src="/static/images/ncl.jpg" 
            alt="cruise" 
            width={750}
            height={50}
          />
        </Flex>
        <Text textColor={"black"} mb={2}>
          Step aboard Norwegian Viva, the newest ship in NCL’s Prima Class, and discover modern luxury at sea with endless dining, entertainment, and relaxation options.
        </Text>
        <Box 
          borderLeft="4px solid" 
          borderColor="black" 
          pl={4} 
          py={2} 
          mb={4}
        >
          <Stack spacing={1}>
            <Text fontStyle={"italic"}>“It’s not just a ship, it’s a floating resort. Everything feels new, spacious, and thoughtfully designed.” – Passenger Review on Cruise Critic</Text>
          </Stack>
        </Box>


        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Premium Accommodations
        </Text>
        <List spacing={1} styleType="disc" pl={4} mb={2}>
          <ListItem>The Haven: A private sanctuary with butler service, infinity pool, and exclusive dining.</ListItem>
          <ListItem>Studios for Solo Travelers : Compact yet stylish rooms with access to a private lounge.</ListItem>
        </List>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/ship.png" 
            alt="cruise"
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Entertainment & Thrills
        </Text>
        <List spacing={1} styleType="disc" pl={4} mb={1}>
          <ListItem>Broadway Shows: Enjoy Beetlejuice: The Musical and high-energy tribute performances.</ListItem>
          <ListItem>Action-Packed Fun: Race on the 3-level Viva Speedway, plunge down The Drop dry slide, surf The Wave, or dive into VR adventures at Galaxy Pavilion.</ListItem>
          <ListItem>Family Programs: Kids clubs, teen lounges, and interactive family games.</ListItem>
        </List>
        <Text as="span" textColor={"black"} mb={2}>
          (Norwegian Cruise Line has also been voted “Best Entertainment at Sea” multiple times—so expect Broadway-level shows without Broadway prices.)
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/ship3.png" 
            alt="cruise"
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Relaxation & Wellness
        </Text>
        <List spacing={1} styleType="disc" pl={4} mb={2}>
          <ListItem>Mandara Spa & Thermal Suite: Saunas, salt and ice rooms, vitality pools, and panoramic loungers.</ListItem>
          <ListItem>Fitness Center: Fully equipped with classes and ocean views.</ListItem>
        </List>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/ship4.png" 
            alt="cruise"
            width={750}
            height={200}
          />
        </Flex>

        <Text fontSize="20" mb={1} fontWeight="bold" textColor={"black"}>
          Scenic Spaces & Shopping
        </Text>
        <List spacing={1} styleType="disc" pl={4}>
          <ListItem> Ocean Boulevard: A 360° seaside promenade for sunrise walks or sunset cocktails.</ListItem>
          <ListItem> Observation Lounge & La Terrazza: Cozy spots for cocktails with a view.</ListItem>
          <ListItem> Vibe Beach Club: Adults-only with infinity pools and loungers.</ListItem>
          <ListItem> Shopping & Souvenirs: Designer boutiques, duty-free finds, and onboard photography studios.</ListItem>
        </List>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={6} mb={4}>
          The “Imagine This” Moment
        </Heading>
        <Text>
          Picture it: you're sipping Maltese wine as the sun dips behind Valletta’s fortress walls. The ship horn sounds. Tomorrow you’ll wake up in Sicily. This isn’t just a trip, but it’s a story you’ll tell for years.
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Text mt={6} mb={4}>✨ Unpack once. Explore endlessly. The Mediterranean is calling. Will you answer?</Text>

        <Text >
          with love,
        </Text>
        <Text >
          Audrey – Sail Team
        </Text>
      </Flex>

    </Box>
  );
};

export default TermsOfServices;
