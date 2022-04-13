import * as React from 'react';
import { Text, Center, Grid, GridItem, Box, Flex, propNames } from '@chakra-ui/react';

import RightSideBar from './RightBar.js';
import ShortcutForm from './ShortcutForm.js';
import ShortcutItem from './ShortcutItem.js';

import { useViewport } from '../hooks/Responsive.js';
import {useParams} from 'react-router-dom';

export default function AdminShortcuts(){

    const { width } = useViewport();
    const  [shortcuts, setShortcuts] = React.useState([]);
    const [id, setId] = React.useState(useParams().id);

    const [shortcut, setShortcut] = React.useState({
        message: '',
        category: '',
        adminId: id
    });

    const fetchShortcuts = async () => {
        try {
            
            await fetch('http://localhost:8080/api/get-shortcuts', {
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
                setShortcuts(data.shortcuts);
            })
            .catch(error => console.log(error));


        } catch (error) {
        console.log(error)       
        }
    }

    React.useEffect(async () => {
        await fetchShortcuts();
    }, [])

    const handleChange = (e) => {
        setShortcut({
            ...shortcut,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            
            await fetch('http://localhost:8080/api/submit-shortcut', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(shortcut)
            })
            .then(res => res.json())
            .then(data => {
                setShortcuts([
                    ...shortcuts,
                    shortcut
                ])
                setShortcut({
                    message: '',
                    category: '',
                    adminId: id
                })
            })
            .catch(error => console.log(error));

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem colStart={1} colEnd={ width > 900 ? 2 : 7}>
                <Box pt='70px' borderBottom='1px solid black'>
                    <Center borderBottom='1px solid black'>
                        <Text fontSize='20px' color='brand.accent' >Short Answers</Text>
                    </Center>
                </Box>
            <ShortcutForm handleSubmit={handleSubmit} handleChange={handleChange} />
            </GridItem>

            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 } rowStart={ width > 900 ? 1 : 2} pt={['10px', '100px', '100px']} pl='20px'>
                {shortcuts.map((shortcut, index) => (
                    <ShortcutItem message={shortcut.message} category={shortcut.category} key={index} />
                ))}
            </GridItem>

            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}