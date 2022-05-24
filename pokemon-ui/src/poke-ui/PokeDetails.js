import React, { useEffect, useState } from 'react';
//import PokeDetailsPage from './PokeDetailsPage'
//import PropTypes from 'prop-types';

export default function PokeDetails({pokemon, selectPokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            setPokemonDetails(data);
            setIsLoading(false);
          });
      },[pokemon])

    return (
        <div className='singlePokemon' onClick={() => selectPokemon(pokemonDetails)}>
            {isLoading === true && <div>loading...</div>}
            {isLoading !== true && (
                <>
                <div>
                    <img src={pokemonDetails.sprites.other["official-artwork"].front_default} alt={pokemonDetails.name} />
                    <h2>{pokemonDetails.id}. {pokemonDetails.name}</h2>
                </div>
                </>
            )}
        </div>
    );
}