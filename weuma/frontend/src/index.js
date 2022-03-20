import React from 'react';
import ReactDOM from 'react-dom';
import './styles//index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import Fonts from './styles/Fonts';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Fonts />
        <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
