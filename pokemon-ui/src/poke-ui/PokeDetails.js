import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PokeDetails({pokemon, selectPokemon, selectAllPokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            setPokemonDetails(data);
            setIsLoading(false);
          });
      },[pokemon.url])

    if (setIsLoading === false) {
        selectAllPokemon(pokemonDetails);
    }

    //console.log(selectPokemon)
    console.log(typeof selectedPokemon)

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
    )
}

PokeDetails.propTypes = {
    pokemon: PropTypes.object.isRequired,
    selectedPokemon: PropTypes.func.isRequired,
    selectAllPokemon: PropTypes.func.isRequired
}