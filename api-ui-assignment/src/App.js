import Pokedex from './components/profile';
import PokedexHome from './components/home';
import './App.css'; 
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokedexHome />} />
        <Route path="/:pokemon" element={<Pokedex />} />
      </Routes>
     

      <Link to="/" className='home-link'>Home</Link>
    </div>
  );
  
}

export default App;
