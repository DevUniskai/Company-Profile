"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
} from "@chakra-ui/react";
import { merchandise } from "./prizes";

/**
 * Staff-only stock control. Not linked from anywhere — opened by tapping the
 * BCA logo five times, or with ?staff=1 in the URL.
 *
 * Switching a prize off only stops the wheel landing on it; the item still
 * spins past in the reel, so customers can't see what has run out.
 */
export default function StaffPanel({
  isOpen,
  onClose,
  soldOut,
  toggle,
  markAllAvailable,
}) {
  const available = merchandise.length - soldOut.size;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      isCentered
      scrollBehavior="inside"
    >
      <ModalOverlay bg="rgba(60, 20, 8, 0.6)" />
      <ModalContent mx={4} borderRadius="16px">
        <ModalHeader
          fontFamily="'Helvetica-Neu', sans-serif"
          color="#b14824"
          fontSize="18px"
          pb={1}
        >
          Prize stock
          <Text fontSize="12px" fontWeight="400" color="gray.600" mt="2px">
            {available} of {merchandise.length} prizes can be won. Switched-off
            prizes still appear in the reel.
          </Text>
        </ModalHeader>
        <ModalCloseButton color="#b14824" />

        <ModalBody px={4} py={2}>
          {available === 0 && (
            <Box
              bg="#fdecec"
              border="1px solid #f3b1b1"
              borderRadius="8px"
              px={3}
              py={2}
              mb={3}
            >
              <Text fontSize="12px" color="#a02020" fontWeight="600">
                Every prize is switched off, so the wheel cannot be spun. Turn
                at least one back on.
              </Text>
            </Box>
          )}

          {merchandise.map((item) => {
            const isAvailable = !soldOut.has(item.id);
            return (
              <Flex
                key={item.id}
                align="center"
                gap={3}
                py={2}
                borderBottom="1px solid"
                borderColor="gray.100"
              >
                <Box
                  position="relative"
                  flexShrink={0}
                  boxSize="36px"
                  bg="gray.50"
                  borderRadius="6px"
                  overflow="hidden"
                  opacity={isAvailable ? 1 : 0.4}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="36px"
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Text
                  flex="1"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="1.3"
                  color={isAvailable ? "gray.800" : "gray.400"}
                >
                  {item.name}
                </Text>

                <Switch
                  isChecked={isAvailable}
                  onChange={() => toggle(item.id)}
                  colorScheme="orange"
                  aria-label={`${item.name} available`}
                />
              </Flex>
            );
          })}
        </ModalBody>

        <ModalFooter gap={2}>
          <Button
            onClick={markAllAvailable}
            variant="outline"
            size="sm"
            color="#b14824"
            borderColor="#b14824"
            fontSize="12px"
            isDisabled={soldOut.size === 0}
          >
            Mark all available
          </Button>
          <Button
            onClick={onClose}
            size="sm"
            bgColor="#bf5432"
            color="#e7ca9e"
            fontSize="12px"
            _hover={{ bgColor: "#b14824" }}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
