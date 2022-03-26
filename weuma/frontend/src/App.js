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
import Categories from './components/CategoryList';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminTickets from './components/AdminTickets';
import AdminShortcuts from './components/AdminShortcuts';
import { useState } from 'react';
import Cookies from 'universal-cookie';

function App() {

  const { width } = useViewport();

  const [logged, setLogged] = useState(false);
  const [userId, setUserId] = useState('');
  const cookies = new Cookies();

  const handleRegister = () => {
    try {
      
      fetch(`http://localhost:8080/api/register`, {
        method: 'POST',
        body: JSON.stringify({
          token: cookies.get('Bearer')
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookies.get('Bearer')
        }
      })
      .then(res => res.json())
      .then(data => {
        setLogged(true);
        setUserId(data._id);
      })
      .catch((e) => {
        setLogged(false);
      })
      //console.log("My Token: ", cookies.get('Bearer'));

    } catch (e) {
      console.log('Erro encontrado: ', e);
    }
  }

  return (
    <Box height='100vh' bg='brand.primary' overflow='auto' sx={{
    '&::-webkit-scrollbar': {
      width: '12px',
      borderRadius: '8px',
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `rgba(0, 0, 0, 0.4)`,
    },
  }}>
      <BrowserRouter>
      {width > 900 ? <Menu /> : <MobileMenu />}
        <Routes>
          <Route index path="/" onChange={() => {}} element={<Dashboard />} />
          <Route path="/faq" element={<Categories />} />
          <Route path="/forum" element={<Forum isLogged={logged} />} />
          <Route path="/people" element={<People />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/faq/:category" element={<FAQ />} />
          <Route path="/signup" element={<Signup onRegister={handleRegister} cookies={cookies} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin/tickets/:id' element={<AdminTickets />} />
          <Route path="/admin/shortcuts/:id" element={<AdminShortcuts />} />
        </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
