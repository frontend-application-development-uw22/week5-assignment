import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

 function Pokedex(){
    const params = useParams();

    console.log('prams', params)

    const [pokemonProfile, setPokemonProfile] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
        .then(response => response.json())
        .then(data => {
                setPokemonProfile(data)
                setIsLoading(false);
            },
            error => {
                setHasError(true)
                setIsLoading(false)
            }
        );
    },[params.pokemon]);

    if(isLoading){
        return <p>Loading...</p>
    }

    if(hasError){
        return <p>An error has occurred, please try again later</p>
    }

    function secondType(){
        if(pokemonProfile.types[1]){
        return `and ${pokemonProfile.types[1].type.name}`
        }
    };

    function secondAbility(){
        if(pokemonProfile.abilities[1]){
        return `and ${pokemonProfile.abilities[1].ability.name}`
        }
    };

    function height(){
      let conversion = pokemonProfile.height/25400000;
      let numString = conversion.toString();
      return numString.slice(0,3);
    }

     return <div className="pokedex-container">
            <h1 className="entry-header">Pokedex Entry for <p className='pokemon-profile-name'>{pokemonProfile.name}</p></h1>
            <img className="pokemon-img" src={pokemonProfile.sprites.other.home.front_default} alt={`${pokemonProfile.name}'s render`} />
            <div className="pokemon-info-container">
              <div className="pokemon-type"><p className="info-label">Type:</p> <p className="info-responses">{pokemonProfile.types[0].type.name} {secondType()}</p></div>
              <div className="pokemon-height"><p className="info-label">Height:</p> <p className="info-responses">{height()} Feet</p> </div>
              <div className="pokemon-ability"><p className="info-label">Special Ability:</p> <p className="info-responses">{pokemonProfile.abilities[0].ability.name} {secondAbility()}</p></div>
            </div>
         </div>
 }

 Pokedex.propTypes = {
    pokemon: PropTypes.string
 };

 export default Pokedex;
