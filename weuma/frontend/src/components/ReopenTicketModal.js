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
  Image,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select
} from '@chakra-ui/react';

import reopenIcon from "../assets/reopen-ticket.svg";
import { useDisclosure } from '@chakra-ui/react';

export default function ReopenTicketModal(props) {

  const socket = props.socket;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ticket, setTicket] = React.useState({
    ticketId: props.ticketId,
    email: '',
    category: props.category || '',
    title: props.question || '',
    description: '',
  });

    const handleReopen = async () => {

    try {
        
        await fetch('http://localhost:8080/api/reopen-ticket',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            ticketId: ticket.ticketId,
            title: ticket.title,
            category: ticket.category.toLowerCase(),
            description: ticket.description,
            email: ticket.email,
    })})
    .then(res => res.json())
    .then(data => {
      socket.emit('send_ticket')
    })
    .catch((e) => {console.log("Something went wrong ", e);})

    } catch (error) {
        console.log(error)
    }
}

    const handleChange = (e) => {
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        });
    }


    return(<Box>
        <Button onClick={onOpen}>
              <Image height='35px' src={reopenIcon} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Re-open Ticket</ModalHeader>
                    <ModalCloseButton />
                    <FormControl mt={4} px={4}>
                        <FormLabel>Ticket Title</FormLabel>
                        <Input name='title' onChange={handleChange} value={ticket.title} placeholder='Ticket title...' />
                        <FormLabel mt='10px'>Ticket Category</FormLabel>
                        <Select onChange={handleChange} name='category' id='category' placeholder='Select category' color='gray'>
                            <option>Admission</option>
                            <option>Education</option>
                            <option>Resources</option>
                            <option>Documents</option>
                            <option>Guide</option>
                            <option>Payments</option>
                            <option>Lost & Found</option>
                            <option>Support Tickets</option>
                            <option>Transport</option>
                            <option>Shop & Merch</option>
                        </Select>
                        <FormLabel mt='10px'>Ticket Description</FormLabel>
                        <Input name='description' onChange={handleChange} placeholder='Ticket description...' />
                        <FormLabel mt='10px'>Email:</FormLabel>
                        <Input name='email' onChange={handleChange} placeholder='Email...' />
                    </FormControl>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => {onClose(); handleReopen();}}>Re-open</Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
            </Modal>
    </Box>)
}