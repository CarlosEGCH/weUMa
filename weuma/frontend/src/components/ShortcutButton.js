import * as React from 'react';
import { 
    Image,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Spacer,
    ModalBody,
    Flex
} from '@chakra-ui/react';

import shortcutIcon from '../assets/chat-shortcut-icon.svg'

export default function ShortcutButton(props){

    const shortcuts = props.shortcuts;

    const fetchShortcuts = props.fetchShortcuts;

    const handleShortcut = props.handleShortcut;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
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
                                            <Button variant={'outline'} colorScheme='red' mr={3} onClick={onClose}>
                                            Close
                                            </Button>
                                        </ModalFooter>
                                        </ModalContent>
                                    </Modal>
        </>
    )
}