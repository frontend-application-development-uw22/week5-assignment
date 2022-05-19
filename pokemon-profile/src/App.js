import React, {useState, useEffect} from 'react';
import './App.css';
import AllPokemonList from '../src/AllPokemonList/AllPokemonList'
import { Routes, Route, useParams } from 'react-router-dom';
import PokemonSearchApp from '../src/PokemonSearch/PokemonSearchApp';

function App() {
  const [swData, setSWData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
 const pokemonName = useParams();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(response => response.json())
      .then(data => {
        setSWData(data.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
      return <p>Loading...</p>;
  }
  return (
    
  <Routes>
      <Route path="/" element={<AllPokemonList itemList={swData}/>} />
      <Route path="/:pokemonName" element={<PokemonSearchApp pokemonName = {pokemonName}/>} />
      
  </Routes>
 
  );
}

export default App;
