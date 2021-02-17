import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from './Theme/theme'

ReactDOM.render(
  <ChakraProvider resetCSS theme={customTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);


