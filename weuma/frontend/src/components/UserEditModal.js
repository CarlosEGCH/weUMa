import * as React from 'react';

import {
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Box,
  Image
} from '@chakra-ui/react';

import editIcon from "../assets/edit-icon.svg";
import { useDisclosure } from '@chakra-ui/react';

export default function UserEditModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

    return(<Box>
        <Button onClick={onOpen}>
              <Image src={editIcon} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Ticket</ModalHeader>
                    <ModalCloseButton />
                  <ModalBody>Form</ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>Submit</Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
            </Modal>
    </Box>)
}