import { Flex, Spacer, Button, Image, Text, Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import * as React from 'react';

import Message from './ChatMessage';

export default function ChatDisplay({chat, username, userId, room, socket}){

    return(
        <Flex flexDirection='column' height='100%' bg='#FFEEF1' p='10px' overflow='auto' gap='20px' shadow={'inner'}>
            {chat.filter(message => message.room === room).map((message, index) =>{
                if(message.author === userId){
                    return(
                        <Message key={index} message={message.message}/>
                    )
                }else{
                    return(
                        <Message key={index} received userImage={require(`../../../server/src/public/${message.image}`)} message={message.message}/>
                    )
                }
            })}
        </Flex>
    );
}