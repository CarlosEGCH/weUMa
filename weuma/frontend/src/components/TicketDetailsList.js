import { Center, Grid, GridItem, Text, Link, Box, Flex, Image } from '@chakra-ui/react';
import * as React from 'react';

import AdminTicketUI from './AdminTicketUI';


export default function TicketDetailsList(props){

    return(
        <Box>   
            {props.tickets.length > 0 ? props.tickets.map((ticket, index) => {
                        return <AdminTicketUI key={index} ticket={ticket} handleUnstage={props.handleUnstage} />
                    }) : <Text>No tickets to display</Text>}
        </Box> 
    );
}