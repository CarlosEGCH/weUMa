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

function App() {

  const { width } = useViewport();

  return (
    <Box height='100vh' bg='brand.primary' overflow='auto'>
      <BrowserRouter>
      {width > 900 ? <Menu /> : <MobileMenu />}
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/faq" element={<Categories />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/people" element={<People />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/faq/:category" element={<FAQ />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
