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
  Center,
  propNames
} from '@chakra-ui/react'

export default function TicketForm(){
  
    const [ticket, setTicket] = React.useState({
      email: '',
      category: '',
      title: '',
      message: '',
      adminId: '',
      response: ''
    });

    const handleSubmit = async () => {
      try {

        await fetch(`http://localhost:8080/api/ticket-submit`, {
          method: 'POST',
          body: JSON.stringify(ticket),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data.message)
        })
        .catch((e) => {
          console.log('Fetching error: ', e);
        })

      } catch (error) {
        console.log(error);
      }
    }

    const handleChange = (e) => {
      setTicket({
        ...ticket,
        [e.target.name]: e.target.value
      });
    }

    return(
<FormControl bg='brand.secondary' p='20px' width='100%'>
    <Text color='brand.accent' fontSize='35px' borderBottom='2px solid black' mb='20px'>Ticket</Text>
  <FormLabel htmlFor='email' color='brand.accent'>Email address</FormLabel>
  <Input value={ticket.email} onChange={handleChange} name='email' bg='white' color='brand.accent' id='email' type='email' width='100%' placeholder='1110000@student.uma.pt' _placeholder={{color: 'gray'}}/>
  <FormHelperText color={'black'}>We'll never share your email with anyone else</FormHelperText>

  <FormLabel htmlFor='category' color='black' mt='20px'>Select a Category</FormLabel>
  <Select value={ticket.category} onChange={handleChange} name='category' bg='white' id='category' placeholder='Select category' color='gray'>
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

  <FormLabel htmlFor='email' color='black' mt='20px'>Write a Title</FormLabel>
  <Input value={ticket.title} onChange={handleChange} name='title' id='title' bg='white' color='brand.accent' type='text' width='100%' placeholder='Where to buy books' _placeholder={{color: 'gray'}}/>
  
  <FormLabel htmlFor='email' color='black' mt='20px'>Write your Message</FormLabel>
  <Textarea value={ticket.message} onChange={handleChange} name='message' resize='none' id='message' color='brand.accent' bg='white' placeholder="I'd like to buy a book about..." _placeholder={{color: 'gray'}} />
  <Center h='40px' mt='20px' w='100%'>
      <Button onClick={handleSubmit} w='100%' bg='brand.accent' _hover={{bg: 'brand.extra'}}>Submit Ticket</Button>
  </Center>
</FormControl>
    );
}