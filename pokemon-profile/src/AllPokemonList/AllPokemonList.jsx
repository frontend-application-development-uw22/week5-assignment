import React, { useState } from 'react';
import AllPokemon from './AllPokemon';
import './AllPokemonStyle.css';
import { useNavigate } from "react-router-dom";

export default function AllPokemonList ({itemList}) {
    const [textField, setFieldVal] = useState('');
    const navigate = useNavigate();
    const listOfPokemon = itemList.map((item,idx) => <AllPokemon
    key = {idx+1}
    idx = { idx+1 }
    pokemon = { itemList } />  
);

    const search = (e) => {
        e.preventDefault();
        navigate(`/${textField}`);
    }
   
return (
    <div>
        <header className ="AllPokemonList__header">List of Pokemons</header>  
        <div className="AllPokemonList__header">
            <form onSubmit = {search}>
                <input type="text" value = {textField} onChange = {(e)=> setFieldVal(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>

        <div className = "AllPokemonList__mainconatiner">
            {listOfPokemon}
        </div>
       
    </div>
);
}