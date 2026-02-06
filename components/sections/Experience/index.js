import TourItem from "@/components/common/TourItem";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Flex
      flexDirection="column"
      px={{ base: 10, sm: 16 }}
      paddingBottom={10}
      paddingTop={5}
      bgColor="Beige"
      color="brown"
    >
      <Text fontSize={"4xl"} mb={6} letterSpacing={"5px"}>
        EXPERIENCE
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: 3, lg: 6, xl: 9 }}
      >
        <TourItem
          src={"/static/images/Berastagi_1.png"}
          title="MANGROVE EXPLORE"
          description=""
          href="https://drive.google.com/file/d/1LC-QZej4Dx2524Oo4ukIPmZL4WinBov1/view?usp=sharing"
        />
        <TourItem
          src={"/static/images/atv_ride.jpg"}
          title="ATV DRIVING TAMAN HUTAN RAYA"
          description=""
          size="fill"
          href="https://drive.google.com/file/d/1wYAHUm-a507yd5fsvavOWog_nbGIsCcS/view?usp=sharing"
        />
        <TourItem
          src={"/static/images/sibayak_mount.jpg"}
          title="SIBAYAK MOUNT HIKE"
          description=""
          size="fill"
          href="https://drive.google.com/file/d/1x9dWeiJEeszDAmq_40mDjq5OuQD7i-I5/view?usp=sharing"
        />
        <TourItem
          src={"/static/images/pelaruga.jpg"}
          title="PELARUGA"
          description=""
          size="fill"
          href="https://drive.google.com/file/d/1x9dWeiJEeszDAmq_40mDjq5OuQD7i-I5/view?usp=sharing"
        />
        <TourItem
          src={"/static/images/pottery.jpg"}
          title="POTTERY HANDCRAFT"
          description=""
          size="fill"
          href="https://drive.google.com/file/d/1x9dWeiJEeszDAmq_40mDjq5OuQD7i-I5/view?usp=sharing"
        />
        <TourItem
          src={"/static/images/orangutan.jpg"}
          title="BUKIT LAWANG JUNGLE TREK "
          description=""
          size="fill"
          href="https://drive.google.com/file/d/1x9dWeiJEeszDAmq_40mDjq5OuQD7i-I5/view?usp=sharing"
        />
        <TourItem
          src={"/static/images/macrame.jpg"}
          title="MACRAME HANDCRAFT"
          description=""
          size="fill"
          href="https://drive.google.com/file/d/1x9dWeiJEeszDAmq_40mDjq5OuQD7i-I5/view?usp=sharing"
        />
      </Grid>
    </Flex>
  );
};

export default Experience;
