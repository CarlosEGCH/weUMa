import { Box, Flex, Spacer } from "@chakra-ui/react";
import * as React from "react";

import { useNavigate, Link } from "react-router-dom";

export default function ButtonAppBar(){
const navigate = useNavigate();

return (
    <Box>
        <Flex>
            <Box w='70px' h='10' bg='red.500'  />
            <Spacer />
            <Box w='170px' h='10' bg='red.500' />
            <Spacer />
            <Box w='180px' h='10' bg='red.500' />
        </Flex>
    </Box>
);

}