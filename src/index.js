import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);