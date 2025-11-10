import Header from "@/components/common/Header";
import Footer from "@/components/sections/Footer";
import { Box, Flex, Text, Heading, Link, Divider, Stack, List, ListItem, UnorderedList} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const TermsOfServices = () => {
  return (
    <Box w={"100%"} h={"auto"} backgroundColor={"Beige"} color={"black"}>
      <Header/>

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
          Beyond the Blue: Discovering 
        </Heading>
        <Heading as="h1" fontSize="40" mb={4} textColor={"black"}>
          the Soul of Cheval Blanc Randheli
        </Heading>
        <Text textColor="black" fontWeight={"bold"} mb={2}>
          Some places don’t ask you to slow down, they simply make you forget how to rush. 
        </Text>
        <Text textColor="black" mb={4}>
          Hidden within the Noonu Atoll of the Maldives, this Maison redefines the meaning of modern luxury through emotion, artistry, and savoir-faire. 
        </Text>
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
            src="/static/images/cheval/cheval-1.jpg" 
            alt="cheval" 
            width={750}
            height={200}
          />
        </Flex>
        <Text textColor="black">
          Part of LVMH’s prestigious collection of Maisons, Cheval Blanc Randheli. 
        </Text>
        <Text textColor="black" mb={4}>
          Here, luxury whispers rather than declares, and every moment is composed like a masterpiece, intimate, timeless, and unmistakably Cheval Blanc.
        </Text>
        <Flex
          backgroundPosition={"center"}
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
          mb={2}
        >
          <Image 
            src="/static/images/cheval/cheval-2.jpg" 
            alt="cheval" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" fontSize={14} textColor={"black"} textAlign={"center"} fontStyle={"italic"} mt={1}>
          The bespoke Cheval Blanc seaplane, your first glimpse of paradise.
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          The Cheval Blanc Seaplane Salon 
        </Heading>
        <Text textColor={"black"} mb={2}>
          serves as the elegant gateway to the Maison’s world in the Maldives. Located at the <Text as={"span"} fontWeight={"Bold"}>Velana International Airport</Text> seaplane terminal, 
          it offers guests a serene and exclusive beginning to their journey. 
        </Text>
        <Text textColor={"black"} mb={4}>
          Designed by Jean-Michel Gathy, every curve, texture, and detail reflects LVMH’s devotion to refinement 
          from the bespoke architecture to the immersive sensory experiences curated with the elegance of time.
        </Text>
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
            src="/static/images/cheval/cheval-3.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" textColor={"black"} mb={2}>
          Forty-five villas form the heart of Randheli, each one tended to by a team of dedicated Ambassadeurs.
        </Text>
        <Text as="span" textColor={"black"} mb={4}>
          From the floating elegance of Water Villas and Lagoon Villas, to the serene embrace of Garden Water Villas and Island Villas, culminating in the rare perfection of the Cheval Blanc Randheli Private Island. 
          Each space is a canvas of light, crafted with the Maison’s savoir-faire where design, nature, and emotion exist in quiet harmony.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={2}
        >
          <Image 
            src="/static/images/cheval/cheval-4.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" fontSize={14} textColor={"black"} textAlign={"center"} fontStyle={"italic"} mt={1} mb={4}>
          Modern Maldivian architecture where elegance meets infinity.
        </Text>
        <Text as="span" textColor={"black"} mb={4}>
          The Water and Lagoon Villas stretch over the ocean, their 12.5-meter infinity pools mirroring the horizon. 
          Inside, spaces are perfumed with bespoke Dior fragrances, lending each moment a sense of quiet perfection.
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Cheval Blanc Randheli Private Island 
        </Heading>
        <Text textColor={"black"} mb={4}>
          is the most exclusive expression of the Maison’s art of hospitality, 
          a secluded world reserved for those who seek absolute privacy and timeless beauty. 
        </Text>
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
            src="/static/images/cheval/cheval-5.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
          <Text as="span" fontSize={14} textColor={"black"} textAlign={"center"} fontStyle={"italic"} mt={3}>
            a four-bedroom villa spanning over 2,200 square meters of living space
          </Text>
        </Flex>
        <Text as="span" textColor={"black"} mb={4}>
          Inside, refined materials such as handwoven rattan, fine woods, and bespoke furnishings are elevated by Maison signatures that celebrate craftsmanship and comfort. 
          A <Text as={"span"} fontWeight={"bold"}>dedicated team of Ambassadeurs</Text> attends exclusively to guests, curating each moment with discreet precision from sunrise breakfasts on the beach to candlelit dinners beneath the stars.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/cheval/cheval-6.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" textColor={"black"} mb={4}>
          Beyond its grandeur, the Private Island captures something even rarer: <Text as={"span"} fontWeight={"bold"}>a feeling of stillness</Text>. 
          It’s a place where time slows, horizons stretch endlessly, and every detail reflects LVMH’s quiet pursuit of perfection. 
          Here, privacy is not just a promise, it is an art form.
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Cheval Blanc Spa by Guerlain
        </Heading>
        <Text textColor={"black"} mb={4}>
          Cheval Blanc Randheli invites guests on a sensorial journey to an island exclusively dedicated to wellness. 
        </Text>
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
            src="/static/images/cheval/cheval-7.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" textColor={"black"} mb={4}>
        The journey begins with a sail to the idyllic Spa Island aboard a local dhoni. Depending on the mood and needs, the stopover can be either relaxing or energizing.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/cheval/cheval-8.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" textColor={"black"} mb={4}>
          Designed to cater to every desire, Guerlain has conceived a wealth of treatments and massages exclusively for Cheval Blanc Randheli
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          A Collection of Experiences: Tailored to each and every guest
        </Heading>
        <Text textColor={"black"} mb={4}>
          At Cheval Blanc Randheli, every experience is crafted with artistry, blending elegance, play, and discovery. 
          The Maison’s Alchemists design each moment to awaken emotion, whether through the calm of the ocean or the thrill of adventure.
        </Text>
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
            src="/static/images/cheval/cheval-9.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" textColor={"black"} mb={4}>
          For a touch of adrenaline, Randheli offers its exclusive Surf Simulator,  the only one of its kind in the atoll. 
          Perfect for both beginners and enthusiasts, it invites guests to ride the waves in a safe, crystal-clear lagoon, mastering balance under Maldivian skies.
        </Text>
        <Text as="span" textColor={"black"} mb={4}>
          On <Text as={"span"} fontWeight={"bold"}>Maakurandhoo Island,</Text> guests can play on two professional-grade <Text as={"span"} fontWeight={"bold"}>tennis courts</Text> and a <Text as={"span"} fontWeight={"bold"}>padel</Text> court, 
          surrounded by lush palms and ocean breeze, a sporting experience as refined as the setting itself.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/cheval/cheval-10.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>
        <Text as="span" textColor={"black"} mb={4}>
          <Text as={"span"} fontWeight={"bold"}>Beyond the Shore:</Text> Set sail aboard Nava, the Maison’s 16.76-meter luxury yacht, for sunset journeys or private island escapes. 
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          A Kid’s Friendly Maison - For Little Voyagers
        </Heading>
        <Text textColor={"black"} mb={4}>
          At Cheval Blanc Randheli, every young guest is welcomed as part of the Maison’s family. 
          The dedicated <Text as={"span"} fontStyle={"italic"}>Le Carousel</Text> for children and <Text as={"span"} fontStyle={"italic"}>Le Paddock</Text> for teens are worlds of creativity and 
          play where imagination takes flight through island adventures, art workshops, and ocean discoveries.
        </Text>
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
            src="/static/images/cheval/cheval-11.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Gastronomy at Cheval Blanc Randheli
        </Heading>
        <Text textColor={"black"} mb={4}>
          At Cheval Blanc Randheli, dining becomes a work of art, each venue a stage where flavor, fragrance, and finesse perform in harmony.
        </Text>
        <Flex
          backgroundPosition={"center"}
          backgroundSize="cover"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="Beige"
          mb={5}
        >
          <Image 
            src="/static/images/cheval/cheval-12.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex> 
        <Text textColor={"black"} mb={4} fontStyle={"italic"} fontWeight={"Bold"}>
          Restaurants
        </Text>
        <UnorderedList spacing={2.5} pl={6} styleType="disc" fontStyle={"italic"} mb={2}>
            <ListItem>
              <Text>
                  <Text as="span" fontWeight="bold">
                    Le 1947
                  </Text> – The Maison’s signature fine-dining restaurant, offering modern French haute cuisine paired with one of the Maldives’ most exclusive wine collections.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                  <Text as="span" fontWeight="bold" fontStyle={"italic"}>
                    La Table de Partage 
                  </Text> – A private dining space for bespoke tasting menus and intimate celebrations.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                  <Text as="span" fontWeight="bold" fontStyle={"italic"}>
                    White
                  </Text> – An all-day restaurant by the lagoon, serving refined Mediterranean-inspired cuisine.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                  <Text as="span" fontWeight="bold" fontStyle={"italic"}>
                    Diptyque 
                  </Text> – A dual-concept dining experience offering the vibrant flavors of Japan and East Asia.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                  <Text as="span" fontWeight="bold" fontStyle={"italic"}>
                    The Deelani 
                  </Text> – An alfresco restaurant overlooking the ocean, featuring fresh seafood and Mediterranean delicacies.
              </Text>
            </ListItem>
        </UnorderedList>
        <Text fontStyle="Italic" textColor={"black"} mb={4}>
           Every plate, every pour, every moment is touched by Art de Recevoir, the Maison’s signature of genuine hospitality and exquisite craft.
        </Text>
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
            src="/static/images/cheval/cheval-13.jpg" 
            alt="cruise" 
            width={750}
            height={200}
          />
        </Flex> 
        
        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          A Final Whisper
        </Heading>
        <Text textColor={"black"}>
          As the day folds into night, Randheli softens into stillness, the waves slow, the palms hush, and lanterns flicker across the lagoon like stars come down to rest.
        </Text>
        <Text textColor={"black"} mb={4}>
          This is where time pauses. Where every whisper of the ocean feels like a promise to return.
        </Text>
        <Text textColor={"black"} mb={4} fontStyle={"italic"}>
          Cheval Blanc Randheli is not a destination, it’s a feeling, one that lingers long after you leave.
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
            src="/static/images/cheval/cheval.mp4" 
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
          Source: Cheval Blanc Randheli
        </Text>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          ✨ The Whisper Continues 
        </Heading>
        <Text textColor={"black"} mb={4}>
          For a limited time, discerning travelers who reserve their stay for next year are invited to enjoy a complimentary villa upgrade, 
          an elevated escape into the Maison’s world of artistry, tranquility, and timeless grace.
        </Text>
        <Text textColor={"black"} mb={4}>
          It’s more than an offer it’s an invitation to begin the year surrounded by beauty, silence, and the unmistakable touch of Cheval Blanc.
        </Text>
        <Text textColor={"black"} mb={4}>
          Reserve early. Rediscover serenity. Stay where luxury whispers, never shouts.
        </Text>

        <Text fontWeight="semibold" textColor={"black"} mb={2}>
           Contact Our Stay Expert
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
                <Box w="80px">Richard</Box>
                <Link as={NextLink} href="https://wa.me/6282298877800" target="_blank">
                  +62 822 9887 7800
                </Link>
              </Flex>

              <Flex>
                <Box w="80px">Catherine</Box>
                <Link as={NextLink} href="https://wa.me/6287869010988" target="_blank">
                  +62 878 6901 0988
                </Link>
              </Flex>

              <Flex>
                <Box w="80px">Efen</Box>
                <Link as={NextLink} href="https://wa.me/6285207888833" target="_blank">
                  +62 852 0788 8833
                </Link>
              </Flex>

              <Flex>
                <Box w="80px">Ika</Box>
                <Link as={NextLink} href="https://wa.me/6282211121231" target="_blank">
                  +62 822 1112 1231
                </Link>
              </Flex>

              <Flex>
                <Box w="80px">Yuni</Box>
                <Link as={NextLink} href="https://wa.me/6282137103774" target="_blank">
                  +62 821 3710 3774
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
         Until your next whisper of paradise,
        </Text>
        <Text >
          Richard – Stay Team
        </Text>
      </Flex>
    </Box>
  );
};

export default TermsOfServices;
