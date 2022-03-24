import { Grid, GridItem, Text, Container, Box, Center, Button } from '@chakra-ui/react';
import * as React from 'react';
import phoneImage from '../assets/spline.png';


export default function MainPage(){

    return (
        <Box h='100%' overflow='hidden' backgroundImage={phoneImage} backgroundPosition={['-620px 0px', '-500px 100px', '200px 0px']}>
            <Box width={['300px','450px','690px']} position='absolute' top={['10%','10%','20%']} color='brand.accent' left={['10%', '2%', '10%']} zIndex={3}>
                <Text fontSize={['40px', '50px', '100px']}>Helpdesk for UMa Students</Text>
                <Text fontSize={['15px', '20px', '40px']}>by students, for students</Text>
            </Box>
            <Button _hover={{backgroundColor: 'brand.extra'}} left={['12%', '5%', '11%']} bottom='100px' position='absolute' size='lg' fontSize='20px' bg='brand.accent' color='white'>Ask Something!</Button>
        </Box>
    );
}