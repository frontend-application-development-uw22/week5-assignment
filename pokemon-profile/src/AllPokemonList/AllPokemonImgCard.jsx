import React from 'react';
import Proptypes from 'prop-types'
import { useNavigate } from "react-router-dom";
export default function AllPokemonImgCard({imageUrl, pokemonName}) {
    const navigate = useNavigate();
    const imageClicked = (e) => {
        console.log("I am clicked");
        navigate(`/${pokemonName}`)
    }
        return (
            <div className = "AllPokemonImgCard__div" onClick = {imageClicked}>
                <h4>{ pokemonName }</h4>
                <img src = { imageUrl } alt = "loading..." className = "AllPokemonImgCard__image"/>
            </div>
        );
    }
    
AllPokemonImgCard.prototype = {
    AllPokemonImgCard: Proptypes.object.isRequired
}