import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function ListPokemon({pokemonId}) {
    const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemon, setPokemon] = useState({pokemonId});
    const [isLoading, setLoadStatus] = useState(true);

    useEffect(() => {
        fetch(`${API_POKEMON}${pokemonId}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                setLoadStatus(false);
            })
    });

    if (isLoading) { return <h1>Info Loading</h1> }

    return(
        <div className='pokemon-card'>
            <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
            <p><Link to={pokemon.name}>Details</Link></p>
            <div className='image-wrap'>
                <img alt={`${pokemon.name}`} src={pokemon.sprites.front_default} />
            </div>
        </div>
    );
}

function capitalizeFirstLetter(input) {
    const firstLetter = input.charAt(0);
    const capitalize = firstLetter.toUpperCase();
    const combination = capitalize + input.slice(1);
    return combination;
}

ListPokemon.propTypes = {
    pokemonId: PropTypes.string.isRequired
}