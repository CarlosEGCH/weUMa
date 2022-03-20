import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import * as React from "react";

import { useNavigate, Link } from "react-router-dom";

import logo from '../assets/weumaLogo.png';

export default function ButtonAppBar(){
const navigate = useNavigate();

return (
    <Box bg="brand.primary" h="60px">
        <Grid templateColumns='repeat(12, 1fr)' gap={2} h='100%'>
            <GridItem w='100%' h='100%' bg='red.500' colSpan={1}>
                <Box h='100%'>
                    <Image boxSize='60px' marginLeft='20px' src={logo} alt='weuma logo' />
                </Box>
            </GridItem>
            <GridItem w='100%' h='100%' bg='blue.500' colSpan={7} />
            <GridItem w='100%' h='100%' bg='blue.500' colSpan={2} />
            <GridItem w='100%' h='100%' bg='blue.500' colSpan={2} />
        </Grid>
    </Box>
);

}