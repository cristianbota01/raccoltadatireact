import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './PAGES/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Registration from './PAGES/Registration';
import Login from './PAGES/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
