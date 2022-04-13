import * as React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
  Select,
  Textarea,
  Center
} from '@chakra-ui/react'

export default function ShortcutForm(props){
    return(
<FormControl bg='brand.secondary' p='20px' width='100%' shadow={'lg'}>
    <Text color='brand.accent' fontSize='25px' borderBottom='2px solid black' mb='20px'>Write a New Answer</Text>

  <FormLabel htmlFor='category' color='black' mt='20px'>Select a Category</FormLabel>
  <Select onChange={props.handleChange} name='category' bg='white' id='category' placeholder='Select country' color='gray'>
    <option>Admission</option>
    <option>Education</option>
    <option>Resources</option>
    <option>Documents</option>
    <option>Guide</option>
    <option>Payments</option>
    <option>Lost & Found</option>
    <option>Support Tickets</option>
    <option>Transport</option>
    <option>Shop & Merch</option>
  </Select>

  <FormLabel htmlFor='email' color='black' mt='20px'>Write your Message</FormLabel>
  <Textarea onChange={props.handleChange} name='message' resize='none' id='message' color='brand.accent' bg='white' placeholder="I'd like to buy a book about..." _placeholder={{color: 'gray'}} />
  <Center h='40px' mt='20px' w='100%'>
      <Button onClick={props.handleSubmit} w='100%' bg='brand.accent' _hover={{bg: 'brand.extra'}}>Submit Ticket</Button>
  </Center>
</FormControl>
    );
}