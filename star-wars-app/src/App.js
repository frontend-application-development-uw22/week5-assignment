import React from 'react';
import { Link, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from "./components/CharacterDetail";
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
