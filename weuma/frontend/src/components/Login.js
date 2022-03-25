import * as React from 'react';
import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react';

import RightSideBar from './RightBar';
import LoginForm from './LoginForm';

import { useViewport } from '../hooks/Responsive';

export default function Login(){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 }>
                <Center h='900px'>
                    <Box w={['100%','60%','60%']}>
                        <LoginForm />
                    </Box>
                </Center>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}