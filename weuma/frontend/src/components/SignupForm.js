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
  Checkbox,
  Flex
} from '@chakra-ui/react'

export default function SignupForm(){

    return(
<FormControl bg='brand.secondary' p='20px' width='100%' height='760px'>
    <Text color='brand.accent' fontSize='35px' borderBottom='2px solid black' mb='20px'>SignUp</Text>
  <FormLabel mt='10px' htmlFor='name' color='brand.accent'>Full Name</FormLabel>
  <Input bg='white' color='brand.accent' id='name' type='text' width='100%' placeholder='John Doe' _placeholder={{color: 'gray'}}/>
  <FormHelperText color='gray'>This will be shown in your profile</FormHelperText>

  <FormLabel mt='10px' htmlFor='studentId' color='brand.accent'>Student ID Number</FormLabel>
  <Input bg='white' color='brand.accent' id='studentId' type='text' width='100%' placeholder='1110000' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='email' color='brand.accent'>Email</FormLabel>
  <Input bg='white' color='brand.accent' id='email' type='email' width='100%' placeholder='1110000@student.uma.pt' _placeholder={{color: 'gray'}}/>
  <FormHelperText color='gray'>We'll never share your email with anyone else</FormHelperText>

  <FormLabel mt='10px' htmlFor='phone' color='brand.accent'>Phone Number</FormLabel>
  <Input bg='white' color='brand.accent' id='phone' type='phone' width='100%' placeholder='Your phone number...' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='password' color='brand.accent'>Password</FormLabel>
  <Input bg='white' color='brand.accent' id='password' type='password' width='100%' placeholder='Type your password...' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='rpassword' color='brand.accent'>Repeat Your Password</FormLabel>
  <Input bg='white' color='brand.accent' id='rpassword' type='password' width='100%' placeholder='Do it again...' _placeholder={{color: 'gray'}}/>

<Center h='40px' mt='20px' w='100%'>
      <Flex w='100%' flexDir={'column'}>
          <Button w='100%' mt='50px' bg='brand.accent' _hover={{bg: 'brand.extra'}}>Submit Ticket</Button>
          <Checkbox border='black' colorScheme={'red'} color='brand.accent'>I accept the terms and conditions of use of my information</Checkbox>
        
      </Flex>
  </Center>
</FormControl>
    );
}