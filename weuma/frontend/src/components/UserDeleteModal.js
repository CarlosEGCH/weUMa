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
  Image,
  Box,
} from '@chakra-ui/react';

import deleteIcon from "../assets/delete-icon.svg";
import { useDisclosure } from '@chakra-ui/react';

export default function UserDeleteModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
    return(<Box>
        <Button onClick={onOpen}>
              <Image src={deleteIcon} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Delete Ticket</ModalHeader>
                    <ModalCloseButton />
                  <ModalBody>Are you sure?</ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => {props.handleDelete(props.faqId); onClose();}}>Delete</Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
            </Modal>   
    </Box>)
}