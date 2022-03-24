import * as React from 'react';

import { Text, Image, Flex, Grid, GridItem, Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import SearchItem from './SearchItem';

import SearchIcon from '../assets/search-icon.svg';

export default function PeopleSearch(){

    return(
    <Box width='100%'>
            <InputGroup width='100%'  bg='brand.extra'>
                <Input _hover={{border: '1px solid black'}} _placeholder={{color: 'brand.accent'}} color='brand.accent' focusBorderColor='brand.accent' placeholder='Search People...' />
                <InputRightElement border='black'>
                    <Image boxSize='30px' src={SearchIcon} />
                </InputRightElement>
            </InputGroup>
        <Box w='100%' bg='#FFEEF1'>
            <Flex flexDirection='column'>
                <SearchItem></SearchItem>
            </Flex>
        </Box>
    </Box>
    );
}