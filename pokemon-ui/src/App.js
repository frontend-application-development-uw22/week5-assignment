import { useEffect, useState } from 'react';
import './App.css';
import PokePages from './poke-ui/PokePages';

function App() {
  // const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonpage, setPokemonPage]  = useState(undefined);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => response.json())
      .then(data => {
        // setPokemons(data)
        setPokemonPage(<PokePages pokemons = {data.results}/>)
        setIsLoading(false) 
      })
      .catch(console.error)
  },[])

  //console.log(pokemons)

  return (
    <div className="App">
      {isLoading === true && <div>loading...</div>}
      {isLoading !== true && (
        <>
          <div>
            {pokemonpage}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
