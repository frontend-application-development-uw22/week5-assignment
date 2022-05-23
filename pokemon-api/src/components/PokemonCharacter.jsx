import React, { useEffect, useState } from 'react';
import PokemonDetails from './PokemonDetails';

function generateNewId() {
  return Math.floor(Math.random() * (200 - 1) + 1);
};

export default function PokemonCharacter() {
  const apiurl = (`https://pokeapi.co/api/v2/pokemon/${generateNewId()}`);
  const [pokemonMain, setPokemonMain] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(apiurl)
      .then(response => response.json())
      .then(data => {
        setPokemonMain(data);
        setIsLoading(false);
        console.log(data.name)
        console.log(data)
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>Random Pokemon: {pokemonMain.name} #{pokemonMain.id}
      <p><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonMain.id}.png`}></img></p>
      <PokemonDetails />
      <ul>
        <li>Species: {pokemonMain.species.name}</li>
        <li>Moves: {pokemonMain.moves[0].move.name}, {pokemonMain.moves[1].move.name}, {pokemonMain.moves[3].move.name}</li>
        <li>Weight/Height: {pokemonMain.weight}, {pokemonMain.height}</li>
      </ul>
    </div>
  );
}

