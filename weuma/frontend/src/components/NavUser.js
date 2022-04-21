import { Image, Box, Grid, GridItem, Text, Center, Link } from "@chakra-ui/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import userImage from '../assets/elon.jpg';

import profileIcon from '../assets/user-icon.svg';
import storageIcon from '../assets/storage-icon.svg';
import inboxIcon from '../assets/inbox-icon.svg';

export default function NavUserDisplay(props){
    const navigate = useNavigate();

    if(props.logged){
        if(props.role == 'admin'){
            return (
        <Box>
            <Grid templateColumns='repeat(6, 1fr)' h='60px'>
                <GridItem colSpan={1}>
                    <Center h='100%'>
                        <Image borderRadius='full' boxSize='50px' src={props.userImage != '' ? require(`../../../server/src/public/${props.userImage}`) : profileIcon}></Image>
                    </Center>
                </GridItem>
                <GridItem colSpan={2}>
                    <Center h='100%'><Text fontSize='20' color='brand.accent'>{props.username != '' ? props.username : 'Username'}</Text></Center>
                </GridItem>
                <GridItem colSpan={3}>
                    <Grid templateColumns='repeat(3, 1fr)' paddingTop='10px'>
                        <Link onClick={() => {navigate(`/profile/${props.userId}`);}} w='40px'><Image boxSize='40px' src={profileIcon}></Image></Link>
                        <Link onClick={() => {navigate(`/admin/tickets/${props.userId}`)}} w='40px'><Image boxSize='40px' src={storageIcon}></Image></Link>
                        <Link onClick={() => {navigate(`/admin/shortcuts/${props.userId}`)}} w='40px'><Image boxSize='40px' src={inboxIcon}></Image></Link>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>)

        }else if(props.role == 'user'){
            return (
        <Box>
            <Grid templateColumns='repeat(6, 1fr)' h='60px'>
                <GridItem colSpan={1}>
                    <Center h='100%'>
                        <Image borderRadius='full' boxSize='50px' src={props.userImage != '' ? require(`../../../server/src/public/${props.userImage}`) : profileIcon}></Image>
                    </Center>
                </GridItem>
                <GridItem colSpan={2}>
                    <Center h='100%'><Text fontSize='20' color='brand.accent'>{props.username != '' ? props.username : 'Username'}</Text></Center>
                </GridItem>
                <GridItem colSpan={3}>
                    <Grid templateColumns='repeat(3, 1fr)' paddingTop='10px'>
                        <Link onClick={() => {navigate(`/profile/${props.userId}`)}} w='40px'><Image boxSize='40px' src={profileIcon}></Image></Link>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>)
        }
    }else{
        return (
        <Box>

        </Box>)
    }
}