import React, { useState } from 'react';
import AllPokemon from './AllPokemon';
import './AllPokemonStyle.css';
import { useNavigate } from "react-router-dom";

export default function AllPokemonList ({itemList}) {
    const [textField, setFieldVal] = useState('');
    const navigate = useNavigate();
    const [collectData , setCollectData] = useState([]);
    const [favIdx, setIdx] = useState([])
    const [fav, setFavList] = useState();
    const selectedPokemon = (index) => {
        setIdx([...favIdx, index]);
        setCollectData([...collectData, itemList[index]])
    }
    const removePokemon = (index) => {
        setCollectData([...collectData.slice(0, index), ...collectData.slice(index+1, collectData.length)]);
    }
  
    const listOfPokemon = itemList.map((item,idx) => <AllPokemon
        key = {idx+1}
        idx = { idx+1 }
        pokemon = { itemList }
        selectedPokemon = { ()=> selectedPokemon (idx) }
        removePokemon = { () => removePokemon(idx) }
    />  
);

const favouriteList = () => {
    setFavList(true);
  
}
const favourites = collectData.map((ele, idx) => 
    <AllPokemon
        key = {idx+1}
        idx = { favIdx[idx]+1 }
        pokemon = { collectData }
        selectedPokemon = { ()=> selectedPokemon (idx) }
        removePokemon = { () => removePokemon(idx) }
    />
)

const backToList = () => {
    setFavList(false);
    navigate('/')
}

    const search = (e) => {
        e.preventDefault();
        navigate(`/${textField}`);
    }
   
return (
    <div>
        <header className ="AllPokemonList__header">All Pokemons</header>  
        <div className="AllPokemonList__header">
            <form onSubmit = {search}>
                <input type="text" value = {textField} onChange = {(e)=> setFieldVal(e.target.value)} placeholder = "pokemon name"/>
                <button type="submit">Search</button>
                
            </form>
        </div>
       {fav ? <button onClick = {backToList}>Back to List</button> : <button onClick = {favouriteList}>Favourite List</button> } 
        { fav ?<div className = "AllPokemonList__mainconatiner">{favourites}</div> : <div className = "AllPokemonList__mainconatiner">{listOfPokemon}</div> }
       
       
    </div>
);
}