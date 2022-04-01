import { Center, Grid, GridItem, Text, Link, Box, Flex, Image } from '@chakra-ui/react';
import * as React from 'react';

import TicketItem from './TicketItem';


export default function TicketsList(props){

    return(
        <Flex flexDirection={'column'} h='800px' overflow='auto' 
    sx={{
    '&::-webkit-scrollbar': {
      width: '12px',
      borderRadius: '8px',
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `rgba(0, 0, 0, 0.2)`,
    },
  }}>
            
            {props.tickets.map((ticket, index) => {
                return(
                    <TicketItem key={index} ticket={ticket} handleStage={props.handleStage} />
                )
            })}
        </Flex>
    );
}