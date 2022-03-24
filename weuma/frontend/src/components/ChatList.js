import { Flex, Spacer, Image, Text, Box } from '@chakra-ui/react';
import * as React from 'react';

import friendUser from '../assets/elon.jpg';

export default function ChatDisplay(){

    return(
        <Flex flexDirection='column' height='100%' bg='green' p='10px' overflow='auto' gap='20px'>
            <Flex flexDirection='row' maxW='1000px'>
                <Image src={friendUser} boxSize='50px' borderRadius='full' />
                <Box bg='red' mx='20px' p='5px' borderRadius='10px'>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio quia, facilis culpa amet temporibus ea nihil maxime dolor harum eveniet qui nostrum facere esse, dolorem unde beatae tempora tenetur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio quia, facilis culpa amet temporibus ea nihil maxime dolor harum eveniet qui nostrum facere esse, dolorem unde beatae tempora tenetur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio quia, facilis culpa amet temporibus ea nihil maxime dolor harum eveniet qui nostrum facere esse, dolorem unde beatae tempora tenetur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio quia, facilis culpa amet temporibus ea nihil maxime dolor harum eveniet qui nostrum facere esse, dolorem unde beatae tempora tenetur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio quia, facilis culpa amet temporibus ea nihil maxime dolor harum eveniet qui nostrum facere esse, dolorem unde beatae tempora tenetur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio quia, facilis culpa amet temporibus ea nihil maxime dolor harum eveniet qui nostrum facere esse, dolorem unde beatae tempora tenetur?
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}