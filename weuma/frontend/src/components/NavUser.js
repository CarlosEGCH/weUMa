import { Image, Box, Grid, GridItem, Text, Center, Link, Badge, Tooltip } from "@chakra-ui/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import profileIcon from '../assets/user-icon.svg';
import storageIcon from '../assets/storage-icon.svg';
import inboxIcon from '../assets/inbox-icon.svg';

export default function NavUserDisplay(props){

    const socket = props.socket;

    const navigate = useNavigate();

    const renders = React.useRef(0);

    const [amtTickets, setAmtTickets] = React.useState(0);

    const getAmountOfTickets = async () => {
        try {
            await fetch(`http://localhost:8080/api/tickets-amount`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: props.userId
                })
            })
            .then(res => res.json())
            .then(data => {
                setAmtTickets(data.amount);
                renders.current = renders.current + 1;
            })
        } catch (e) {
            console.log(e);
        }
    }

    React.useEffect(() => {
        socket.on("receive_ticket", () =>{
            getAmountOfTickets();
        })

        if(renders.current < 3){
            if(props.userId != undefined && props.userId != null && props.userId != ""){
                getAmountOfTickets();
            }
        }
    })

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
                        <Tooltip label={'My Profile'} bg='brand.accent' color={'brand.primary'}>
                            <Link onClick={() => {navigate(`/profile/${props.userId}`);}} w='40px'>
                                <Image boxSize='40px' src={profileIcon}></Image>
                            </Link>
                        </Tooltip>
                        <Tooltip label={'Unsolved Tickets'} bg='brand.accent' color={'brand.primary'}>
                            <Link display={'flex'} flexDir={'row'} onClick={() => {navigate(`/admin/tickets/${props.userId}`)}} w='40px'>
                                <Image boxSize='40px' src={storageIcon}></Image>
                                <Badge height={'50%'} colorScheme={'red'} variant={'solid'}>{amtTickets}</Badge>
                            </Link>
                        </Tooltip>
                        <Tooltip label={'My Shortcuts'} bg='brand.accent' color={'brand.primary'}>
                            <Link onClick={() => {navigate(`/admin/shortcuts/${props.userId}`)}} w='40px'>
                                <Image boxSize='40px' src={inboxIcon}></Image>
                            </Link>
                        </Tooltip>
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