import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, propNames } from '@chakra-ui/react';
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
import { useEffect, useState, useRef } from 'react';
import Cookies from 'universal-cookie';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

function App() {

  const { width } = useViewport();

  const didMount = useRef(false);

  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState('user');
  const [userId, setUserId] = useState('');
  const [userImage, setUserImage] = useState('');
  const [username, setUsername] = useState('');
  const [categories, setCategories] = useState([])
  const cookies = new Cookies();

  const handleRegister = async () => {
    try {
      
      if(cookies.get('Bearer') != null){

        await fetch(`http://localhost:8080/api/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.get('Bearer')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setLogged(true);
        setUserId(data._id);
        setUserImage(data.image);
        setRole(data.role);
        setUsername(data.name);
        setCategories(data.categories);
      })
      .catch((e) => {
        console.log('Fetching error: ', e);
      })
      }

    } catch (e) {
      console.log('Erro encontrado: ', e);
    }
  }

  useEffect(() => {
      handleRegister();
  }, [])

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
      {width > 900 ? <Menu socket={socket} userId={userId} logged={logged} role={role} cookies={cookies} username={username} userImage={userImage} /> : <MobileMenu socket={socket} logged={logged} role={role} cookies={cookies} />}
        <Routes>
          <Route index path="/" element={<Dashboard cookies={cookies} />} />
          <Route path="/faq" element={<Categories />} />
          <Route path="/forum" element={logged ? <Forum socket={socket} role={role} userImage={userImage} username={username} userId={userId} /> : <Login onRegister={handleRegister} cookies={cookies} />} />
          <Route path="/people" element={logged ? <People /> : <Login onRegister={handleRegister} cookies={cookies} />} />
          <Route path="/tickets" element={ <Tickets socket={socket} /> } />
          <Route path="/profile/:id" element={logged ? <UserProfile socket={socket} cookies={cookies} /> : <Login onRegister={handleRegister} cookies={cookies} />} />
          <Route path="/faq/:category" element={<FAQ socket={socket} />} />
          <Route path="/signup" element={<Signup onRegister={handleRegister} cookies={cookies} />} />
          <Route path='/login' element={<Login socket={socket} onRegister={handleRegister} cookies={cookies} />} />
          <Route path='/admin/tickets/:id' element={logged ? <AdminTickets categories={categories} /> : <Login onRegister={handleRegister} cookies={cookies} />} />
          <Route path="/admin/shortcuts/:id" element={logged ? <AdminShortcuts /> : <Login onRegister={handleRegister} cookies={cookies} />} />
        </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
