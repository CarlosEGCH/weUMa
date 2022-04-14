import { Flex, Spacer, Button, Image, Text, Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, propNames } from '@chakra-ui/react';
import * as React from 'react';

import Message from './ChatMessage';

export default function ChatDisplay({chat, username, userId, room, socket, role, handleDelete, handleEdit}){

    return(
        <Flex flexDirection='column' height='100%' bg='#FFEEF1' p='10px' overflow='auto' gap='20px' shadow={'inner'}>
            {chat.filter(message => message.room === room).map((message, index) =>{
                if(message.author === userId){
                    return(
                        <Message isImage={message.isImage} handleEdit={handleEdit} handleDelete={handleDelete} role={role} key={index} msgId={message._id} message={message.message}/>
                    )
                }else{
                    return(
                        <Message isImage={message.isImage} handleDelete={handleDelete} role={role} key={index} msgId={message._id} received userImage={require(`../../../server/src/public/${message.image}`)} message={message.message}/>
                    )
                }
            })}
        </Flex>
    );
}