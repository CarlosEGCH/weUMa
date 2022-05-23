import {
  Tooltip,
  Flex,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image
} from '@chakra-ui/react'

import UserEditModal from './UserEditModal';
import UserDeleteModal from './UserDeleteModal';
import SendFaqModal from './SendFaqModal';
import ReopenTicketModal from './ReopenTicketModal';
import * as React from 'react';

export default function QuestionsList(props){
    if(props.tickets.length !== 0){
      return(
        <Accordion allowMultiple width='100%' color='brand.accent'>
        {
          props.tickets.map((ticket, index) => {
          return (
            <Flex key={index} flexFlow={"row"} >
              <AccordionItem width="100%">
              <h2>
                <AccordionButton _hover={{bg: 'brand.extra'}} bg='brand.secondary' _expanded={{bg: 'brand.extra'}} >
                  <Box flex='1' textAlign='left' fontSize='20px'>{ticket.title}</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor='rgba(255, 255, 255, 0.6)'>{ticket.response}
              </AccordionPanel>
            </AccordionItem>

            {/*------------ Edit Modal ------------*/}
            
            <Tooltip label={'Edit Ticket'}>
              <Box display={props.owner ? 'initial' : 'none'}>
                <UserEditModal ticketId={ticket._id} content={ticket.title} response={ticket.response} handleEdit={props.handleEdit} />
              </Box>
            </Tooltip>

            {/*------------ Delete Modal ------------*/}

            <Tooltip label={'Delete Ticket'}>
              <Box display={props.owner ? 'initial' : 'none'}>
                <UserDeleteModal handleDelete={props.handleDelete} faqId={ticket._id} />
              </Box>
            </Tooltip>

            {/*------------ Send FAQ Modal ------------*/}
            <Tooltip label={'Save as FAQ'}>
              <Box>
                <SendFaqModal ticketId={ticket._id} category={ticket.category} question={ticket.title} answer={ticket.response} />
              </Box>
            </Tooltip>

            {/*------------ Reopen Ticket -------------*/}
            <Tooltip label={'Reopen Ticket'}>
              <Box>
                <ReopenTicketModal socket={props.socket} category={ticket.category} question={ticket.title} ticketId={ticket._id} />
              </Box>
            </Tooltip>

            </Flex>)})
        }
        </Accordion>);
    }
    else{
      return(
        <Box>
          <Text>No tickets to display</Text>
        </Box>
      );
    }

}