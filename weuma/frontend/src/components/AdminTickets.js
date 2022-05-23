import * as React from 'react';
import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react';

import RightSideBar from './RightBar.js';
import TicketsList from './TicketsList';
import TicketDetailsList from './TicketDetailsList.js';

import { useViewport } from '../hooks/Responsive.js';

export default function AdminTickets(props){

    const { width } = useViewport();
    const renders = React.useRef(0);

    const [tickets, setTickets] = React.useState([]);
    const [stagedTickets, setStagedTickets] = React.useState([]);

    const getTickets = async () => {
        try {
            await fetch(`http://localhost:8080/api/tickets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    categories: props.categories
                })
            })
            .then(res => res.json())
            .then(data => {
                const newTickets = data.tickets.map(ticket => {
                    return {
                        id: ticket._id,
                        title: ticket.title,
                        message: ticket.message,
                        email: ticket.email,
                        staged: false,
                        category: ticket.category,
                        createdAt: ticket.createdAt.split('T')[0]
                    }
            })
            setTickets(newTickets);
            renders.current = renders.current + 1;
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
            if(renders.current < 3){
                getTickets();
            }
    });

    const handleAnswerSubmit = async (ticketId, email, response, adminId, faq) => {
        try {
            await fetch(`http://localhost:8080/api/answer-ticket`, {
                method: 'POST',
                body: JSON.stringify(
                    {ticketId, email, response, adminId, faq}
                ),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                getTickets();
            })
            .catch((e) => {
                console.log('Fetching error: ', e);
            })

        } catch (error) {
            console.log(error)
        }
    }


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
                {stagedTickets.length > 0 ? <TicketDetailsList socket={props.socket} handleAnswerSubmit={handleAnswerSubmit} tickets={stagedTickets} handleUnstage={unstageTicket}/> : <Center pt={'20px'}><Text color='brand.accent'>No staged tickets</Text></Center>}
            </GridItem>

            <GridItem colStart={6} display={ width > 900 ? 'initial' : 'none' }>
                <RightSideBar />
            </GridItem>
        </Grid>
    );
}