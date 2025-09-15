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

const VisaAsean = () => {
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
          Visa ASEAN 5 Tahun ke China: 
        </Heading>
        <Heading as="h1" fontSize="40" mb={2} textColor={"black"}>
          Fasilitas Baru untuk Pebisnis Indonesia dan Keluarganya
        </Heading>
        <Text mb={4} textColor="black">
            Kabar baik buat para pebisnis Indonesia yang sering menjalankan aktivitas bisnis di China. Sejak 9 Juni 2025, Pemerintah China resmi meluncurkan Visa ASEAN 5 Tahun Multiple Entry, visa khusus yang dirancang untuk memperkuat konektivitas bisnis dan mobilitas keluarga lintas Asia Tenggara.
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/china-flag.jpg" 
            alt="asean" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" textColor={"black"} mt={8} mb={4}>
          Apa Itu Visa ASEAN 5 Tahun?
        </Heading>
        <Text mb={4} textColor={"black"}>
            <Text as="span" fontWeight="bold">Visa ASEAN 5 Tahun</Text> adalah visa <Text as="span" fontWeight="bold">multiple-entry (boleh masuk-keluar berkali-kali)</Text> yang diterbitkan oleh Kedutaan dan Konsulat Tiongkok di Indonesia. Visa ini memberikan:
        </Text>
        <UnorderedList spacing={2.5} pl={6} styleType="disc" mb={4}>
            <ListItem>
            <Text>
                <Text as="span" fontWeight="bold">
                Masa berlaku hingga 5 tahun
                </Text>
            </Text>
            </ListItem>

            <ListItem>
            <Text>
                <Text as="span" fontWeight="bold">
                Durasi tinggal hingga 180 hari per kunjungan
                </Text>
            </Text>
            </ListItem>

            <ListItem>
            <Text>
                <Text as="span" fontWeight="bold">
                Berlaku untuk pebisnis dan profesional Indonesia
                </Text> 
                serta anggota keluarga langsung (suami/istri dan anak-anak)
            </Text>
            </ListItem>
        </UnorderedList>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="Beige"
          mb={4}
        >
          <Image 
            src="/static/images/asean.jpg" 
            alt="asean" 
            width={750}
            height={200}
          />
        </Flex>

        <Divider borderColor="grey" mt={6}/>


        <Heading as="h2" fontSize="2xl" mt={8} mb={4} textColor={"black"}>
          Siapa Saja yang Bisa Mengajukan?
        </Heading>
        <Text mb={4} textColor={"black"}>
            Visa ini ditujukan <Text as="span" fontWeight="bold">khusus untuk para pebisnis</Text>, namun juga mencakup:
        </Text>
        <UnorderedList spacing={2.5} pl={6} styleType="disc">
            <ListItem>
            <Text>
                <Text as="span" fontWeight="bold">
                Pasangan (suami/istri)
                </Text>
            </Text>
            </ListItem>

            <ListItem>
            <Text>
                <Text as="span" fontWeight="bold">
                Anak-anak 
                </Text> dari pemegang visa utama
            </Text>
            </ListItem>
        </UnorderedList>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Syarat Mendapatkan Visa ASEAN 5 Tahun
        </Heading>
        <Text mb={4} textColor={"black"}>
          Agar permohonan kamu disetujui, ada beberapa syarat penting yang perlu dipenuhi:
        </Text>
        <Box maxW="850px" mx="auto" px={{ base: 2, md: 4 }}>
            <OrderedList spacing={4} pl={4}>
                {/* Poin 1 */}
                <ListItem fontWeight="bold">
                Pernah Memiliki Visa China Sebelumnya
                <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                    Kamu harus memiliki minimal{" "}
                    <Text as="span" fontWeight="bold">
                    satu-dua kali visa China sebelumnya
                    </Text>
                    , baik visa turis ataupun bisnis.
                </Text>
                </ListItem>

                {/* Poin 2 */}
                <ListItem fontWeight="bold">
                Surat Undangan Bisnis
                <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                    Diperlukan{" "}
                    <Text as="span" fontWeight="bold">
                    surat undangan resmi dari perusahaan di China
                    </Text>{" "}
                    yang menjelaskan tujuan kunjungan dan durasi yang diinginkan.
                </Text>
                </ListItem>

                {/* Poin 3 */}
                <ListItem fontWeight="bold">
                Pengajuan di Lokasi yang Ditentukan
                <Text fontWeight="normal" mt={1} lineHeight={1.8}>
                    Saat ini, permohonan hanya bisa dilakukan melalui:
                </Text>
                <UnorderedList pl={6} spacing={1} mt={2}>
                    <ListItem>
                    China Visa Application Service Center (CVASC) Jakarta
                    </ListItem>
                    <ListItem>CVASC Surabaya</ListItem>
                    <ListItem>CVASC Denpasar</ListItem>
                </UnorderedList>
                </ListItem>
            </OrderedList>

            {/* Catatan */}
            <Stack mt={4}>
                <Text fontStyle="italic">
                Catatan: Untuk wilayah Medan, layanan ini belum tersedia.
                </Text>
            </Stack>
        </Box>

        <Divider borderColor="grey" mt={6}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Detail Teknis Visa ASEAN
        </Heading>
        <Box maxW="850px" mx="auto" px={{ base: 2, md: 4 }}>
            <TableContainer>
                <Table variant="unstyled" size="md">
                <Thead>
                    <Tr>
                    <Th fontSize="lg" fontWeight="bold">
                        Aspek
                    </Th>
                    <Th fontSize="lg" fontWeight="bold">
                        Keterangan
                    </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    <Tr>
                    <Td fontWeight="bold">
                        Masa Berlaku
                    </Td>
                    <Td>
                        Hingga 5 tahun
                    </Td>
                    </Tr>

                    <Tr>
                    <Td fontWeight="bold">Jenis Entri</Td>
                    <Td>Multiple-entry</Td>
                    </Tr>

                    <Tr>
                    <Td fontWeight="bold">
                        Durasi Tinggal per Kunjungan
                    </Td>
                    <Td>
                        Maksimal 180 hari
                    </Td>
                    </Tr>

                    <Tr>
                    <Td fontWeight="bold">Berlaku untuk</Td>
                    <Td>
                        Pebisnis Suami/Istri + Anak-anak
                    </Td>
                    </Tr>

                    <Tr>
                    <Td fontWeight="bold">Ketersediaan</Td>
                    <Td>
                        Resmi berlaku mulai 9 Juni 2025
                    </Td>
                    </Tr>
                    <Tr>
                    <Td fontWeight="bold">Lokasi Pengajuan</Td>
                    <Td>CVASC Jakarta, Surabaya, Denpasar</Td>
                    </Tr>
                </Tbody>
                </Table>
            </TableContainer>
        </Box>

        <Divider borderColor="grey" mt={4}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Cara Mengajukan
        </Heading>
        <OrderedList spacing={1} pl={4}>
            {/* Poin 1 */}
            <ListItem>
                <Text as="span" fontWeight="bold">Siapkan dokumen yang diperlukan,</Text> termasuk paspor, visa China sebelumnya, dan surat undangan bisnis.
            </ListItem>
            <ListItem>
                <Text as="span" fontWeight="bold">Daftar dan buat janji temu</Text> di situs resmi China Visa Application Service Center.
            </ListItem>
            <ListItem>
                <Text as="span" fontWeight="bold">Konsultasikan dokumen dan jenis visa yang sesuai</Text> dengan team Uniskai.
            </ListItem>
        </OrderedList>

        <Divider borderColor="grey" mt={4}/>

        <Heading as="h2" fontSize="2xl" mt={6} mb={4} textColor={"black"}>
          Kesimpulan
        </Heading>
        <Text mb={4} textColor="black" textAlign={"justify"}>
            Visa ASEAN 5 Tahun ini adalah peluang emas bagi para pelaku bisnis Indonesia yang ingin memperkuat relasi dengan mitra di China, tanpa harus repot mengurus visa berkali-kali. 
            Tambahan menariknya: <Text as="span" fontWeight="bold">keluarga bisa ikut serta dengan proses yang lebih mudah!</Text>
        </Text>
        <Text mb={6} textColor="black" textAlign={"justify"}>
            Kalau kamu tertarik untuk apply atau butuh template surat undangan bisnis, itinerart, aray konsultasi visa, tinggalkan komentar atau hubungi Uniskai langsung.
        </Text>
        <Text mb={2} textColor="black" textAlign={"justify"}>
            Ayo, hubungi team Uniskai untuk konsultasi lebih lanjut!
        </Text>
        <Box 
            borderLeft="4px solid" 
            borderColor="black" 
            pl={4} 
            py={2}
            mb={4}
         >
            <Stack spacing={1}>
                <Stack spacing={1}>
                <Flex>
                    <Box w="140px">Tubagus (Jakarta)</Box>
                    <Link as={NextLink} href="https://wa.me/6287761706656" target="_blank">
                    +62 877-6170-6656
                    </Link>
                </Flex>

                <Flex>
                    <Box w="140px">Ima</Box>
                    <Link as={NextLink} href="https://wa.me/6281283210688" target="_blank">
                    +62 812-8321-0688
                    </Link>
                </Flex>

                <Flex>
                    <Box w="140px">Wisda</Box>
                    <Link as={NextLink} href="https://wa.me/6281257571231" target="_blank">
                    +62 812-5757-1231
                    </Link>
                </Flex>

                <Flex>
                    <Box w="140px">Hengki</Box>
                    <Link as={NextLink} href="https://wa.me/6285218418647" target="_blank">
                    +62 852-1841-8647
                    </Link>
                </Flex>

                <Flex>
                    <Box w="140px">Wendy</Box>
                    <Link as={NextLink} href="https://wa.me/6282320008886" target="_blank">
                    +62 823-2000-8886
                    </Link>
                </Flex>

                <Flex>
                    <Box w="140px">Steven</Box>
                    <Link as={NextLink} href="https://wa.me/6282276384763" target="_blank">
                    +62 822-7638-4763
                    </Link>
                </Flex>
                </Stack>
            </Stack>
        </Box>

        <Text >
          warm regards,
        </Text>
        <Text >
          Wendy – Docs Team
        </Text>
      </Flex>

    </Box>
  );
};

export default VisaAsean;