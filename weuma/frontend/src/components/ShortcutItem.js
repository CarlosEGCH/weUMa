import * as React from 'react';

import { 
    Box, 
    Text,
    Button, 
    Image, 
    Flex, 
    Spacer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';

import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';

import { useDisclosure } from '@chakra-ui/react';

export default function ShortcutItem({message, category, handleDelete, shortcutId, handleEdit}){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [edit, setEdit] = React.useState(message);

    const handleChange = (e) => {
        setEdit(e.target.value);
    }

    return(
        <Flex flexDirection={'row'} w='100%'  p='10px' alignItems={'center'} gap={2}>
            <Text padding='8px' width='100%' bg='brand.secondary' color='brand.accent' borderRadius={'10px'} shadow={'lg'} fontSize={'18px'}>
                {message}
            </Text>
            <Spacer />
            <Image boxSize={'30px'} src={editIcon} cursor='pointer' onClick={() => { onOpen();}}/>

            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Shortcut</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <Text fontSize={20}>Title:</Text>
              <Text my='10px'>{message}</Text>
              <FormLabel fontSize={20}>New Content:</FormLabel>
              <Input onChange={handleChange} value={edit} placeholder='New Content...' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => {handleEdit(shortcutId, edit); onClose();}}>
              Edit
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            <Image boxSize={'30px'} src={deleteIcon} cursor='pointer' onClick={() => {handleDelete(shortcutId)}}/>
            <Text padding='8px' bg='brand.secondary' color='brand.accent' borderRadius={'10px'} shadow={'lg'} fontSize={'18px'}>
                {category}
            </Text>
        </Flex>
    );
}