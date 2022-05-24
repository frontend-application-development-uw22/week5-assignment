import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const API_POKEMON_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/'

export default function PokemonDescriptions() {
    // This works together with react-router-dom
    // Parameter required is pokemonName
    const parameters = useParams()
    const pokemonName = parameters.pokemonName;

    const [pokemon, setPokemon] = useState(pokemonName);
    const [isLoading, setLoadStatus] = useState(true);
    

    useEffect(() => {
        fetch(`${API_POKEMON_SPECIES}${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                setLoadStatus(false);
            })
    });

    if (isLoading) { return <h1>Info Loading</h1> }

    return(
        <ul>
            {listOutDescriptions(pokemon.flavor_text_entries)}
        </ul>
    );
}

function listOutDescriptions(arrayInput){
    return arrayInput.filter( descriptors =>
        descriptors.language.name === "en"      // Only english descriptions
    )
        .map(
            descriptors => 
                <li>
                    <strong>Version {descriptors.version.name}</strong>
                    <br/>
                    {descriptors.flavor_text}
                </li>
    )
}