import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import * as React from "react";

import { useNavigate, Link } from "react-router-dom";

import logo from '../assets/logo2SVG.svg';
import mainIcon from '../assets/main-icon.svg';
import ticketIcon from '../assets/ticket-icon.svg';
import forumIcon from '../assets/forum-icon.svg';
import peopleIcon from '../assets/people-icon.svg';

import NavUser from './NavUser';
import LogContainer from './LogContainer'

export default function ButtonAppBar(props){
const navigate = useNavigate();

return (
    <Box bg="brand.primary" h="60px" position='absolute' w='100%'>
        <Grid templateColumns='repeat(12, 1fr)' gap={2} h='100%'>
            <GridItem w='100%' h='100%' colSpan={1}>
                <Box h='100%'>
                    <Link to='/'>
                        <Image boxSize='60px' marginLeft='10px' src={logo} alt='weuma logo' />
                    </Link>
                </Box>
            </GridItem>
            <GridItem w='100%' h='100%' colSpan={6}>
                <Grid templateColumns='repeat(5, 1fr)' gap={2} h='100%'>
                    <GridItem>
                        <Link to="/faq">
                            <Grid templateColumns='0.5fr 1fr'>
                                <Image boxSize='50px' marginTop='5px' src={mainIcon} />
                                <Text color='brand.accent' fontSize={['sm', 'md', 'lg']} marginTop='15px'>FAQ</Text>
                            </Grid>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/forum">
                            <Grid templateColumns='0.5fr 1fr'>
                                <Image boxSize='50px' marginTop='8px' src={forumIcon} />
                                <Text color='brand.accent' fontSize={['sm', 'md', 'lg']} marginTop='15px'>Forum</Text>
                            </Grid>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/people">
                            <Grid templateColumns='0.5fr 1fr'>
                                <Image boxSize='50px' marginTop='5px' src={peopleIcon} />
                                <Text color='brand.accent' fontSize={['sm', 'md', 'lg']} marginTop='15px'>People</Text>
                            </Grid>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/tickets">
                            <Grid templateColumns='0.5fr 1fr'>
                                <Image boxSize='50px' marginTop='5px' src={ticketIcon} />
                                <Text color='brand.accent' fontSize={['sm', 'md', 'lg']} marginTop='15px'>Tickets</Text>
                            </Grid>
                        </Link>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem w='100%' h='100%' colSpan={3}>
                <NavUser logged={props.logged} role={props.role}></NavUser>
            </GridItem>
            <GridItem w='100%' h='100%' colSpan={2}>
                <LogContainer logged={props.logged} cookies={props.cookies}></LogContainer>
            </GridItem>
        </Grid>
    </Box>
);

}