import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PokeCharacters from './poke-ui/PokeCharacters';
import PokeDetailsPage from './poke-ui/PokeDetailsPage'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonpage, setPokemonPage]  = useState(undefined);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  const selectPokemon = (pokemonDetails) => {
    setSelectedPokemon(pokemonDetails);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => response.json())
      .then(data => {
        setPokemonPage(
          <PokeCharacters 
            pokemons = {data.results}
            selectPokemon = {selectPokemon}
          />)
        setIsLoading(false) 
      })
      .catch(console.error)
  },[]);

  //console.log(selectedPokemon); 

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"pokemon/"+selectedPokemon.name} >Last Pokemon Selected: {selectedPokemon.name}</Link>
        </li>
      </ul>
      {isLoading === true && <div>loading...</div>}  
      {isLoading !== true && (
        <>
          <div>
            <Routes>
              <Route path="/" element={pokemonpage} />
              <Route path="pokemon/:iChooseYou" 
                element={
                  <PokeDetailsPage
                    selectedPokemon = {selectedPokemon}
                  />
                } 
              />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
