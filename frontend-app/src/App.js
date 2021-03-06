import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';

const App = () => (
  <BrowserRouter>
      <Router />
  </BrowserRouter>
);

export default App;
