import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import * as React from 'react';

export default function QuestionsList(){

    return(
        <Accordion defaultIndex={[0]} allowMultiple width='100%' color='brand.accent'>
  <AccordionItem>
    <h2>
      <AccordionButton _hover={{bg: 'brand.extra'}} bg='brand.secondary' _expanded={{bg: 'brand.extra'}} >
        <Box flex='1' textAlign='left' fontSize='20px'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor='rgba(255, 255, 255, 0.6)'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _hover={{bg: 'brand.extra'}} bg='brand.secondary' _expanded={{bg: 'brand.extra'}}>
        <Box flex='1' textAlign='left' fontSize='20px'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor='rgba(255, 255, 255, 0.6)'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
    );

}