import { Center, Grid, GridItem, Text, Link, Box, Flex, Image, Spacer } from '@chakra-ui/react';
import * as React from 'react';

import arrowIcon from '../assets/arrow-icon.svg';

export default function TicketItem(){

    return(
        <Flex my='16px' bg='brand.secondary' flexDirection={'column'} p='8px' shadow={'md'}>
           <Flex flexDirection='row' color='brand.accent'>
                <Text fontSize='20px'>Where to find books</Text>
                <Spacer />
                <Text fontSize='15px'>3 days ago</Text>
           </Flex>
           <Text color='brand.accent'>I need to know where to get a book about this</Text>
           <Flex flexDirection='row'>
                <Text color='brand.accent' fontSize='13px'>2075320@student.uma.pt</Text>
                <Spacer />
                <Image src={arrowIcon} boxSize='20px'></Image>
           </Flex>
        </Flex>
    );
}