import React from "react";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ConfirmationDeleteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant="primary" bg="gray.400" size="md">
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(61, 77, 81, 0.3)" />
        <ModalContent
          borderRadius="4px"
          p={["10px","32px"]}
          maxWidth="704px"
          w={[400,704]}
          height="246px">

          <ModalHeader p="0 0 8px 0">
              <Text textStyle="Body.b1" color="gray.600" >
                Are you sure you would like to delete this note?
              </Text>
          </ModalHeader>

          <ModalBody p="0 0 0 " pl={["10px","16px"]} >
            <Text
              textStyle="Body.b2"
             color="gray.500">
             All the peices fit together like a puzzle. If one peice is broken, the others will
              not fit together properly. Remember to keep track of everything and keep ahead of the 
              game so as not to miss the important bits. Speaking to colleagues regarding these issues is a good idea.
            </Text>
          </ModalBody>

          {/* Modal Footer */}
          <ModalFooter p="0">
            <Button
              bg="gray.500"
              color="gray.50"
              mr="24px"
              w="76px"
              h="32px"
              fontStyle="italic"
              onClick={onClose}
              >
              Cancel
            </Button>
            <Button
              bg="gray.600"
              color="gray.50"
              w="105px"
              h="32px"
              fontStyle="italic">
              Delete Note
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmationDeleteModal;
