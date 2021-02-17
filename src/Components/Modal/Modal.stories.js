import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Container,
  } from "@chakra-ui/react";
  import { InfoOutlineIcon } from "@chakra-ui/icons";

  export default{
    title:'Modal',
    component:Modal,
    
}

export const ConfirmationModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container maxW="xl" centerContent>
        <Button
          size="lg"
          variant="default"
          color="gray.1"
          bg="dayBreakBlue.6"
          onClick={onOpen}>
          Open
        </Button>
      </Container>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        w="400px"
        height="188px">
        <ModalOverlay />
        <ModalContent borderRadius="2px"  padding="32px 32px 24px" >
          <ModalHeader mb="8px" pb="0" pt="0" pl="0"   >
          <InfoOutlineIcon w="21px" h="21px" mr="17px" color="calendulaGold.6"/> 
                 Modal Title
          </ModalHeader>
     
        
          <ModalBody pt="0" mb="24px"   ml="11px">
            Interactively monetize corporate alignments and fully tested niche
            markets.
          </ModalBody>

          <ModalFooter pt="0" pb="0">
            <Button
              variant="default"
              mr="8px"
              onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" bg="dayBreakBlue.6" w="51px" h="32px">
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}