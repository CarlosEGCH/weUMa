import * as React from 'react';

import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react';

import RightSideBar from './RightBar';
import peopleImage from '../assets/peopleBg.png';

import { useViewport } from '../hooks/Responsive.js';

import PeopleSearch from './SearchPeople';

export default function PeoplePage(){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)' backgroundImage={peopleImage} backgroundRepeat='no-repeat' backgroundPosition={['center center', '40px 80px', '100px 100px']}>
            <Box position='absolute' top={['20px', '70px', '70px']} left={['18%', '20px', '30px']}>
                <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>People</Text>
            </Box>
            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 }>
                <Center marginTop='150px' shadow={'lg'}>
                    <PeopleSearch></PeopleSearch>
                </Center>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}