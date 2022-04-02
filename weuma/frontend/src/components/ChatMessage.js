import * as React from 'react';

import { Flex, Box, Image, Text, Spacer } from '@chakra-ui/react';

export default function Message(props){

    if(props.received){
        return(
            <Flex flexDirection='row' maxW='1000px'>
                <Image src={props.userImage} boxSize='50px' borderRadius='full' />
                <Box bg='brand.secondary' mx='20px' p='5px' borderRadius='10px'>
                    <Text color='brand.accent'>
                        {props.message}
                    </Text>
                </Box>
            </Flex>
        )
    }else{
        return(
            <Flex justifyContent='end' flexDirection='row' w='100%'>
                <Box bg='brand.extra' mx='20px' p='5px' borderRadius='10px' maxW='1000px'>
                    <Text color='brand.accent'>
                        {props.message}
                    </Text>
                </Box>
            </Flex>
        )
    }
}