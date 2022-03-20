import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { 

  Container

 } from '@chakra-ui/react'
 import Menu from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Menu />
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
