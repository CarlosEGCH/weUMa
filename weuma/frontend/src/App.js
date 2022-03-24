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

function App() {

  const { width } = useViewport();

  return (
    <Box bg='brand.primary' h='100vh'>
      <BrowserRouter>
      {width > 900 ? <Menu /> : <MobileMenu />}
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/people" element={<People />} />
        </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
