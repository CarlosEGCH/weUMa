import { Box, Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';

import AdminItem from './AdminItem.js';

export default function AdminsList(){

    return(
        <Box overflow='auto' h='620px' sx={{
    '&::-webkit-scrollbar': {
      width: '12px',
      borderRadius: '8px',
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `rgba(0, 0, 0, 0.2)`,
    },
  }}>
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