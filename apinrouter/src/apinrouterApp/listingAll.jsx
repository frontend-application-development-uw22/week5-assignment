import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import header from '../graphics/pokeme.png';


const ShowAll = (props) =>{
    const gotItems = props.gotItems.data;
    return (
        <div>
            <div >
                <img className="header-image" src={header} alt="headerimg" />
            </div>
            <div className="div-style header-div">
                <p>Id</p>
                <p>Name</p>
                <p>Type</p>
                <p>Link To Details</p>
            </div>
        {
            
           gotItems && (gotItems).map((item, idx) =>
            <div key={idx} className="div-style">              
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.types[0]}</p>             
                <Link to={`/listingDetails/${item.id}/${item.name}/${item.types[0]}`}>
                    Listing Details
                </Link>
            </div>      
           )
        }
        </div>
    );
}

export default function ListingAll(){
const [pokemons, setPokemons] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [hasError, setHasError] = useState(false);
    
  useEffect(() => {
 //fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
  //fetch(`https://api.disneyapi.dev/characters`)
  //fetch(`https://pokeapi.co/api/v2/pokemon/`)
  fetch(`https://api.pokemontcg.io/v2/cards/?limit=30&offset=30`)
    .then((response) => response.json())
    .then(
            (data) => {
                console.log(data);
                setPokemons(data);
                setIsLoading(false);
            }
        )
    .catch((err) => {
        setHasError(true);     
        setIsLoading(false);
  });
}, []);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (hasError) {
        return <p>Opps.Something wrong!</p>;
    }
    return (
        <div>
            <ShowAll gotItems={pokemons} />
        </div>
    );
}