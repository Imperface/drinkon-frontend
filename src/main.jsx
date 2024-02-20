import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  blue: 'rgb(0, 0, 255)',
  yellow: '#FFFF00',
  black: '#000',
  white: '#fff',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/drinkon-frontend">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
