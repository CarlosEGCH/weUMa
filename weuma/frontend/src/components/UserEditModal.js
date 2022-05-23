import * as React from 'react';

import {
    Button,
    Modal,
    Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Box,
  Image,
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import editIcon from "../assets/edit-icon.svg";
import { useDisclosure } from '@chakra-ui/react';

export default function UserEditModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [edit, setEdit] = React.useState({edit: props.content, response: props.response, pinned: props.pinned || false});

  const handleChange = (e) => {
    setEdit({...edit, [e.target.name]: e.target.value});
  }

    return(<Box>
        <Button onClick={onOpen}>
              <Image src={editIcon} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Ticket</ModalHeader>
                    <ModalCloseButton />
                  <ModalBody>
                    <FormControl mt={4}>
                      <Text fontSize={20}>Title:</Text>
                      <Text my='5px'>{props.content}</Text>
                      <FormLabel>Ticket Title</FormLabel>
                      <Input onChange={handleChange} name='edit' value={edit.edit} placeholder='Ticket title...' />
                    </FormControl>

                    <FormControl mt={4}>
                      <Text fontSize={20}>Response:</Text>
                      <Text my='5px'>{props.response}</Text>
                      <FormLabel>Ticket Response</FormLabel>
                      <Input onChange={handleChange} name='response' value={edit.response} placeholder='Ticket response...' />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => {props.handleEdit(props.ticketId, edit.edit, edit.response); onClose();}}>Submit</Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
            </Modal>
    </Box>)
}