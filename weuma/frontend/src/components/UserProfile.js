import * as React from 'react';

import {useParams} from 'react-router-dom';

import { Text, Center, Grid, GridItem, Box, Flex, Image } from '@chakra-ui/react';
import RightSideBar from './RightBar.js';

import { useViewport } from '../hooks/Responsive.js';

import elonImage from '../assets/elon.jpg';
import editIcon from "../assets/edit-icon.svg";

import QList from './FAQList.js';

export default function UserProfile(props){

    const { width } = useViewport();
    const { id } = useParams();

    const [owner, setOwner] = React.useState('');
    const [solvedTickets, setSolvedTickets] = React.useState([]);
    const [ticketsChange, setTicketsChange] = React.useState(true);

    const [user, setUser] = React.useState({
        name: '',
        email: '',
        phone: '',
        description: '',
        image: '',
        profileId: id,
    });


    const fetchUser = async () => {
        try {
            await fetch('http://localhost:8080/api/get-user',{
            method: 'POST',
            body: JSON.stringify({
                profileId: user.profileId
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.cookies.get('Bearer')}`}
        })
        .then(res => res.json())
        .then(data => {
            setUser({
                 ...user, 
                name: data.user.name,
                email: data.user.email,
                phone: data.user.phone,
                description: data.user.description || 'No description',
                image: data.user.image,
                });
            setOwner(data.owner);
        })
        .catch((e) => {console.log("Something went wrong ", e);})
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async (id, content, response) => {
        console.log(id, content);
        setTicketsChange(true);
        setSolvedTickets(solvedTickets.map(ticket => {
            if(ticket._id === id){
                return {
                    ...ticket,
                    title: content,
                    response: response
                }
            }
            return ticket;
        }));
    
        await fetch('http://localhost:8080/api/edit-ticket',{
            method: 'POST',
            body: JSON.stringify({
                id: id,
                content: content,
                response: response
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((e) => {console.log("Something went wrong ", e);})
}

    const fetchSolvedTickets = async () => {
        try {
            await fetch('http://localhost:8080/api/get-solved-tickets',{
                method: 'POST',
                body: JSON.stringify({
                    profileId: user.profileId
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                setSolvedTickets(data.solvedTickets);
            })
            .catch((err) => {
                console.log(err)
            })

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id) => {
        try {
            setTicketsChange(true);
            setSolvedTickets(solvedTickets.filter(ticket => ticket._id !== id));
            fetch('http://localhost:8080/api/delete-ticket',{
            method: 'POST',
            body: JSON.stringify({
                id: id
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((e) => {console.log('Something went wrong ' + e)});
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(
        async () => {
            if(ticketsChange){
                await fetchUser();
                await fetchSolvedTickets();
                setTicketsChange(false);
            }
        }, [id, solvedTickets]);

    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem h='100%' p='100px 40px 0px 40px' colStart='1' colEnd={ width > 900 ? 5 : 7 }>
                <Flex flexDirection='column'>
                    <Flex flexDirection={width > 900 ? 'row' : 'column'}>
                    <Image src={user.image !== '' ? require(`../../../server/src/public/${user.image}`) : elonImage} boxSize='300px' borderRadius={'10px'} />
                    <Image margin='10px' paddingTop='250px' display={owner ? 'initial' : 'none'} src={editIcon} />
                    <Flex flexDirection='column' pl='40px'>
                        <Text color='brand.accent' fontSize={'60px'}>
                            {user.name !== '' || user.name !== undefined ? user.name : 'User Name'}
                            <Image margin='10px' display={owner ? 'initial' : 'none'} src={editIcon} />
                        </Text>
                        <Text color='brand.accent' fontSize='20px'>
                            {user.description || 'No description'}
                            <Image margin='10px' display={owner ? 'initial' : 'none'} src={editIcon} />
                        </Text>
                        <Text color='brand.accent' fontSize='20px' mt='40px'>
                            {'Email: ' + (user.email || 'No email')}
                            <Image margin='10px' display={owner ? 'initial' : 'none'} src={editIcon} />
                        </Text>
                    </Flex>
                </Flex>
                <Flex mt='20px' mb='100px' w='100%' flexDirection='column'>
                    <Text color='black' fontSize={'25px'} mb='10px' w='100%' borderBottom={'2px solid black'}>Solved Questions</Text>
                    <QList handleEdit={handleEdit} handleDelete={handleDelete} owner={owner} tickets={solvedTickets} />
                </Flex>
                </Flex>
            </GridItem>
            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>);
}