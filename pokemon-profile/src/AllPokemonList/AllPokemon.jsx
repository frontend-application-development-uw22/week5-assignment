import React, {useState, useEffect}from 'react';
import AllPokemonImgCard from './AllPokemonImgCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function AllPokemon ({ pokemon, idx, selectedPokemon, removePokemon }) {
   const [eachPokemon, setPokemon] = useState(undefined);
   const [loading, setLoading] = useState(true);
   const [heart, setHeart] = useState (false);
   
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
          
    const heartfunc = () => {
      setHeart(!heart);
      if(!heart) {
         selectedPokemon();
      }
      else {
         removePokemon();
      }

  }
   
   return (
      <div className = "AllPokemon__container" >
         <p>Click to see details</p> 
         <AllPokemonImgCard
         imageUrl = { eachPokemon.sprites.front_default } 
         pokemonName = { eachPokemon.name}/> 
         <div className ="content">
            <p><span>Title: {eachPokemon.name}</span><span className = "AllPokemon_height">Height: {eachPokemon.height}</span>
            { heart  ? <FontAwesomeIcon  icon={ faHeartSolid } onClick = { heartfunc } size = "xl" className="heart"/> : <FontAwesomeIcon  onClick = { heartfunc } icon= { faHeart } size="xl" className="heart"/>} </p>
         </div>
      </div>
   );
}