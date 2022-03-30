import { Image, Grid, GridItem, Text, Center } from '@chakra-ui/react';
import * as React from 'react';

import userImage from '../assets/elon.jpg';

export default function AdminsItem(props){

    const {image, name} = props.admin;

    return(
        <Grid templateColumns='0.3fr 1fr' pt='20px'>
            <GridItem boxSize='60px'>
                <Image src={image != '' ? require(`../../../server/src/public/${image}`) : userImage} borderRadius='full'></Image>
            </GridItem>
            <GridItem h='100%' pt='10px'>
                    <Text color='brand.accent' pl='10px' fontSize='20px'>{name != '' ? name : 'Username'}</Text>
            </GridItem>
        </Grid>
    );
}