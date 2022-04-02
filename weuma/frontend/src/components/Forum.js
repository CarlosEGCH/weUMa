import { Button, GridItem, Grid, Box, Text, Link, Input, InputGroup, InputRightElement, InputLeftElement, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import RightSideBar from './RightBar.js';
import ChatDisplay from './ChatList.js';

import { useViewport } from '../hooks/Responsive.js';

import forumImage from '../assets/forumBg.png';
import userImage from '../assets/user.jpg';
import shortcutIcon from '../assets/chat-shortcut-icon.svg'
import emoteIcon from '../assets/chat-emote-icon.svg'
import imageIcon from '../assets/chat-image-icon.svg'
import admissionIcon from '../assets/admission-button.svg';
import documentsIcon from '../assets/documents-button.svg';
import resourcesIcon from '../assets/resources-button.svg';
import educationIcon from '../assets/education-button.svg';
import guideIcon from '../assets/guide-button.svg';
import lostIcon from '../assets/lost-button.svg';
import ticketIcon from '../assets/ticket-button.svg';
import paymentsIcon from '../assets/payments-button.svg';
import shopIcon from '../assets/shop-button.svg';
import transportIcon from '../assets/transport-button.svg';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

export default function ForumPage(props){

    const [ message, setMessage ] = React.useState('');
    const [ chat, setChat ] = React.useState([]);

    const { width } = useViewport();
    const [currentRoom, setCurrentRoom] = React.useState('admission')

    const joinRoom = (roomName) => {
        socket.emit('join_room', { room: roomName });
    }

    const sendMessage = async () => {

        const messageData = {
                room: currentRoom,
                author: props.userId,
                image: props.userImage,
                message: message,
                time: new Date(Date.now()).getHours() +
                 ":" +
                 new Date(Date.now()).getMinutes()
            }
        
        if(message !== ""){
            await socket.emit("send_message", messageData);
            setChat(chat => [...chat, messageData]);
            setMessage('');
            
            await fetch('http://localhost:8080/api/save-message', {
                method: 'POST',
                body: JSON.stringify({
                    room: currentRoom,
                    message: message,
                    author: props.userId,
                    image: props.userImage 
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }else{
            console.log('No message');
        }
        
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    useEffect(async () => {

        await fetch('http://localhost:8080/api/get-messages', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(res => res.json())
        .then(data => {
            console.log(data.messages)
            setChat(data.messages);
        })

        socket.on("receive_message", (data) => {
            setChat(chat => [...chat, data]);
            console.log("UseEffect: ", data);
        })

    }, [socket])


    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)' backgroundImage={forumImage} backgroundRepeat='no-repeat' backgroundPosition={['center center', '40px 80px', '100px 140px']}>
            <GridItem h='100%'>
                <Box position='absolute' top={['20px', '20px', '70px']} left={['35vw', '40vw', '30px']}>
                    <Text fontSize={['5vw', '35px', '40px']} color='brand.accent'>Live Forum</Text>
                </Box>
                <Flex flexDirection={'column'} h='100%' pt='250px' pl='20px' gap={5} display={ width > 900 ? 'flex' : 'none'}>
                    <Text color='brand.accent' fontSize={'30px'}>Topics</Text>
                    <Link onClick={() => { setCurrentRoom('admission');joinRoom('admission');}}><Flex><Image boxSize={'40px'} src={admissionIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Admission</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('education'); setCurrentRoom('education')}}><Flex><Image boxSize={'40px'} src={educationIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Education</Text></Flex></Link>
                    <Flex><Image boxSize={'40px'} src={resourcesIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Resources</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={documentsIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Documents</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={guideIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Guide</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={paymentsIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Payments</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={lostIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Lost & Found</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={ticketIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Support Tickets</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={transportIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Transport</Text></Flex>
                    <Flex><Image boxSize={'40px'} src={shopIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Shop & Merch</Text></Flex>
                </Flex>
            </GridItem>
            <GridItem mt='20px' colSpan={width > 900 ? 4 : 6} padding={ width > 900 ? '80px 20px 0px 20px' : '0px 0px 0px 0px'}>
                <Box>
                    <Text color='brand.accent' fontSize='30px' textAlign='center'>Admission</Text>
                </Box>
                <Box bg='pink' h={['75vh', '700px', '700px']} mb='30px' borderBottom='2px solid black'>
                    <ChatDisplay userId={props.userId} chat={chat} socket={socket} room={currentRoom} username={props.username} />
                </Box>
                <Flex flexDirection='row' px={['5px', '40px', '40px']}>
                    <Image borderRadius='full' boxSize='40px' src={userImage} />
                    <InputGroup border='black'>
                        <Input onChange={handleChange} value={message} _hover={{border: '1px solid black'}} _placeholder={{color: 'brand.accent'}} color='brand.accent' focusBorderColor='brand.accent' ml='20px' p={['20px 105px 20px 20px','20px 160px 20px 20px','20px 160px 20px 20px']} placeholder='Write a message...' />
                        <InputRightElement 
                            mr='55px'
                            children={
                                <Flex flexDirection='row'>
                                    <Image mr='5px' src={shortcutIcon} />
                                    <Image mr='5px' src={emoteIcon} />
                                    <Image mr='5px' src={imageIcon} />
                                </Flex>
                            }
                        />
                    </InputGroup>
                    <Button onClick={sendMessage} _hover={{bg: 'brand.extra'}} ml='15px' bg='brand.accent' color='white'>Send</Button>
                </Flex>
            </GridItem>
            <GridItem display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}