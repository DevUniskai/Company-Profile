import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    Link,
    Flex
  } from "@chakra-ui/react";
  import { NextLink } from "next/link";
  
  const ReusableModal = ({ isOpen, onClose, title, children }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor= "Beige">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Flex justifyContent="space-between" width="100%">
              <Link
                as={NextLink}
                href="/terms/termsofservice"
                color="brown"
                _hover={{ textDecoration: "underline" }}
                fontSize="sm"
              >
                Terms of Service
              </Link>
              <Link
                as={NextLink}
                href="/terms/returnandrefundpolicy"
                color="brown"
                _hover={{ textDecoration: "underline" }}
                fontSize="sm"
              >
                Complaints and Refund Policy
              </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ReusableModal;
  