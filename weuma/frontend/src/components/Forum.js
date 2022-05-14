import { 
    Button, 
    GridItem, 
    Grid, 
    Box, 
    Text, 
    Link, 
    Input, 
    InputGroup, 
    InputRightElement, 
    InputLeftElement, 
    Image,
    Spacer, 
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';

import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Picker from 'emoji-picker-react';

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

import { useDisclosure } from '@chakra-ui/react';

export default function ForumPage(props){

    const socket = props.socket;

    const [ message, setMessage ] = React.useState('');
    const [ chat, setChat ] = React.useState([]);

    const { width } = useViewport();
    const [currentRoom, setCurrentRoom] = React.useState('admission')

    const [emojiToggle, setEmojiToggle] = React.useState(true)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [shortcuts, setShortcuts] = React.useState([]);

    const [image, setImage] = React.useState({ data: '' });

    const handleFileChange = (e) => {
    setImage({
        data: e.target.files[0],
    })
  }

  const handleImageSubmit = async () => {

    const formData = new FormData();
    formData.append('file', image.data);

    await fetch('http://localhost:8080/api/upload', {
    method: 'POST',
    body: formData,
    }).then(res => res.json())
      .then(async (data) => {
        const messageData = {
                room: currentRoom,
                author: props.userId,
                image: props.userImage,
                isImage: true,
                message: data.filename,
                time: new Date(Date.now()).getHours() +
                 ":" +
                 new Date(Date.now()).getMinutes()
            }
        
        await socket.emit('send_message', messageData);
        setChat(chat => [...chat, messageData])
        setImage({ data: '' })

        await fetch('http://localhost:8080/api/save-message', {
        method: 'POST',
        body: JSON.stringify({
            room: currentRoom,
            message: data.filename,
            author: props.userId,
            image: props.userImage,
            isImage: true
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log('Got an error:' + err))


    })
    .catch((e) => {console.log('Uploading error : ' + e)})


}

    const fetchShortcuts = async () => {
        const id = props.userId;
        try {
            
            await fetch(`http://localhost:8080/api/get-shortcuts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id
                        })
                })
            .then(res => res.json())
            .then(data => {
                setShortcuts(data.shortcuts)
            })
            .catch((e) => {console.log('Something went wrong ', e)})

        } catch (error) {
            console.log(error)
        }
    }

    const joinRoom = (roomName) => {
        socket.emit('join_room', { room: roomName });
    }

    const sendMessage = async () => {

        const messageData = {
                room: currentRoom,
                author: props.userId,
                image: props.userImage,
                isImage: false,
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
                    image: props.userImage,
                    isImage: false 
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

    const onEmojiClick = (event, emojiObject) => {
        setMessage(message + emojiObject.emoji);
    };

    const handleEdit = async (id, content) => {
        await fetch('http://localhost:8080/api/edit-message', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                content: content
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setChat(chat => chat.map(message => {
                if(message.id === id){
                    message.message = content
                }
                return message
            }))
        })
        .catch((e) => {console.log('Something went wrong ', e)})
    }

    const handleDelete = (id) => {
        setChat(chat => chat.filter(message => message._id !== id))

        fetch('http://localhost:8080/api/delete-message', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((e) => {console.log('Something went wrong ' + e)});
    }

    const handleShortcut = (shortcut) => {
        setMessage(shortcut)
    }

    useEffect(async () => {

            socket.on("receive_message", (data) => {
            setChat(chat => [...chat, data]);
            })

            await fetch('http://localhost:8080/api/get-messages', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(res => res.json())
        .then(data => {
            setChat(data.messages);
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
                    <Link onClick={() => {joinRoom('documents'); setCurrentRoom('documents')}}><Flex><Image boxSize={'40px'} src={documentsIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Documents</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('guide'); setCurrentRoom('guide')}}><Flex><Image boxSize={'40px'} src={guideIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Guide</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('payments'); setCurrentRoom('payments')}}><Flex><Image boxSize={'40px'} src={paymentsIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Payments</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('lost'); setCurrentRoom('lost')}}><Flex><Image boxSize={'40px'} src={lostIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Lost & Found</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('ticket'); setCurrentRoom('ticket')}}><Flex><Image boxSize={'40px'} src={ticketIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Support Tickets</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('transport'); setCurrentRoom('transport')}}><Flex><Image boxSize={'40px'} src={transportIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Transport</Text></Flex></Link>
                    <Link onClick={() => {joinRoom('shop'); setCurrentRoom('shop')}}><Flex><Image boxSize={'40px'} src={shopIcon} /><Text color='brand.accent' alignSelf={'center'} fontSize='20px'>Shop & Merch</Text></Flex></Link>
                </Flex>
            </GridItem>
            <GridItem mt='20px' colSpan={width > 900 ? 4 : 6} padding={ width > 900 ? '80px 20px 0px 20px' : '0px 0px 0px 0px'}>
                <Box>
                    <Text color='brand.accent' fontSize='30px' textAlign='center'>Admission</Text>
                </Box>
                <Box bg='pink' h={['75vh', '700px', '700px']} mb='30px' borderBottom='2px solid black'>
                    <ChatDisplay handleEdit={handleEdit} handleDelete={handleDelete} role={props.role} userId={props.userId} chat={chat} socket={socket} room={currentRoom} username={props.username} />
                </Box>
                <Flex flexDirection='row' px={['5px', '40px', '40px']}>
                    <Image borderRadius='full' boxSize='40px' src={userImage} />
                    <InputGroup border='black'>
                        <Input onChange={handleChange} value={message} _hover={{border: '1px solid black'}} _placeholder={{color: 'brand.accent'}} color='brand.accent' focusBorderColor='brand.accent' ml='20px' p={['20px 105px 20px 20px','20px 160px 20px 20px','20px 160px 20px 20px']} placeholder='Write a message...' />
                        <InputRightElement 
                            mr='55px'
                            children={
                                <Flex flexDirection='row'>
                                    <Image cursor={'pointer'} mr='5px' onClick={() => {fetchShortcuts(); onOpen();}} src={shortcutIcon} />

                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                        <ModalHeader>Your Shortcuts</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            {shortcuts.map((shortcut, index) => {
                                                return (<Flex flexDirection={'row'}>
                                                    <Text key={index}>{shortcut.message}</Text>
                                                    <Spacer/>
                                                    <Button colorScheme='blue' mr={3} onClick={() => {handleShortcut(shortcut.message); onClose();}}>
                                                        Use
                                                    </Button>
                                                        </Flex>)
                                            })}
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                            </Button>
                                            <Button variant='ghost'>Secondary Action</Button>
                                        </ModalFooter>
                                        </ModalContent>
                                    </Modal>

                                    <Image cursor={'pointer'} onClick={() => {setEmojiToggle(!emojiToggle)}} mr='5px' src={emoteIcon} />
                                    <Box position='absolute' top="-320" left="-120" display={emojiToggle ? "none" : "initial"}><Picker onEmojiClick={onEmojiClick}></Picker></Box>
                                    <Image mr='5px' src={imageIcon} onClick={onOpen} cursor='pointer' />

                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                        <ModalHeader>Send Image</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <FormControl>
                                                <FormLabel fontSize={20} my='10px'>Select a File</FormLabel>
                                                <Input type={'file'} onChange={handleFileChange} name={'image'} id='image' placeholder='Select an Image' />
                                            </FormControl>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={() => {handleImageSubmit(); onClose();}}>
                                                Send
                                            </Button>
                                            <Button variant='ghost' onClick={onClose}>
                                                Cancel
                                            </Button>
                                        </ModalFooter>
                                        </ModalContent>
                                    </Modal>
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