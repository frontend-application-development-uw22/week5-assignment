import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import PokemonDescriptions from './03-pokemon-description';

const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'

export default function Pokemon() {
    // This works together with react-router-dom
    // Parameter required is pokemonName
    const parameters = useParams()
    const pokemonName = parameters.pokemonName;

    const [pokemon, setPokemon] = useState(pokemonName);
    const [isLoading, setLoadStatus] = useState(true);
    

    useEffect(() => {
        fetch(`${API_POKEMON}${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                setLoadStatus(false);
            })
    });

    if (isLoading) { return <h1>Info Loading</h1> }

    return(
        <div className='pokemon-card-expanded' key={pokemon.id}>
            <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            <p><Link to='/'>Back to list</Link></p>
            <div className='image-wrap'>
                <img alt={`${pokemon.name}`} src={pokemon.sprites.front_default} />
            </div>


            <p><strong>Height:</strong> {convertDecimeterToCentimeters(pokemon.height)} cm</p>
            <p><strong>Weight:</strong> {convertHectogramsToKilograms(pokemon.weight)} kilograms</p>
            
            <p><strong>Type:</strong></p>
            <ul>
                {listOutTypes(pokemon.types)}
            </ul>
            <p><strong>Descriptions</strong> <PokemonDescriptions /></p>
        </div>
    );
}

function convertHectogramsToKilograms(input) {
    // Pokemon API sends weight data in hectograms
    // Convert data into more familiar kilograms
    
    // hectograms & kilograms multipliers
    const HECTOGRAMS = 100; // 100 grams in hectogram
    const KILOGRAMS = 1000; // 1000 grams in kilograms
    
    input *= HECTOGRAMS; // Convert hectogram into grams
    input /= KILOGRAMS;  // Convert grams into kilograms
    return input
}

function convertDecimeterToCentimeters(input){
    // Pokemon API sends height data in decimeters
    // Convert data into more familiar centimeters
    
    // decimeter mulitplier
    const DECIMETER = 10; // 10 centimeters in 1 meter

    input *= DECIMETER; // convert decimeters to centimeters
    return input
}

function listOutTypes(arrayInput){
    return arrayInput.map(
        typeEntry => <li>{typeEntry.type.name}</li>
    )
}

// Because only one export per file...?
// Gonna just copy and paster here
function capitalizeFirstLetter(input) {
    const firstLetter = input.charAt(0);
    const capitalize = firstLetter.toUpperCase();
    const combination = capitalize + input.slice(1);
    return combination;
}