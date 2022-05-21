import React, { useState, useEffect } from 'react';
//import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowAll = (props) =>{
    const gotItems = props.gotItems;
    return (
        <div>
        {
           gotItems && (gotItems).map((item, idx) =>
            <div key={idx}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.url}</p>   
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
 //fetch(`https://jsonplaceholder.typicode.com/posts`)
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