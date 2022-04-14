import * as React from 'react';

import axios from 'axios';

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
  Flex,
  propNames,
  useQuery
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';


export default function SignupForm(props){

  const navigate = useNavigate();

  const [image, setImage] = React.useState({ data: '' })
  const [user, setUser] = React.useState({
        name: "",
        studentId: "",
        email: "",
        phone: "",
        password: "",
        rpassword: "",
        accept: "false",
        image: "basic"
    })
    const toast = useToast();

    const handleFileChange = (e) => {
    const img = {
      data: e.target.files[0],
    }
    setImage(img)
  }

    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('file', image.data);

      if(user.name === "" || user.studentId === "" || user.email === "" || user.phone === "" || user.password === "" || user.rpassword === ""){
        toast({
          title: "Missing Fields",
          description: "Please fill all the fields",
          position: "bottom-left",
          status: "warning",
          duration: 9000,
          isClosable: true
        })
        return
      }

      if(user.email !== "" && !user.email.includes("@")){
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email",
          position: "bottom-left",
          status: "warning",
          duration: 9000,
          isClosable: true
        })
        return
      }

      if(user.password !== user.rpassword){
        toast({
          title: 'Password Warning',
          description: "Passwords must be equal",
          position: 'bottom-left',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
        return
      }

      if(user.accept !== "true"){
        toast({
          title: 'Accept Warning',
          description: "You must accept the terms and conditions",
          position: 'bottom-left',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
        return
      }

      if(image.data === ""){
        toast({
          title: 'Image Warning',
          description: "You must select an image",
          position: 'bottom-left',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
        return
      }

      await fetch('http://localhost:8080/api/upload', {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(async (data) => {
        await fetch(`http://localhost:8080/api/signup`, {
        method: 'POST',
        body: JSON.stringify({
          name: user.name,
          studentId: user.studentId,
          phone: user.phone,
          email: user.email,
          password: user.password,
          image: data.filename
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        props.cookies.set('Bearer', data.token);
        setUser({});
      })
      .then(() => {props.onRegister(); navigate('/faq');})
      .catch((e) => {
        console.log('Something went wrong',e);
      })
      })
      .catch((e)=> {console.log('Image not uploaded', e)})

      

      
    }

    const toggleCheck = (event) => {
      setUser((prevState) => {
        return ({
          ...prevState,
          accept: (event.target.value == "true" ? "false" : "true")
        }
        )
      })
    }

    const handleChange = (event) => {
      setUser((prevState) => {
        return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
      })
    }

    return(
<FormControl bg='brand.secondary' mt='40px' p='20px' width='100%' height='820px'>
    <Text color='brand.accent' fontSize='35px' borderBottom='2px solid black' mb='20px'>SignUp</Text>
  <FormLabel mt='10px' htmlFor='name' color='brand.accent'>Full Name</FormLabel>
  <Input value={user.name} onChange={handleChange} name='name' bg='white' color='brand.accent' id='name' type='text' width='100%' placeholder='John Doe' _placeholder={{color: 'gray'}}/>
  <FormHelperText color='gray'>This will be shown in your profile</FormHelperText>

  <FormLabel mt='10px' htmlFor='studentId' color='brand.accent'>Student ID Number</FormLabel>
  <Input value={user.studentId} onChange={handleChange} name='studentId' bg='white' color='brand.accent' id='studentId' type='text' width='100%' placeholder='1110000' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='email' color='brand.accent'>Email</FormLabel>
  <Input value={user.email} onChange={handleChange} name='email' bg='white' color='brand.accent' id='email' type='email' width='100%' placeholder='1110000@student.uma.pt' _placeholder={{color: 'gray'}}/>
  <FormHelperText color='gray'>We'll never share your email with anyone else</FormHelperText>

  <FormLabel mt='10px' htmlFor='phone' color='brand.accent'>Phone Number</FormLabel>
  <Input value={user.phone} onChange={handleChange} name='phone' bg='white' color='brand.accent' id='phone' type='phone' width='100%' placeholder='Your phone number...' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='password' color='brand.accent'>Password</FormLabel>
  <Input value={user.password} onChange={handleChange} name='password' bg='white' color='brand.accent' id='password' type='password' width='100%' placeholder='Type your password...' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='rpassword' color='brand.accent'>Repeat Your Password</FormLabel>
  <Input value={user.rpassword} onChange={handleChange} name='rpassword' bg='white' color='brand.accent' id='rpassword' type='password' width='100%' placeholder='Do it again...' _placeholder={{color: 'gray'}}/>

  <FormLabel mt='10px' htmlFor='rpassword' color='brand.accent'>Upload a Profile Picture</FormLabel>
  <Input onChange={handleFileChange} name='image' bg='white' color='brand.accent' id='image' type='file' width='100%' placeholder='Upload' _placeholder={{color: 'gray'}}/>

<Center h='40px' mt='20px' w='100%'>
      <Flex w='100%' flexDir={'column'}>
          <Button onClick={handleSubmit} w='100%' mt='50px' bg='brand.accent' _hover={{bg: 'brand.extra'}}>Submit Ticket</Button>
          <Checkbox value={user.accept} onChange={toggleCheck} name='accept' border='black' colorScheme={'red'} color='brand.accent'>I accept the terms and conditions of use of my information</Checkbox>
      </Flex>
  </Center>
</FormControl>
    );
}