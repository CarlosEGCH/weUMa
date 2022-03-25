import { Flex, Spacer, Image, Text, Box } from '@chakra-ui/react';
import * as React from 'react';

import Message from './ChatMessage';

import friendUser from '../assets/elon.jpg';

export default function ChatDisplay(){

    return(
        <Flex flexDirection='column' height='100%' bg='#FFEEF1' p='10px' overflow='auto' gap='20px' shadow={'inner'}>
            <Message received userImage={friendUser} />
            <Message/>
            <Message/>
            <Message/>
        </Flex>
    );
}