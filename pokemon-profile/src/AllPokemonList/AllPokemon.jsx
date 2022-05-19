import React, {useState, useEffect}from 'react';
import AllPokemonImgCard from './AllPokemonImgCard';

export default function AllPokemon ({ pokemon, idx }) {
   const [eachPokemon, setPokemon] = useState(undefined);
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idx}`)
        .then((response) => response.json())
        .then((data) => {
            setPokemon(data)
            setLoading(false);
        })
    },[idx]);

      if (loading) {
        return <div className ="AllPokemon__loadingdiv">Loading...</div>;
      }
   
   return (
      <div className = "AllPokemon__container"> 
         <AllPokemonImgCard
         imageUrl = { eachPokemon.sprites.front_default } 
         pokemonName = { eachPokemon.name}/> 
         <div className ="content">
            <p><span>Title: {eachPokemon.name}</span><span className = "AllPokemon_height">Height: {eachPokemon.height}</span></p>
         </div>
      </div>
   );
}