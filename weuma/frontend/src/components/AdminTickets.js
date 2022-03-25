import * as React from 'react';
import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react';

import RightSideBar from './RightBar.js';
import TicketsList from './TicketsList';
import AdminTicketUI from './AdminTicketUI.js';

import { useViewport } from '../hooks/Responsive.js';

export default function AdminTickets(){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem colStart={1} colEnd={ width > 900 ? 2 : 7}>
                <Box pt='70px' borderBottom='1px solid black'>
                    <Center borderBottom='1px solid black'>
                        <Text fontSize='20px' color='brand.accent' >Support Tickets</Text>
                    </Center>
                </Box>
                <TicketsList />
            </GridItem>

            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 } display={ width > 900 ? 'initial' : 'none' } pt='100px' pl='20px'>
                <AdminTicketUI />
                <AdminTicketUI />
                <AdminTicketUI />
                <AdminTicketUI />
                <AdminTicketUI />
                <AdminTicketUI />
                <AdminTicketUI />
            </GridItem>

            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}