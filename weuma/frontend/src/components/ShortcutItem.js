import * as React from 'react';

import { Box, Text, Image, Flex, Spacer } from '@chakra-ui/react';

import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';

export default function ShortcutItem(){

    return(
        <Flex flexDirection={'row'} w='100%'  p='10px' alignItems={'center'} gap={2}>
            <Text padding='8px' width='100%' bg='brand.secondary' color='brand.accent' borderRadius={'10px'} shadow={'lg'} fontSize={'18px'}>
                Lorem
            </Text>
            <Spacer />
            <Image boxSize={'30px'} src={editIcon} />
            <Image boxSize={'30px'} src={deleteIcon} />
        </Flex>
    );
}