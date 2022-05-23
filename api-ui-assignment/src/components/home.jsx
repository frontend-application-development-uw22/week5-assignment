import React, { useEffect, useState } from "react";
import ListItem from "./list-Item";

const limit = 20

function PokedexHome() {
    const [offset, setOffset] = useState(0);
    const [pokedexList, setPokedexList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const getPokemon = (newOffset) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${newOffset}`)
        .then(response => response.json())
        .then(data => {
                setPokedexList(data)
                setIsLoading(false);
            },
            error => {
                setHasError(true)
                setIsLoading(false)
            }
        );
    }


    useEffect(() => {
       getPokemon(offset)
    }, []);

    if(isLoading){
        return <p>Loading...</p>
    }

    if(hasError){
        return <p>An error has occurred, please try again later</p>
    }

    const onNext = () => {
        console.log('onNext')
        const newOffset = offset + limit;
        setOffset(newOffset);
        getPokemon(newOffset);
    }

    const onPrev = () => {
        console.log('onPrev')
        const newOffset = offset - limit;
        setOffset(newOffset);
        getPokemon(newOffset);
    }   

    return <>
        <div className="home-container">
        <h1>The Pokedex</h1>
        {offset !== 0 && <button type='button' onClick={onPrev} className="scroll-btn">Prev</button>}
        <button type='button' onClick={onNext}  className="scroll-btn">Next</button>
        {pokedexList.results.map((pokemon) => {
            return <ListItem pokemon={pokemon.name}/>           
        })}
        </div>
    </>
};

export default PokedexHome