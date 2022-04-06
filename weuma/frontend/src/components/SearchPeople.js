import * as React from 'react';

import { Text, Image, Flex, Grid, GridItem, Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import SearchItem from './SearchItem';

import SearchIcon from '../assets/search-icon.svg';

export default function PeopleSearch(){

    const [users, setUsers] = React.useState([]);
    const [filteredUsers, setFilteredUsers] = React.useState([]);

    const fetchUsers = async () => {
        try {
            await fetch('http://localhost:8080/api/users',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users);
                setFilteredUsers(data.users);
            })
        }catch (error) {
            console.log('Users fetch error: ', error);
        }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    React.useEffect(() => {
        fetchUsers();
    }, []);

    return(
    <Box width='100%'>
            <InputGroup width='100%'  bg='brand.extra'>
                <Input onChange={handleSearch} _hover={{border: '1px solid black'}} _placeholder={{color: 'brand.accent'}} color='brand.accent' focusBorderColor='brand.accent' placeholder='Search People...' />
                <InputRightElement border='black'>
                    <Image boxSize='30px' src={SearchIcon} />
                </InputRightElement>
            </InputGroup>
        <Box w='100%' bg='#FFEEF1'>
            <Flex flexDirection='column'>
                {filteredUsers.map((user, key) => {
                    return(
                        <SearchItem key={key} user={user}></SearchItem>
                    );
                })}
            </Flex>
        </Box>
    </Box>
    );
}