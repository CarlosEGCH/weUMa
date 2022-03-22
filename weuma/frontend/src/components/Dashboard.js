import { Grid, GridItem, Box, Center } from '@chakra-ui/react';
import * as React from 'react';


export default function MainPage(){

    return (
        <Grid h='100%' bg='red.500' templateColumns='repeat(8, 1fr)'>
            <GridItem h='100%'>
                Here goes the options
            </GridItem>
            <GridItem colStart={2} colSpan={6} h='100%' bg='cyan'>
                <Center>
                Here goes the chat
                </Center>
            </GridItem>
            <GridItem h='100%'>
                Here goes the admins
            </GridItem>
        </Grid>
    );
}