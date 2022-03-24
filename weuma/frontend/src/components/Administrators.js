import { Box, Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';

import AdminItem from './AdminItem.js';

export default function AdminsList(){

    return(
        <Box overflow='auto' h='620px'>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>
            <AdminItem></AdminItem>

        </Box>
    );
}