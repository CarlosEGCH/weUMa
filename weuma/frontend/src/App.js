import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from '@chakra-ui/react';
 import Menu from "./components/Navbar";
 import MobileMenu from "./components/MobileNavbar";

 import { useViewport } from './hooks/Responsive.js';

function App() {

  const { width } = useViewport();

  return (
    <BrowserRouter>
      {width > 900 ? <Menu /> : <MobileMenu />}
      <Container>
        <Routes>
          <Route index path="/" element={"Dashboard"} />
          <Route path="/tasks/new" element={"<h1>Hello2</h1>"} />
          <Route path="/tasks/:id/edit" element={"<h1>Hello3</h1>"} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
