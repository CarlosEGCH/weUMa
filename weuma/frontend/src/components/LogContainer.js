import * as React from 'react';
import { Image, Box, Grid, GridItem, Text, Center, Button } from "@chakra-ui/react";


export default function LogButtonContainer(props){
    
    if(props.isLogged){
        return(
        <Center h='100%'>
            <Button bg='brand.accent' _hover={{ bg: 'brand.extra' }} color='white'>Log Out</Button>
        </Center>
    );
    }else{
        return(
        <Center h='100%'>
            <Button bg='brand.accent' _hover={{ bg: 'brand.extra' }} color='white' mr='10px'>Log In</Button>
            <Button bg='brand.accent' _hover={{ bg: 'brand.extra' }} color='white'>Sign Up</Button>
        </Center>
    );
    }
}