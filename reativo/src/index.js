import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App';
import Contato from './Contato';
import Sobre from './Sobre';
import NaoEncontrado from './NaoEncontrado';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sobre' element={<Sobre />} />
        
        <Route path='/*' element={<NaoEncontrado />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
