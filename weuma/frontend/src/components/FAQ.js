import {
  Text, 
  Center, 
  Grid, 
  GridItem, 
  Box,
  Button,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react';
import * as React from 'react';

import UserDeleteModal from './UserDeleteModal.js';
import RightSideBar from './RightBar.js';

import { useViewport } from '../hooks/Responsive.js';
import { useParams } from 'react-router-dom';

import faqImage from '../assets/faqBg.png';

export default function FaqPage(){

    const { width } = useViewport();

    const category = useParams().category;

    const [faq, setFaq] = React.useState([]);
    const [faqChange, setFaqChange] = React.useState(true);

    const fetchFAQ = async () => {
        try {
            await fetch('http://localhost:8080/api/get-faq',{
            method: 'POST',
            body: JSON.stringify({
                category: category
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            setFaq(data.faq);
        })
        .catch((e) => {console.log("Something went wrong ", e);})
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        setFaqChange(true);

        setFaq(faq.filter(faq => faq.id !== id));
        await fetch('http://localhost:8080/api/delete-faq',{
            method: 'POST',
            body: JSON.stringify({
                id: id
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((e) => {console.log('Something went wrong ' + e)});
    }

    React.useEffect(() => {
        if(faqChange){
            fetchFAQ();
            setFaqChange(false);
        }
    }, [faq])

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)' backgroundImage={faqImage} backgroundRepeat='no-repeat' backgroundPosition={['center center', '40px 80px', '100px 100px']}>
            <Box position='absolute' top={['20px', '70px', '70px']} left={['18%', '20px', '30px']}>
                <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>Frequently Asked Questions</Text>
            </Box>
            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 }>
                <Center marginTop={['100px','300px','300px']}>
                    <Accordion defaultIndex={[0]} allowMultiple width='100%' color='brand.accent'>
        {
          faq.map((ticket, index) => {
          return (
            <Flex key={index} flexFlow={"row"} >
              <AccordionItem width="100%">
              <h2>
                <AccordionButton _hover={{bg: 'brand.extra'}} bg='brand.secondary' _expanded={{bg: 'brand.extra'}} >
                  <Box flex='1' textAlign='left' fontSize='20px'>{ticket.title}</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor='rgba(255, 255, 255, 0.6)'>{ticket.response}
              </AccordionPanel>
            </AccordionItem>

            {/*------------ Delete Modal ------------*/}

            <Box><UserDeleteModal faqId={ticket._id} handleDelete={handleDelete} /></Box>

            </Flex>)})
        }
        </Accordion>
                </Center>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}