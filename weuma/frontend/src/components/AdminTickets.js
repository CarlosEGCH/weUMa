import * as React from 'react';
import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react';

import RightSideBar from './RightBar.js';
import TicketsList from './TicketsList';
import TicketDetailsList from './TicketDetailsList.js';

import { useViewport } from '../hooks/Responsive.js';

export default function AdminTickets(){

    const { width } = useViewport();

    const [tickets, setTickets] = React.useState([]);
    const [stagedTickets, setStagedTickets] = React.useState([]);

    const getTickets = async () => {
        try {
            
            await fetch(`http://localhost:8080/api/tickets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                const newTickets = data.tickets.map(ticket => {
                    return {
                        id: ticket._id,
                        title: ticket.title,
                        message: ticket.message,
                        email: ticket.email,
                        staged: false
                    }
            })
            setTickets(newTickets);
        })
            .catch((e) => {
                console.log('Fetching error: ', e);
            })

        } catch (error) {
            console.log(error);
        }
    }

    const stageTicket = (ticket) => {
        if(!stagedTickets.includes(ticket)){
            setStagedTickets([...stagedTickets, ticket]);
        }
    }

    const unstageTicket = (ticket) => {
        const newStagedTickets = stagedTickets.filter(stagedTicket => stagedTicket.id !== ticket.id);
        setStagedTickets(newStagedTickets);
    }


    React.useEffect(() => {
        if(tickets.length == 0){
            getTickets();
        }
    });


    return(
        <Grid h='100%' templateColumns='repeat(6, 1fr)'>
            <GridItem colStart={1} colEnd={ width > 900 ? 2 : 7}>
                <Box pt='70px' borderBottom='1px solid black'>
                    <Center borderBottom='1px solid black'>
                        <Text fontSize='20px' color='brand.accent' >Support Tickets</Text>
                    </Center>
                </Box>
                <TicketsList tickets={tickets} handleStage={stageTicket}/>
            </GridItem>

            <GridItem h='100%' colStart={ width > 900 ? 2 : 1 } colEnd={ width > 900 ? 5 : 7 } display={ width > 900 ? 'initial' : 'none' } pt='100px' pl='20px'>
                {stagedTickets.length > 0 ? <TicketDetailsList tickets={stagedTickets} handleUnstage={unstageTicket}/> : <Text>No staged tickets</Text>}
            </GridItem>

            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}