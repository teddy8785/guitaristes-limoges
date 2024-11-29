import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css';
import Index from './pages/Index';
import Artiste from "./pages/Artiste.jsx";
import Erreur from "./pages/Erreur.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/index" />} />
          <Route path="/index" element={<Index />} />
          <Route path="/ariste" element={<Artiste />} />
        <Route path="/artiste/:id" element={<Artiste />} />
        <Route path="*" element={<Erreur />} />
        </Routes>
      </Router>
  </React.StrictMode>
);
