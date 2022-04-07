import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import * as React from 'react';

export default function QuestionsList(props){

    if(props.tickets.length !== 0){
      return(
        <Accordion defaultIndex={[0]} allowMultiple width='100%' color='brand.accent'>
        {
          props.tickets.solvedTickets.map((ticket, index) => {
          return (
            <AccordionItem key={index}>
    <h2>
      <AccordionButton _hover={{bg: 'brand.extra'}} bg='brand.secondary' _expanded={{bg: 'brand.extra'}} >
        <Box flex='1' textAlign='left' fontSize='20px'>
          {ticket.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor='rgba(255, 255, 255, 0.6)'>
     {ticket.response}
    </AccordionPanel>
  </AccordionItem>
          )
        })
        }

        </Accordion>
    );
    }
    else{
      return(
        <Box>
          <Text>No tickets to display</Text>
        </Box>
      );
    }

}