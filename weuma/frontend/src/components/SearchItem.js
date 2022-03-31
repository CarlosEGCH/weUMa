import * as React from 'react';

import { Text, Center, Grid, GridItem, Box, Image, Flex } from '@chakra-ui/react';

import userImage from '../assets/elon.jpg';

export default function SearchItem(props){

    const {image, name} = props.user;

    return(
        <Flex flexDirection='row' p='10px'>
            <Image src={image != '' ? require(`../../../server/src/public/${image}`) : userImage} boxSize='60px' borderRadius='full'></Image>
            <Flex ml='20px' flexDirection='column'>
                <Text color='brand.accent' fontSize='20px'>{name != '' ? name : 'Username'}</Text>
                <Text color='brand.accent' fontSize='15px'>Software engineering, CEO of too many companies. Love dogs.</Text>
            </Flex>
        </Flex>
    );
}