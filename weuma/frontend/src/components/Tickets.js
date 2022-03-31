import * as React from 'react';
import { Text, Center, Grid, GridItem, Box, propNames } from '@chakra-ui/react';

import RightSideBar from './RightBar';
import TicketForm from './TicketForm';

import { useViewport } from '../hooks/Responsive';

import ticketImage from '../assets/ticketBg.svg';

export default function TicketsPage(props){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)' backgroundImage={ticketImage} backgroundRepeat='no-repeat' backgroundPosition={['center center', '40px 80px', '100px 100px']}>
            <Box position='absolute' top={['20px', '70px', '70px']} left={['18%', '20px', '30px']}>
                <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>Submit Support Ticket</Text>
            </Box>
            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 }>
                <Center h='900px'>
                    <Box w={['100%','60%','60%']} shadow={'lg'}>
                        <TicketForm userId={props.userId} />
                    </Box>
                </Center>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}