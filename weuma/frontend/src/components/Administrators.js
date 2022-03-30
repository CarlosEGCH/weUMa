import { Box, Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';

import AdminItem from './AdminItem.js';

export default function AdminsList(props){

const admins = props.admins.map((admin, key) => {
    return(
      <AdminItem key={key} admin={admin}></AdminItem>
    );
  });    

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
            {admins}

        </Box>
    );
}