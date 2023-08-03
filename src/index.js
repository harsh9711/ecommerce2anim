 import React from 'react';
 import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './theme';
import {AppProvider} from './Context/Productcontext';
import { CartProvider } from './Context/cart_context';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <AppProvider>
  <CartProvider>
  <App/>
  </CartProvider>
  </AppProvider>
  </ThemeProvider>

);
reportWebVitals();
