import * as React from 'react';

import { Text, Center, Grid, GridItem, Box, Flex, Image } from '@chakra-ui/react';
import RightSideBar from './RightBar.js';

import { useViewport } from '../hooks/Responsive.js';

import elonImage from '../assets/elon.jpg';

import QList from './FAQList.js';

export default function UserProfile(){

    const { width } = useViewport();

    return(<Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <Box position='absolute' top={['20px', '70px', '70px']} left={['18%', '20px', '30px']}>
                <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>Profile</Text>
            </Box>
            <GridItem h='100%' p='150px 40px 0px 40px' colStart='1' colEnd={ width > 900 ? 5 : 7 }>
                <Flex flexDirection='column'>
                    <Flex flexDirection={width > 900 ? 'row' : 'column'}>
                    <Image src={elonImage} boxSize='300px' borderRadius={'10px'} />
                    <Flex flexDirection='column' pl='40px'>
                        <Text color='brand.accent' fontSize={'60px'}>Elon Musk</Text>
                        <Text color='brand.accent' fontSize='20px'>
                            Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American 
                            entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, 
                            maker of launch vehicles and spacecraft.
                        </Text>
                        <Text color='brand.accent' fontSize='20px' mt='40px'>
                            Email: elonmusk@elon.msk
                        </Text>
                    </Flex>
                </Flex>
                <Flex mt='20px' mb='100px' w='100%' flexDirection='column'>
                    <Text color='black' fontSize={'25px'} mb='10px' w='100%' borderBottom={'2px solid black'}>Solved Questions</Text>
                    <QList />
                </Flex>
                </Flex>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>);
}