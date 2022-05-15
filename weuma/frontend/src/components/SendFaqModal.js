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

import faqIcon from "../assets/faq-icon.svg";
import { useDisclosure } from '@chakra-ui/react';



export default function SendFaqModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

    const handleFAQ = async () => {
    try {
        
        await fetch('http://localhost:8080/api/faq-submit',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            question: props.question,
            answer: props.answer,
            category: props.category,
            ticketId: props.ticketId,
    })})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch((e) => {console.log("Something went wrong ", e);})

    } catch (error) {
        console.log(error)
    }
}

    return(<Box>
        <Button onClick={onOpen}>
              <Image src={faqIcon} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
                <ModalContent>
                  <ModalHeader>New FAQ</ModalHeader>
                    <ModalCloseButton />
                  <ModalBody>Send this ticket to the Frequently Asked Questions page?</ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => {onClose(); handleFAQ();}}>Send</Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
            </Modal>
    </Box>)
}