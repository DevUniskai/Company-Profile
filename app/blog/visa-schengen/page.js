import Header from "@/components/common/BackButtonItem";
import Footer from "@/components/sections/Footer";
import { Box, Flex, Text, Heading, Link, Divider, Stack, List, ListItem, UnorderedList, OrderedList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

// Tambah di atas (sebelum return) atau di luar component:
const contacts = [
  { name: "Tubagus (Jakarta)", wa: "6287761706656", display: "+62 877-6170-6656" },
  { name: "Ima",                wa: "6281283210688", display: "+62 812-8321-0688" },
  { name: "Wisda",              wa: "6281257571231", display: "+62 812-5757-1231" },
  { name: "Hengki",             wa: "6285218418647", display: "+62 852-1841-8647" },
  { name: "Wendy",              wa: "6282320008886", display: "+62 823-2000-8886" },
  { name: "Steven",             wa: "6282276384763", display: "+62 822-7638-4763" },
];

const VisaSchengen = () => {
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
          Schengen Visa 5 Tahun untuk WNI: 
        </Heading>
        <Heading as="h1" fontSize="35" mb={2} textColor={"black"}>
          Peluang Baru lewat Skema Visa Cascade
        </Heading>
        <Text mb={4} textColor="black">
          Buat kamu warga negara Indonesia (WNI) yang sering bepergian ke Eropa, ada kabar gembira,
          <Text as="span" fontWeight="bold"> kini kamu berkesempatan mendapatkan visa Schengen multiple entry dengan masa berlaku hingga 5 tahun!</Text> Kebijakan baru ini hadir melalui skema <Text as="span" fontWeight="bold">Schengen Visa Cascade.</Text>
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/schengen.jpg" 
            alt="asean" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Apa Itu Visa Cascade?
        </Heading>
        <Text mb={4} textColor={"black"}>
          Schengen Visa Cascade adalah kebijakan khusus dari Komisi Eropa yang <Text as="span" fontWeight="bold">memberikan kemudahan bagi WNI untuk mendapatkan visa Schengen jangka panjang</Text> (multi-entry hingga 5 tahun),
          <Text as="span" fontWeight="bold"> jika memiliki rekam jejak perjalanan Schengen yang baik.</Text>
        </Text>
        <Text mb={4} textColor={"black"}>
          Tujuannya jelas untuk mempermudah pelancong yang punya catatan baik untuk bolak-balik ke negara-negara Schengen tanpa perlu repot apply visa setiap kali berpergian.
        </Text>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/prabowo.jpg" 
            alt="asean" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Syarat Mendapatkan Visa Schengen 5 Tahun
        </Heading>
        <Text mb={4} textColor={"black"}>
          Agar bisa mengajukan visa dengan masa berlaku panjang ini, berikut beberapa syarat utamanya:
        </Text>
        <Box maxW="850px" mx="auto" px={{ base: 2, md: 4 }}>
            <OrderedList spacing={4} pl={4}>
                {/* Poin 1 */}
                <ListItem fontWeight="bold">
                Warga Negara Indonesia
                <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                    Kebijakan ini{" "}
                    <Text as="span" fontWeight="bold">
                    berlaku untuk WNI
                    </Text>
                    , jadi pastikan kamu memiliki paspor Indonesia yang masih aktif.
                </Text>
                </ListItem>

                {/* Poin 2 */}
                <ListItem fontWeight="bold">
                Rekam Jejak Penggunaan Visa Schengen yang Baik
                <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                    Kamu harus{" "}
                    <Text as="span" fontWeight="bold">
                    pernah memiliki visa Schengen yang sah
                    </Text>{" "}
                    dan 
                    <Text as="span" fontWeight="bold">
                    {" "}telah digunakan dengan benar dalam 3 tahun terakhir.
                    </Text>{" "}
                    Ini artinya:
                    <UnorderedList pl={6} spacing={1} mt={2}>
                        <ListItem>Kamu pernah mengunjungi negara Schengen sebelumnya.</ListItem>
                        <ListItem>Kamu tidak pernah overstay (tinggal melebihi izin waktu).</ListItem>
                        <ListItem>Kamu tidak pernah memiliki catatan pelanggaran imigrasi.</ListItem>
                    </UnorderedList>
                </Text>
                </ListItem>

                {/* Poin 3 */}
                <ListItem fontWeight="bold">
                Dokumen Lengkap dan Strategi Pengajuan yang Tepat
                <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                    Pengajuan visa harus dilengkapi dengan:
                    <UnorderedList pl={6} spacing={1} mt={2}>
                        <ListItem>Itinerary perjalanan yang jelas dan logis.</ListItem>
                        <ListItem>Bukti keuangan, akomodasi dan transportasi.</ListItem>
                        <ListItem>Asuransi perjalanan yang valid.</ListItem>
                        <ListItem>Surat Keterangan kerja/usaha atau dokumen pendukung lainnya.</ListItem>
                    </UnorderedList>
                </Text>
                </ListItem>

                {/* Poin 4 */}
                <ListItem fontWeight="bold">
                Masa Berlaku Paspor Masih Panjang
                <Text fontWeight="normal" mt={1} lineHeight={1.8} mb={2}>
                    Meski kamu memenuhi syarat di atas, <Text as="span" fontWeight="bold">masa berlaku paspor kamu juga sangat menentukan lamanya visa yang diberikan.</Text>
                </Text>
                <Text fontWeight="normal" fontStyle="italic">
                    <Text as="span" fontWeight="bold">Contoh: </Text>Jika paspor kamu akan kadaluwarsa dalam waktu kurang dari 2 tahun, kemungkinan besar kamu hanya akan diberikan visa 1 tahun, 
                    meskipun kamu eligible untuk visa 5 tahun.
                </Text>
                </ListItem>
            </OrderedList>

            {/* Catatan */}
            <Stack mt={4}>
            </Stack>
        </Box>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Catatan Penting: Tetap Berdasarkan Persetujuan Kedutaan
        </Heading>
        <Text mb={4} textColor={"black"}>
          Pemberian visa Schengen 5 tahun <Text as="span" fontWeight="bold">bukanlah hak otomatis</Text>, melainkan
          <Text as="span" fontWeight="bold"> keputusan sepenuhnya ada di tangan kedutaan </Text> tempat kamu mengajukan visa.
        </Text>
        <Text mb={4} textColor={"black"}>
          ⚠️ Jadi meskipun kamu merasa sudah memenuhi semua kriteria, 
          tetap ada kemungkinan visa yang diberikan memiliki durasi lebih pendek (misalnya 1 atau 2 tahun), tergantung evaluasi mereka.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/schengen-flag.jpg" 
            alt="asean" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={4}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Kesimpulan
        </Heading>
        <Text mb={4} textColor="black" textAlign={"justify"}>
            Skema <Text as="span" fontWeight="bold">Visa Cascade </Text>ini adalah angin segar bagi para pelancong Indonesia yang sering ke Eropa.
            Dengan <Text as="span" fontWeight="bold">riwayat perjalanan yang baik, dokumen lengkap, dan paspor yang masih panjang masa berlakunya</Text>, 
            kamu bisa mendapatkan visa yang berlaku hingga 5 tahun.
        </Text>
        <Stack mt={4} mb={4}>
            <Text fontStyle="italic">
                💡 Tips: Simpan semua visa lama, stempel imigrasi, dan bukti perjalanan dengan rapi. Itu semua bisa jadi nilai tambah saat mengajukan visa berikutnya!
            </Text>
        </Stack>


        <Divider borderColor="grey" mt={4}/>

        <Text mt={4} mb={6} textColor="black" textAlign={"justify"}>
            Kalau kamu sedang merencanakan perjalanan ke Eropa atau ingin tahu apakah kamu eligible untuk visa 5 tahun ini, jangan ragu untuk konsultasi lebih lanjut dengan team Uniskai.
        </Text>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/country-schengen.jpg" 
            alt="asean" 
            width={750}
            height={200}
          />
        </Flex>

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

export default VisaSchengen;