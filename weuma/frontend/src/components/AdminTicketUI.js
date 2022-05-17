import { Button, Grid, GridItem, Text, Link, Box, Flex, Image, Spacer, Input, InputGroup, InputRightElement, } from '@chakra-ui/react';
import * as React from 'react';

import shortcutIcon from '../assets/chat-shortcut-icon.svg'
import emoteIcon from '../assets/chat-emote-icon.svg'
import crossIcon from '../assets/cross-icon.svg'
import {useParams} from 'react-router-dom';
import Picker from 'emoji-picker-react';

export default function AdminTicketUI(props){

    const socket = props.socket;

    const [adminId, setAdminId] = React.useState(useParams().id);
    const [response, setResponse] = React.useState('');
    const [emojiToggle, setEmojiToggle] = React.useState(true)


    const handleChange = (e) => {
        setResponse(e.target.value);
    }

    const onEmojiClick = (event, emojiObject) => {
        setResponse(response + emojiObject.emoji);
        console.log('response', response)

    };


    return(
        <Flex shadow={'lg'} my='18px' bg='brand.secondary' flexDirection={'column'} p='10px'>
           <Flex flexDirection='row' color='brand.accent'>
                <Text fontSize='20px'>{props.ticket.title}</Text>
                <Spacer />
                <Text pr='10px' fontSize='15px'>{props.ticket.createdAt}</Text>
                <Link onClick={() => {props.handleUnstage(props.ticket);}}><Image src={crossIcon}></Image></Link>
           </Flex>
           <Text color='brand.accent' p='8px'>
                {props.ticket.message}
           </Text>
           <Flex flexDirection='row' py='5px'>
                <Text color='brand.accent' fontSize='13px'>{props.ticket.email}</Text>
           </Flex>
            <Flex flexDirection={'row'}>
                <InputGroup border='black'>
                        <Input value={response} onChange={handleChange} bg='white' _hover={{border: '1px solid black'}} _placeholder={{color: 'brand.accent'}} color='brand.accent' focusBorderColor='brand.accent' ml='20px' p={['20px 105px 20px 20px','20px 160px 20px 20px','20px 160px 20px 20px']} placeholder='Write a message...' />
                        <InputRightElement 
                            mr='25px'
                            children={
                                <Flex flexDirection='row'>
                                    <Image mr='5px' src={shortcutIcon} />
                                    <Image onClick={() => {setEmojiToggle(!emojiToggle)}} cursor={'pointer'} mr='5px' src={emoteIcon} />
                                    <Box position='absolute' top={'42px'} display={emojiToggle ? "none" : "initial"}><Picker onEmojiClick={onEmojiClick}></Picker></Box>
                                </Flex>
                            }
                        />
            </InputGroup>
            <Button onClick={async () => {props.handleAnswerSubmit(props.ticket.id, props.ticket.email, response, adminId); props.handleUnstage(props.ticket); await socket.emit('send_ticket');}} _hover={{bg: 'brand.extra'}} ml='15px' bg='brand.accent' color='white'>Submit</Button>
            </Flex>
        </Flex>
    );
}