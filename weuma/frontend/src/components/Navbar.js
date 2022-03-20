import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import * as React from "react";

import { useNavigate, Link } from "react-router-dom";

import logo from '../assets/logo2SVG.svg';
import mainIcon from '../assets/main-icon.svg';

export default function ButtonAppBar(){
const navigate = useNavigate();

return (
    <Box bg="brand.primary" h="60px">
        <Grid templateColumns='repeat(12, 1fr)' gap={2} h='100%'>
            <GridItem w='100%' h='100%' colSpan={1}>
                <Box h='100%'>
                    <Image boxSize='60px' marginLeft='20px' src={logo} alt='weuma logo' />
                </Box>
            </GridItem>
            <GridItem w='100%' h='100%' bg='blue.500' colSpan={7}>
                <Grid templateColumns='repeat(4, 1fr)' gap={2} h='100%'>
                    <GridItem>
                        <Link to="/">
                            <Grid templateColumns='0.8fr 1fr' gap={2}>
                                <Image boxSize='60px' marginLeft='40px' src={mainIcon} />
                                <Text fontSize={['sm', 'md', 'lg']} marginTop='15px'>FAQ</Text>
                            </Grid>
                        </Link>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem w='100%' h='100%' bg='blue.500' colSpan={2} />
            <GridItem w='100%' h='100%' bg='blue.500' colSpan={2} />
        </Grid>
    </Box>
);

}