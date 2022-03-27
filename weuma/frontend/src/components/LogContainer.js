import * as React from 'react';
import { Image, Box, Grid, GridItem, Text, Center, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";


export default function LogButtonContainer(props){

const navigate = useNavigate();

    if(props.logged){
        return(
        <Center h='100%'>
            <Button onClick={() => {props.cookies.remove('Bearer'); navigate(`/`); window.location.reload(false);}} bg='brand.accent' _hover={{ bg: 'brand.extra' }} color='white'>Log Out</Button>
        </Center>
    );
    }else{
        return(
        <Center h='100%'>
            <Button onClick={() => {navigate(`/login`)}} bg='brand.accent' _hover={{ bg: 'brand.extra' }} color='white' mr='10px'>Log In</Button>
            <Button onClick={() => {navigate(`/signup`)}} bg='brand.accent' _hover={{ bg: 'brand.extra' }} color='white'>Sign Up</Button>
        </Center>
    );
    }
}