import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import Proptypes from 'prop-types';

export default function PokeCharacters({selectedPokemon,allPokemon}) {
    const [pokemonData, setPokemonData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const {iChooseYou} = useParams();
    
    useEffect(() => {
        if (selectedPokemon === '') {
            fetch(allPokemon[iChooseYou-1].url)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data)
                setIsLoading(false);
            })
        } else {
            setPokemonData(selectedPokemon)
            setIsLoading(false);
        }
    },[allPokemon, iChooseYou, selectedPokemon])

    return (
        <div>
            {isLoading === true && <div>loading...</div>}  
            {isLoading !== true && (
                <>
                    <img src={pokemonData.sprites.other["official-artwork"].front_default} alt={pokemonData.name} />
                    <h1>{pokemonData.name}</h1>
                    <ul>
                        <li>{pokemonData.stats[0].stat.name}: {pokemonData.stats[0].base_stat}</li>
                        <li>{pokemonData.stats[1].stat.name}: {pokemonData.stats[1].base_stat}</li>
                        <li>{pokemonData.stats[2].stat.name}: {pokemonData.stats[2].base_stat}</li>
                        <li>{pokemonData.stats[3].stat.name}: {pokemonData.stats[3].base_stat}</li>
                        <li>{pokemonData.stats[4].stat.name}: {pokemonData.stats[4].base_stat}</li>
                        <li>{pokemonData.stats[5].stat.name}: {pokemonData.stats[5].base_stat}</li>
                    </ul>
                </>
            )}
        </div>
    )
}