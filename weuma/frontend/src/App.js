import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { 
  Container,
  Menu
 } from '@chakra-ui/react'


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route index path="/" element={"<h1>Hello</h1>"} />
          <Route path="/tasks/new" element={"<h1>Hello2</h1>"} />
          <Route path="/tasks/:id/edit" element={"<h1>Hello3</h1>"} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
