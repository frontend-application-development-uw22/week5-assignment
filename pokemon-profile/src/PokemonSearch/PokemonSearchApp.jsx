import React, {useEffect, useState} from 'react';
import AllPokemonImgCard from '../AllPokemonList/AllPokemonImgCard';
import { useNavigate, useParams } from "react-router-dom";
import AllPokemon from '../AllPokemonList/AllPokemon'
export default function PokemonSearchApp () {
    const [pokemon, setPokemon] = useState(undefined);
    const {pokemonName} = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    console.log(pokemonName)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            setPokemon(data); 
            setLoading(false);
            console.log(pokemon)
        })
    },[pokemonName]);

    if (loading) {
        return <div className ="AllPokemon__loadingdiv">Loading...</div>;
      }
    
      const goBack = () => {
          navigate('/')
      }

    return (
        <div>
            <header className ="AllPokemonList__header">
                <span className ="PokemonSearchApp__backBtn ">
                    <button onClick= {goBack}> Back to list</button>
                </span>{pokemon.name} Details</header>  
            <div className = "PokemonSearchApp__imgDiv">
                < AllPokemonImgCard 
                imageUrl = {pokemon.sprites.front_default} 
                pokemonName = {""}/>
                < AllPokemonImgCard 
                imageUrl = {pokemon.sprites.back_default} 
                pokemonName = {""}/>
            </div>
        <div className ="PokemonSearchApp__content">
            <p>Height: {pokemon.height}</p>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Weight: {pokemon.weight}</p>
         </div>
        
        </div>
    );
}