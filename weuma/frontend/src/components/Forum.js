import { Button, GridItem, Grid, Box, Text, Input, InputGroup, InputRightElement, InputLeftElement, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';

import RightSideBar from './RightBar.js';
import ChatDisplay from './ChatList.js';

import { useViewport } from '../hooks/Responsive.js';

import forumImage from '../assets/forumBg.png';
import userImage from '../assets/user.jpg';
import shortcutIcon from '../assets/chat-shortcut-icon.svg'
import emoteIcon from '../assets/chat-emote-icon.svg'
import imageIcon from '../assets/chat-image-icon.svg'

export default function ForumPage(){

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)' backgroundImage={forumImage} backgroundRepeat='no-repeat' backgroundPosition={['center center', '40px 80px', '100px 140px']}>
            <GridItem h='100%'>
                <Box position='absolute' top={['20px', '70px', '70px']} left={['18%', '20px', '30px']}>
                <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>Live Forum</Text>
            </Box>
            </GridItem>
            <GridItem colSpan={4} paddingTop='80px' paddingX='40px'>
                <Box>
                    <Text color='brand.accent' fontSize='30px'>Admission</Text>
                </Box>
                <Box bg='pink' h='700px' mb='30px' borderBottom='2px solid black'>
                    <ChatDisplay />
                </Box>
                <Flex flexDirection='row' px='40px'>
                    <Image borderRadius='full' boxSize='40px' src={userImage} />
                    <InputGroup border='black'>
                        <Input _hover={{border: '1px solid black'}} _placeholder={{color: 'brand.accent'}} color='brand.accent' focusBorderColor='brand.accent' ml='20px' p='20px 160px 20px 20px' placeholder='Write a message...' />
                        <InputRightElement 
                            mr='55px'
                            children={
                                <Flex flexDirection='row'>
                                    <Image mr='5px' src={shortcutIcon} />
                                    <Image mr='5px' src={emoteIcon} />
                                    <Image mr='5px' src={imageIcon} />
                                </Flex>
                            }
                        />
                    </InputGroup>
                    <Button _hover={{bg: 'brand.extra'}} ml='15px' bg='brand.accent' color='white'>Send</Button>
                </Flex>
            </GridItem>
            <GridItem display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}