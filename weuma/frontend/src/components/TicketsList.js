import { Center, Grid, GridItem, Text, Link, Box, Flex, Image } from '@chakra-ui/react';
import * as React from 'react';

import TicketItem from './TicketItem';


export default function TicketsList(){

    return(
        <Flex flexDirection={'column'} h='800px' overflow='auto'>
            
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
        </Flex>
    );
}