import { Center, Tag, Grid, GridItem, Text, Link, Box, Flex, Image, Spacer } from '@chakra-ui/react';
import * as React from 'react';

import arrowIcon from '../assets/arrow-icon.svg';

export default function TicketItem(props){

    return(
        <Flex my='16px' bg='brand.secondary' flexDirection={'column'} p='8px' shadow={'md'} gap={2}>
           <Flex flexDirection='row' color='brand.accent'>
                <Text width={'50%'} fontSize='15px'>{props.ticket.title}</Text>
                <Spacer />
                <Text fontSize='15px'>{props.ticket.createdAt}</Text>
           </Flex>
           <Text color='brand.accent'>{props.ticket.message}</Text>
           <Flex flexDirection='row'>
                <Text color='brand.accent' fontSize='13px'>{props.ticket.email}</Text>
                <Tag ml='8px' color='brand.accent' colorScheme={'black'} fontSize='15px' pr='10px'>{props.ticket.category[0].toUpperCase() + props.ticket.category.slice(1)}</Tag>
                <Spacer />
                <Link onClick={() => { props.handleStage(props.ticket) }}><Image src={arrowIcon} boxSize='20px' /></Link>
           </Flex>
        </Flex>
    );
}