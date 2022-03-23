import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react';
import * as React from 'react';

import QList from './FAQList.js';
import RightSideBar from './RightBar.js';

import { useViewport } from '../hooks/Responsive.js';

import faqImage from '../assets/faqBg.png';

export default function FaqPage(){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'backgroundImage={faqImage} backgroundRepeat='no-repeat' backgroundPosition={['center center', '40px 80px', '100px 100px']}>
            <Box position='absolute' top={['20px', '70px', '70px']} left={['18%', '20px', '30px']}>
                <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>Frequently Asked Questions</Text>
            </Box>
            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 }>
                <Center marginTop='300px'>
                    <QList />
                </Center>
            </GridItem>
            <GridItem colStart={6} bg='red' display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}