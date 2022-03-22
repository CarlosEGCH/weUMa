import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container } from '@chakra-ui/react';
 import Menu from "./components/Navbar";
 import MobileMenu from "./components/MobileNavbar";

 import { useViewport } from './hooks/Responsive.js';

 import Dashboard from './components/Dashboard.js';

function App() {

  const { width } = useViewport();

  return (
    <Box bg='brand.primary' h='100vh'>
      <BrowserRouter>
      {width > 900 ? <Menu /> : <MobileMenu />}
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/tasks/new" element={"<h1>Hello2</h1>"} />
          <Route path="/tasks/:id/edit" element={"<h1>Hello3</h1>"} />
        </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
