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
                            <Image boxSize='150px' src={admissionIcon} />
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/education')}}>
                            <Image boxSize='150px' src={educationIcon} />
                        </Link>
                    </GridItem>
                    <GridItem pt='20px'>
                        <Link onClick={() => {navigate('/faq/resources')}}>
                            <Image boxSize='150px' src={resourcesIcon} />
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/guide')}}>
                            <Image boxSize='150px' src={guideIcon} />
                        </Link>
                    </GridItem>
                    <GridItem pt='30px'>
                        <Link onClick={() => {navigate('/faq/payments')}}>
                            <Image boxSize='150px' src={paymentsIcon} />
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link onClick={() => {navigate('/faq/lostandfound')}}>
                            <Image boxSize='150px' src={lostIcon} />
                        </Link>
                    </GridItem>
                    <GridItem pt='15px'>
                        <Link onClick={() => {navigate('/faq/documents')}}>
                            <Image boxSize='150px' src={documentsIcon} />
                        </Link>
                    </GridItem>
                    <GridItem pt='15px'>
                        <Link onClick={() => {navigate('/faq/tickets')}}>
                            <Image boxSize='150px' src={ticketIcon} />
                        </Link>
                    </GridItem>
                    <GridItem pt='40px'>
                        <Link onClick={() => {navigate('/faq/transport')}}>
                            <Image boxSize='150px' src={transportIcon} />
                        </Link>
                    </GridItem>
                    <GridItem pt='20px'>
                        <Link onClick={() => {navigate('/faq/shop')}}>
                            <Image boxSize='150px' src={shopIcon} />
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