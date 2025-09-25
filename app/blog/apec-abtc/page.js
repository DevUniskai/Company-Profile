import Footer from "@/components/sections/Footer";
import {
  Box, Flex, Text, Heading, Link, Divider, Stack, List, ListItem, UnorderedList, OrderedList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

// Tambah di atas (sebelum return) atau di luar component:
const contacts = [
  { name: "Ima", wa: "6281283210688", display: "+62 812-8321-0688" },
  { name: "Wisda", wa: "6281257571231", display: "+62 812-5757-1231" },
  { name: "Wendy", wa: "6282320008886", display: "+62 823-2000-8886" },
];

const ApecAbtc = () => {
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
          Apa Itu APEC Business Travel Card?
        </Heading>
        {/* <Heading as="h1" fontSize="35" mb={2} textColor={"black"}>
          Peluang Baru lewat Skema Visa Cascade
        </Heading> */}
        <Text textColor="black">
          Pernah dengar tentang <Text as="span" fontWeight="bold"> APEC Business Travel Card (ABTC)?</Text>
        </Text>
        <Text mb={4} textColor="black">
          Kartu ini ibarat “jalur cepat” buat pebisnis yang sering bolak-balik ke negara-negara anggota <Text as="span" fontWeight="bold">APEC (Asia-Pacific Economic Cooperation)</Text>.
          Dengan kartu ini, perjalanan bisnis lintas negara jadi jauh lebih praktis tanpa harus repot urus visa setiap kali.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image
            src="/static/images/apec.jpg"
            alt="asean"
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6} />

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Keuntungan Punya ABTC
        </Heading>
        <Box maxW="850px" mx="auto" px={{ base: 2, md: 4 }}>
          <OrderedList spacing={4} pl={4}>
            {/* Poin 1 */}
            <ListItem fontWeight="bold">
              Bebas Visa
              <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                Pemegang ABTC bisa masuk ke negara anggota APEC tertentu{" "}
                <Text as="span" fontWeight="bold">tanpa perlu visa terpisah</Text>.
              </Text>
            </ListItem>

            {/* Poin 2 */}
            <ListItem fontWeight="bold">
              Fast Track di Bandara
              <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                Banyak bandara internasional menyediakan {" "}
                <Text as="span" fontWeight="bold">
                  jalur imigrasi khusus
                </Text>{" "}
                untuk pemegang ABTC. Lebih cepat, tanpa antrian panjang.
              </Text>
            </ListItem>

            {/* Poin 3 */}
            <ListItem fontWeight="bold">
              Multi-Entry, Long Validity
              <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                Kartu berlaku hingga <Text as="span" fontWeight="bold">5 tahun</Text>,
                jadi kamu bisa keluar masuk negara tujuan berkali-kali selama periode tersebut.
              </Text>
            </ListItem>

            {/* Poin 4 */}
            <ListItem fontWeight="bold">
              Hemat Waktu & Biaya
              <Text fontWeight="normal" mt={1} lineHeight={1.8} mb={2}>
                Tidak perlu lagi apply visa berulang-ulang, hemat waktu dan biaya administrasi.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>

        <Divider borderColor="grey" mt={6} />

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Siapa yang Bisa Mengajukan?
        </Heading>
        <UnorderedList spacing={2.5} pl={6} styleType="disc" mb={4}>
          <ListItem>
            <Text>
              Pebisnis yang{" "}
              <Text as="span" fontWeight="bold">
                sering melakukan perjalanan ke negara-negara APEC.
              </Text>
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              Eksekutif perusahaan atau pengusaha yang punya urusan bisnis lintas negara (seperti komisaris,
              direktur atau pemegang saham dari suatu perusahaan PT).
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              Harus memenuhi syarat administrasi di negara asal.
            </Text>
          </ListItem>
        </UnorderedList>

        <Divider borderColor="grey" mt={6} />

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Negara Anggota APEC yang Mendukung ABTC
        </Heading>
        <Text mb={4} textColor={"black"}>
          Berikut 18 negara di APEC yang menerima ABTC:
        </Text>
        <Box maxW="850px" px={{ base: 2, md: 4 }}>
          <OrderedList spacing={4} pl={4}>
            <ListItem fontWeight="bold">Australia</ListItem>
            <ListItem fontWeight="bold">Brunei Darussalam</ListItem>
            <ListItem fontWeight="bold">Chile</ListItem>
            <ListItem fontWeight="bold">Malaysia</ListItem>
            <ListItem fontWeight="bold">Mexico</ListItem>
            <ListItem fontWeight="bold">New Zealand</ListItem>
            <ListItem fontWeight="bold">Papua Nugini</ListItem>
            <ListItem fontWeight="bold">Peru</ListItem>
            <ListItem fontWeight="bold">Taiwan</ListItem>
            <ListItem fontWeight="bold">Vietnam</ListItem>
            <ListItem fontWeight="bold">Indonesia</ListItem>
            <ListItem fontWeight="bold">Hong Kong</ListItem>
            <ListItem fontWeight="bold">China</ListItem>
            <ListItem fontWeight="bold">Japan</ListItem>
            <ListItem fontWeight="bold">Singapore</ListItem>
            <ListItem fontWeight="bold">Korea Selatan</ListItem>
            <ListItem fontWeight="bold">Thailand</ListItem>
            <ListItem fontWeight="bold">Philippines</ListItem>
          </OrderedList>
        </Box>

        <Divider borderColor="grey" mt={4} />

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Kenapa ABTC Penting untuk Traveller Bisnis?
        </Heading>
        <Text mb={4} textColor="black" textAlign={"justify"}>
          Bayangkan kamu harus terbang ke beberapa negara APEC dalam satu bulan.
          Tanpa ABTC, kamu harus apply visa ke masing-masing negara, menunggu approval, dan menghadapi birokrasi berlapis.
        </Text>
        <Text textColor="black" textAlign={"justify"}>
          Dengan ABTC?
        </Text>
        <Text mb={4} textColor="black" textAlign={"justify"}>
          Tinggal tunjukkan kartumu, imigrasi jadi lebih simpel, perjalanan jadi lebih fokus ke <Text as="span" fontWeight="bold">urusan bisnis</Text>, bukan ribet urusan visa.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image
            src="/static/images/apec-app.jpg"
            alt="asean"
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={4} />

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Kesimpulan
        </Heading>
        <Text mb={4} textColor="black" textAlign={"justify"}>
          APEC Business Travel Card adalah solusi cerdas buat para pebisnis dan pengusaha yang aktif berbisnis di kawasan Asia Pasifik. 
          Hemat waktu, bebas visa, plus kenyamanan ekstra saat melewati imigrasi.
        </Text>
        <Text mb={4} textColor="black" textAlign={"justify"}>
          Jadi, kalau kamu sering bepergian ke negara APEC, ABTC bisa jadi <Text as="span" fontWeight="bold">“kartu sakti”</Text> yang wajib kamu miliki.
        </Text>

        <Text mb={2} textColor="black" textAlign={"justify"}>
          Ayo, hubungi team Uniskai untuk konsultasi lebih lanjut!
        </Text>
        <Box
          borderLeft="4px solid"
          borderColor="black"
          pl={{ base: 3, sm: 4 }}
          py={2}
          mb={4}
          fontSize={{ base: "sm", md: "md" }}
          // fontSize={{ base: "xs", sm: "sm", md: "md" }}   // makin kecil di layar kecil
          lineHeight={{ base: "short", sm: "shorter", md: "base" }}
        >
          <Stack spacing={{ base: 1, sm: 2 }}>
            {contacts.map((c) => (
              <Flex
                key={c.wa}
                direction={{ base: "column", sm: "row" }}
                align={{ base: "flex-start", sm: "center" }}
                gap={{ base: 0.5, sm: 3 }}
              >
                <Box
                  w={{ base: "auto", sm: "120px", md: "160px" }}
                  flexShrink={0}
                >
                  {c.name}
                </Box>

                <Link
                  as={NextLink}
                  href={`https://wa.me/${c.wa}`}
                  target="_blank"
                  // whiteSpace={{ base: "normal", sm: "nowrap" }}
                  whiteSpace="nowrap"
                >
                  {c.display}
                </Link>
              </Flex>
            ))}
          </Stack>
        </Box>

        <Text >
          Warm regards,
        </Text>
        <Text >
          Wendy – Docs Team
        </Text>
      </Flex>

    </Box>
  );
};

export default ApecAbtc;