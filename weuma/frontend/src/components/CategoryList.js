import * as React from 'react';

import { Text, Center, Grid, GridItem, Link, Flex, Image } from '@chakra-ui/react';

import { useViewport } from '../hooks/Responsive';

import { useNavigate } from 'react-router-dom';

import RightSideBar from './RightBar';

import admissionIcon from '../assets/admission-button.svg';
import documentsIcon from '../assets/documents-button.svg';
import resourcesIcon from '../assets/resources-button.svg';
import educationIcon from '../assets/education-button.svg';
import guideIcon from '../assets/guide-button.svg';
import lostIcon from '../assets/lost-button.svg';
import ticketIcon from '../assets/ticket-button.svg';
import paymentsIcon from '../assets/payments-button.svg';
import shopIcon from '../assets/shop-button.svg';
import transportIcon from '../assets/transport-button.svg';


export default function Categories(){

    const navigate = useNavigate();

    const { width } = useViewport();

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 }>
                <Center marginTop='100px'>
                    <Flex flexDirection='column'>
                            <Text color='brand.accent' fontSize='40px' textAlign={'center'}>How can we help you?</Text>
                            <Text color='brand.accent' fontSize='20px' textAlign={'center'}>Choose a Category for your Question</Text>
                    </Flex>
                </Center>
                <Grid templateColumns={['1fr 1fr','1fr 1fr','repeat(5, 1fr)']} templateRows={['repeat(5, 1fr)','repeat(5, 1fr)','1fr 1fr']} gap={'50px'} pt='40px' pl={['15px', '60px', '0px']}>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/admission')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={admissionIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Admission</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/education')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={educationIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Education</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/resources')}}>
                            <Flex flexDir={'column'}>
                                <Image boxSize='150px' src={resourcesIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Resources</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/guide')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={guideIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Guide</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/payments')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={paymentsIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Payments</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/lostandfound')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={lostIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Lost & Found</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/documents')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={documentsIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Documents</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/tickets')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={ticketIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Tickets</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/transport')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={transportIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Transport</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/shop')}}>
                            <Flex flexDirection={'column'}>
                                <Image boxSize='150px' src={shopIcon} />
                                <Text textAlign={'center'} fontSize={'25px'} color='brand.accent'>Shop</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    )
}