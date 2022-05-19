import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function generateNewId() {  
    return Math.floor(Math.random() * (200 - 1) + 1);
  };

function PokemonHome() {
    const apiurl = (`https://pokeapi.co/api/v2/pokemon/${generateNewId()}`);
    const [pokemon, setpokemon] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                setpokemon(data);
                setIsLoading(false);
                console.log(data.name)
                console.log(data.id)
            });
    }, []);
    return (
      <div>
        <h1>{pokemon.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}></img>
      </div>
    );
  }
  
  export default PokemonHome;