import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

export default function PokeDetails({pokemon, selectPokemon, selectAllPokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            setPokemonDetails(data);
            selectAllPokemon(pokemonDetails);
            setIsLoading(false);
          });
      },[pokemonDetails, pokemon.url, selectAllPokemon])

    return (
        <div className='singlePokemon' onClick={() => selectPokemon(pokemonDetails)}>
            {isLoading === true && <div>loading...</div>}
            {isLoading !== true && (
                <>
                <div>
                    <Link to={"pokemon/"+pokemonDetails.id}>
                        <img src={pokemonDetails.sprites.other["official-artwork"].front_default} alt={pokemonDetails.name} />
                        <h2>{pokemonDetails.id}. {pokemonDetails.name}</h2>
                    </Link>
                </div>
                </>
            )}
        </div>
    );
}