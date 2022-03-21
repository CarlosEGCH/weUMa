import * as React from 'react';
import { Box, Text, Spacer, Flex, Center, Grid, GridItem, Button, Drawer, DrawerOverlay, DrawerCloseButton, DrawerBody, Input,
     DrawerHeader, DrawerFooter, DrawerContent, useDisclosure, Image} from '@chakra-ui/react';
import menuIcon from '../assets/hamburger-icon.svg';

import mainIcon from '../assets/main-icon.svg';
import ticketIcon from '../assets/ticket-icon.svg';
import forumIcon from '../assets/forum-icon.svg';
import peopleIcon from '../assets/people-icon.svg';

import profileIcon from '../assets/user-icon.svg';
import storageIcon from '../assets/storage-icon.svg';
import inboxIcon from '../assets/inbox-icon.svg';

import userImage from '../assets/user.jpg';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <Image boxSize='30px' src={menuIcon}></Image>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='brand.secondary'>
          <DrawerCloseButton color='brand.accent' />
          <DrawerHeader color='brand.accent'>
            <Center>
                  <Image boxSize='60px' borderRadius='full' src={userImage}></Image>
                  <Text color='brand.accent' ml='10px' fontSize='20px'>Carlos Gomes</Text>
                </Center>
          </DrawerHeader>

          <DrawerBody>
            <Grid templateRows='repeat(7, 1fr)' templateColumns='1fr' h='100%'>
              <GridItem rowStart='1'>
                <Center h='100%'>
                  <Text fontSize='35px' color='brand.accent'>
                    Where do you wanna go?
                  </Text>
                </Center>
              </GridItem>
              <GridItem rowSpan={2}>
                <Center h='100%'>
                  <Image boxSize='60px' src={profileIcon}></Image>
                  <Image boxSize='60px' ml='20px' mr='20px' src={storageIcon}></Image>
                  <Image boxSize='60px' src={inboxIcon}></Image>
                </Center>
              </GridItem>
              <GridItem rowStart='4'>
                <Center>
                      <Image boxSize='60px' src={mainIcon} mr='20px'></Image>
                      <Text fontSize='30px' color='brand.accent'>FAQ</Text>
                </Center>
              </GridItem>
              <GridItem rowStart='5'>
                <Center>
                      <Image boxSize='60px' src={ticketIcon} mr='20px'></Image>
                      <Text fontSize='30px' color='brand.accent'>Forum</Text>
                </Center>
              </GridItem>
              <GridItem rowStart='6'>
                <Center>
                      <Image boxSize='60px' src={forumIcon} mr='20px'></Image>
                      <Text fontSize='30px' color='brand.accent'>People</Text>
                </Center>
              </GridItem>
              <GridItem rowStart='7'>
                <Center>
                      <Image boxSize='60px' src={peopleIcon} mr='20px'></Image>
                      <Text fontSize='30px' color='brand.accent'>Tickets</Text>
                </Center>
              </GridItem>
            </Grid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' bg='brand.accent' mr={3} onClick={onClose}>
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}