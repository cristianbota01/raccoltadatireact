import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './PAGES/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);