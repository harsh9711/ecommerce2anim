import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme';
import { AppProvider } from './Context/Productcontext';
import { CartProvider } from './Context/cart_context';
import { FilterContextProvider } from './Context/filter_context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <CartProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </CartProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
