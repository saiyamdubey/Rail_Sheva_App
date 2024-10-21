// import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { inject } from '@vercel/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
inject();

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
