"use client"
import Header from "@/components/common/Header";
import Footer from "@/components/sections/Footer";
import {
  Box, Flex, Text, Heading, Link, Divider, Stack, List, ListItem, UnorderedList, OrderedList, Button
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
    <Box w={"100%"} h={"auto"} backgroundColor={"beige"} color={"black"}>
      <Header />

      {/* Bagian brown header */}
      {/* <Flex
        justifyContent={"center"}
        alignItems="center"
        bgColor={"brown"}
        color="beige"
        flexDirection="column"
        px={{ base: 15, sm: 16 }}
        py={10}
        position="relative"
      >

      </Flex> */}

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
        <Box maxW="850px" px={{ base: 2, md: 4 }} mb={4}>
          <OrderedList spacing={4} pl={4}>
            <ListItem>
              <Text as="span" fontWeight="bold">Australia</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Brunei Darussalam</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Chile</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Malaysia</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Mexico</Text> (Maksimal 180 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">New Zealand</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Papua Nugini</Text> (Maksimal 60 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Peru</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Taiwan</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Vietnam</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Indonesia</Text> (Maksimal 60 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Hong Kong</Text> (Maksimal 60 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">China</Text> (Maksimal 60 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Japan</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Singapore</Text> (Maksimal 60 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Korea Selatan</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Thailand</Text> (Maksimal 90 hari per visit)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Philippines</Text> (Maksimal 60 hari per visit)
            </ListItem>
          </OrderedList>
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image
            src="/static/images/apec-map.jpeg"
            alt="asean"
            width={750}
            height={200}
          />
        </Flex>



        <Divider borderColor="grey" mt={4} />

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Kenapa ABTC Penting untuk Traveller Bisnis?
        </Heading>
        <Text mb={4} textColor="black" textAlign={"justify"}>
          Kamu bisa bepergian ke beberapa negara APEC dalam satu bulan dengan mudah. Tanpa harus mengurus visa berulang kali, 
          menunggu approval, dan menghadapi birokrasi yang panjang.
        </Text>
        <Text mb={4} textColor="black" textAlign={"justify"}>
          Dengan <Text as="span" fontWeight="bold">APEC Business Travel Card (ABTC)</Text>, cukup tunjukkan kartumu dan nikmati proses imigrasi yang cepat serta praktis. 
          Perjalanan pun jadi lebih lancar, sehingga kamu bisa sepenuhnya fokus pada trip kamu..
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