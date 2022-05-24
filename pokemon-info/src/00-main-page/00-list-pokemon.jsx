import React from 'react';
import {Routes, Route} from 'react-router-dom'
import ListPokemon from './01-create-pokemon-card';
import Pokemon from './02-pokemon';

export default function ShowPokemon() {
    return (
    <div className="main-page-display">
        <Routes>
            <Route path="/" element= {
                <div className="enclosure">
                    <ListPokemon pokemonId='1'/>
                    <ListPokemon pokemonId='2'/>
                    <ListPokemon pokemonId='3'/>
                    <ListPokemon pokemonId='4'/>
                    <ListPokemon pokemonId='5'/>
                    <ListPokemon pokemonId='6'/>
                    <ListPokemon pokemonId='7'/>
                    <ListPokemon pokemonId='8'/>
                    <ListPokemon pokemonId='9'/>
                    <ListPokemon pokemonId='10'/>
                    <ListPokemon pokemonId='11'/>
                    <ListPokemon pokemonId='12'/>
                    <ListPokemon pokemonId='13'/>
                    <ListPokemon pokemonId='14'/>
                    <ListPokemon pokemonId='15'/>
                    <ListPokemon pokemonId='16'/>
                    <ListPokemon pokemonId='17'/>
                    <ListPokemon pokemonId='18'/>
                    <ListPokemon pokemonId='19'/>
                    <ListPokemon pokemonId='20'/>
                </div>
            }>
                </Route>
                <Route path=':pokemonName' element={<Pokemon />} />
        </Routes>
    </div>
    )
}