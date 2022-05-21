import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const ShowAll = (props) =>{
    const gotItems = props.gotItems;
    return (
        <div>
        {
           gotItems && (gotItems).map((item, idx) =>
            <div key={idx} className="div-style">              
                <p>{item.name}</p>
                <p>{item.url}</p>
                <Link to={`/listingDetails/${item.name}/${item.url}`}>
                    Listing Details
                </Link>
            </div>
           
           )
        }
        </div>
    );
}

export default function ListingAll(){
const [pokemons, setPokemons] = useState(undefined);
const [isLoading, setIsLoading] = useState(true);
const [hasError, setHasError] = useState(false);
    
  useEffect(() => {
 //fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
  //fetch(`https://api.disneyapi.dev/characters`)
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => response.json())
    .then(
            (actualData) => {
                setPokemons(actualData.results);
                setIsLoading(false);
            }
        )
    .catch((err) => {
        setHasError(true);
        setIsLoading(false);
  });
}, []);
  
    return (
        <div>
            <Link to="/listingDetails">Listing Details</Link>
            <ShowAll gotItems={pokemons} />
        </div>
    );
}