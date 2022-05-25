import { Center, Grid, GridItem, Text, Link, Box, Flex, Image } from '@chakra-ui/react';
import * as React from 'react';

import AdminsList from './Administrators';

import moodleImage from '../assets/moodle.png';
import infoalunosImage from '../assets/infoalunos.png';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

export default function RightSideBar(){

    const [admins, setAdmins] = React.useState([]);

        
    React.useEffect(() => {

        socket.emit("get_online_admins");

        socket.on("admin_registered", () => {
            socket.emit("get_online_admins");
        })

        socket.on("online_admins", (data) => {
            setAdmins(data);
        })


    }, [socket]);

    return(
        <Flex flexDirection={'column'} h='800px'>
            <Box h='100%' pt='70px' borderBottom='1px solid black'>
                <Center borderBottom='1px solid black'>
                    <Text fontSize='20px' color='brand.accent' >Online Admins:</Text>
                </Center>
                <AdminsList admins={admins}></AdminsList>
            </Box>
            <GridItem>
                <Center>
                    <Text fontSize='20px' color='brand.accent' >Shortcuts</Text>
                </Center>
                <Box h='50px'>
                    <Link href='https://infoalunos.uma.pt'>
                        <Flex flexDirection='row'>
                            <Image src={infoalunosImage} borderRadius='full' boxSize='60px'></Image>
                            <Text color='brand.accent' fontSize='20px' p='15px 0px 0px 15px'>Infoalunos</Text>
                        </Flex>
                    </Link>
                </Box>
                <Box h='50px'>
                    <Link href='https://moodle.cee.uma.pt/2122'>
                        <Flex flexDirection='row'>
                            <Image src={moodleImage} borderRadius='full' boxSize='60px'></Image>
                            <Text color='brand.accent' fontSize='20px' p='15px 0px 0px 15px'>Moodle</Text>
                        </Flex>
                    </Link>
                </Box>
            </GridItem>
        </Flex>
    );
}