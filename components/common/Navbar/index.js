"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import contactData from "@/components/sections/SalesContactList/contact_list.json";
import { usePathname } from "next/navigation";
import TeamLabel from "@/components/common/TeamLabel";

const baseNav = [
  // { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  // { label: "Unimate", href: "/unimate" },
];

const Navbar = () => {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  // bikin list submenu dari JSON (title + slug)
  const teamMenus = useMemo(
    () =>
      (contactData?.contact || []).map((c) => ({
        label: c.title,     // contoh: "fly (Ticketing)"
        href: `/sales/${encodeURIComponent(c.slug)}`,
      })),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex={1000}
        px={{ base: 4, md: 8 }}
        py={3}
        align="center"
        justify="space-between"
        transition="background-color .2s ease, backdrop-filter .2s ease, box-shadow .2s ease"
        bg={scrolled ? "rgba(10,10,10,0.75)" : "transparent"}
        backdropFilter={scrolled ? "saturate(140%) blur(8px)" : "none"}
        boxShadow={scrolled ? "sm" : "none"}
      >
        {/* Logo */}
        {/* <Box as={Link} href="/" display="inline-flex" alignItems="center">
          <Image
            src="/static/images/uniskai_header.png"
            width={160}
            height={56}
            alt="Uniskai"
            priority
          />
        </Box> */}

        {/* Menu kanan - Desktop */}
          {/* Uniskai Team (Dropdown) */}
          {/* <Popover trigger="hover" openDelay={80} closeDelay={80} placement="bottom-start">
            <PopoverTrigger>
              <ChakraLink
                href="/sales"
                as={Link}
                _hover={{ textDecoration: "none", opacity: 0.85 }}
                fontWeight="medium"
                color="white"
                onClick={(e) => e.preventDefault()} // supaya klik judul buka popover
              >
                Uniskai Team
              </ChakraLink>
            </PopoverTrigger>
            <PopoverContent
              bg="rgba(20,20,20,0.95)"
              borderColor="gray.700"
              minW="sm"
            >
              <PopoverBody>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
                   Link “All Teams” */}
                  {/*<Button
                    as={Link}
                    href="/sales"
                    variant="ghost"
                    justifyContent="flex-start"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    All Teams
                  </Button> */}

                  {/* Anak menu dari JSON */}
                  {/* {teamMenus.map((m) => (
                    <Button
                      key={m.href}
                      as={Link}
                      href={m.href}
                      variant="ghost"
                      justifyContent="flex-start"
                      color="white"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      {m.label}
                    </Button>
                  ))}
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover> */}
          
        <Flex 
          as="header"
          flex="1" 
          justify="flex-end" 
          mt={12}
          align="center"
          pr={8}
          // pt={3}
        >
          <HStack 
            spacing={24} 
            display={{ base: "none", md: "flex" }} 
            fontSize={25} 
            fontFamily="'Sigvar', sans-serif"
            pr={12}
          >
            {/* Uniskai Team (Dropdown) */}
            <Popover trigger="hover" openDelay={80} closeDelay={80} placement="bottom-start">
              <PopoverTrigger>
                <ChakraLink
                  href="/sales"
                  as={Link}
                  _hover={{ textDecoration: "none", opacity: 0.75 }}
                  fontWeight="medium"
                  color="white"
                  onClick={(e) => e.preventDefault()}
                >
                  Uniskai Team
                </ChakraLink>
              </PopoverTrigger>
              <PopoverContent
                bg="transparent"      // tanpa background
                border="none"         // tanpa border
                boxShadow="none"      // tanpa shadow
                minW="auto"
                w="fit-content"
                fontSize={15}
              >
                <PopoverBody p={0}>
                  <VStack align="flex-start" spacing={1} mt={1}>
                    {/* All Teams */}
                    {/* <ChakraLink
                      as={Link}
                      href="/contact"
                      color="white"
                      fontWeight="normal"
                      textTransform="capitalize"
                      _hover={{ textDecoration: "underline" }}
                    >
                      All Teams
                    </ChakraLink> */}

                    {/* Anak menu dari JSON */}
                    {teamMenus.map((m) => (
                      <ChakraLink
                        key={m.href}
                        as={Link}
                        href={m.href}
                        color="white"
                        fontWeight="normal"
                        textTransform="capitalize"
                        _hover={{ textDecoration: "underline" }}
                      >
                        <TeamLabel label={m.label} />
                      </ChakraLink>
                    ))}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* About / Article / Unimate */}
            {baseNav.map((item) => (
              <ChakraLink
                key={item.href}
                as={Link}
                href={item.href}
                _hover={{ textDecoration: "none", opacity: 0.75 }}
                fontWeight="medium"
                color="white"
              >
                {item.label}
              </ChakraLink>
            ))}

            {/* <Button
              as={Link}
              href="/contact"
              size="sm"
              colorScheme="whiteAlpha"
              variant="outline"
            >
              Contact
            </Button> */}
          </HStack>
        </Flex>


        {/* Hamburger - Mobile */}
        <IconButton
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Open menu"
          size={{ base: "lg", md: "md" }}
          icon={<HamburgerIcon boxSize={{ base: 9, md: 5 }} />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          mt={3}
        />
      </Flex>

      {/* Drawer Mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerHeader mb={3}>
            <Image
              src="/static/images/uniskai_header.png"
              width={140}
              height={48}
              alt="Uniskai"
            />
          </DrawerHeader>
          <DrawerBody>
            <VStack 
              align="stretch"
              spacing={6}
              // fontSize={25} 
              fontFamily="'Sigvar', sans-serif"
            >
              {/* Link biasa */}
              {baseNav.map((item) => (
                <ChakraLink
                  key={item.href}
                  as={Link}
                  href={item.href}
                  onClick={onClose}
                  _hover={{ textDecoration: "none", opacity: 0.9 }}
                  fontSize="lg"
                >
                  {item.label}
                </ChakraLink>
              ))}

              {/* Uniskai Team (Accordion) */}
              <Accordion allowToggle>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton px={0} mb={2}>
                      <Box as="span" flex="1" textAlign="left" fontSize="lg">
                        Uniskai Team
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel px={0} pt={2}>
                    <VStack align="stretch" spacing={6}>
                      {/* <ChakraLink
                        as={Link}
                        href="/sales"
                        onClick={onClose}
                        _hover={{ textDecoration: "none", opacity: 0.9 }}
                      >
                        All Teams
                      </ChakraLink> */}
                      {teamMenus.map((m) => (
                        <ChakraLink
                          key={m.href}
                          as={Link}
                          href={m.href}
                          onClick={onClose}
                          _hover={{ textDecoration: "none", opacity: 0.9 }}
                          textTransform="capitalize"
                        >
                          <TeamLabel label={m.label} />
                          {/* {m.label} */}
                        </ChakraLink>
                      ))}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              {/* <Button
                as={Link}
                href="/contact"
                colorScheme="whiteAlpha"
                variant="outline"
                onClick={onClose}
                mt={2}
              >
                Contact
              </Button> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

// "use client";

// import { Box, Flex } from "@chakra-ui/react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 80);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Flex
//       as="header"
//       position="fixed"
//       top={0}
//       left={0}
//       w="100%"
//       zIndex={1000}
//       px={6}
//       py={3}
//       align="center"
//       justify="space-between"
//       transition="background-color .2s ease, backdrop-filter .2s ease"
//       bg={scrolled ? "rgba(20, 20, 20, 0.85)" : "transparent"}
//       backdropFilter={scrolled ? "saturate(140%) blur(8px)" : "none"}
//     >
//       <Box>
//         <Image
//           src="/static/images/uniskai_header.png"
//           width={192}
//           height={68}
//           alt="logo"
//           priority
//         />
//       </Box>
//       {/* menu kanan di sini */}
//     </Flex>
//   );
// };

// export default Navbar;


// import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
// import Image from "next/image";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from "@chakra-ui/react";
// import React from "react";

// const Navbar = () => {
//   return (
//     <Flex backgroundColor="brown" zIndex={2} position="fixed" w={"100%"} p={4}>
//       <Box>
//         <Image
//           src={"/static/images/uniskai_header.png"}
//           width={192}
//           height={68}
//           alt="logo"
//         />
//       </Box>
//     </Flex>
//   );
// };

// export default Navbar;