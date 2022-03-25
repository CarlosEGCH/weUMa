import * as React from 'react';
import { Text, Center, Grid, GridItem, Box, Flex } from '@chakra-ui/react';

import RightSideBar from './RightBar.js';
import ShortcutForm from './ShortcutForm.js';
import ShortcutItem from './ShortcutItem.js';

import { useViewport } from '../hooks/Responsive.js';

export default function AdminShortcuts(){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem colStart={1} colEnd={ width > 900 ? 2 : 7}>
                <Box pt='70px' borderBottom='1px solid black'>
                    <Center borderBottom='1px solid black'>
                        <Text fontSize='20px' color='brand.accent' >Short Answers</Text>
                    </Center>
                </Box>
            <ShortcutForm />
            </GridItem>

            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 } rowStart={ width > 900 ? 1 : 2} pt={['10px', '100px', '100px']} pl='20px'>
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
            </GridItem>

            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}