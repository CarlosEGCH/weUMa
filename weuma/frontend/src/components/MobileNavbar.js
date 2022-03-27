import { Box, Flex, Spacer, Center, Image } from '@chakra-ui/react';
import * as React from 'react';
import MenuDrawer from './Drawer';

import logo from '../assets/logo2SVG.svg';

export default function MobileNavbar(props) {

    return (
        <Box bg="brand.primary" position='absolute' width='100%'>
            <Flex>
                <Center>
                    <Image src={logo} boxSize='60px' ></Image>
                </Center>
                <Spacer />
                <Center paddingRight='10px'>
                    <MenuDrawer logged={props.logged} role={props.role} cookies={props.cookies}></MenuDrawer>
                </Center>
            </Flex>
        </Box>
    );
}