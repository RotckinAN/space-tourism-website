import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

//! Задать базовый путь для роутера (поменять в .env базовый путь при необходимости)
const baseName =
   process.env.NODE_ENV !== 'production'
      ? '/'
      : process.env.REACT_APP_HOME_PAGE;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter basename={baseName}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </BrowserRouter>
);
