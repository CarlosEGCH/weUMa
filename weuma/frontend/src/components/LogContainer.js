import * as React from 'react';
import { Image, Box, Grid, GridItem, Text, Center, Button } from "@chakra-ui/react";


export default function LogButtonContainer(){
    return(
        <Center h='100%'>
            <Button bg='brand.accent' _hover={{ bg: 'brand.extra' }}>Log Out</Button>
        </Center>
    );
}