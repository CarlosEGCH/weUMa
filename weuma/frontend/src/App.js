import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container } from '@chakra-ui/react';
import Menu from "./components/Navbar";
import MobileMenu from "./components/MobileNavbar";

import { useViewport } from './hooks/Responsive.js';

import Dashboard from './components/Dashboard.js';
import FAQ from './components/FAQ.js';
import Forum from './components/Forum.js';
import People from './components/People.js';
import Tickets from './components/Tickets.js';
import UserProfile from './components/UserProfile';

function App() {

  const { width } = useViewport();

  return (
    <Box bg='brand.primary'>
      <BrowserRouter>
      {width > 900 ? <Menu /> : <MobileMenu />}
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/people" element={<People />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
