import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PokeDetailsPage({selectedPokemon,allPokemon}) {
    const [pokemonData, setPokemonData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const {iChooseYou} = useParams();
    //let pokeStats = [];
    
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
    },[allPokemon, iChooseYou, selectedPokemon]);

    // if (setIsLoading === false) {
    //     pokemonData.stats.forEach((e,index) => {
    //         pokeStats.push(<li>{pokemonData.stats[index].stat.name}: {pokemonData.stats[index].base_stat}</li>);
    //     });
    //     console.log(pokeStats)
    // }

    // console.log(typeof selectedPokemon)
    // console.log(allPokemon)
    return (
        <div className='pokemonDetails'>
            {isLoading === true && <div>loading...</div>}  
            {isLoading !== true && (
                <>
                    <img src={pokemonData.sprites.other["official-artwork"].front_default} alt={pokemonData.name} />
                    <h2>{pokemonData.name}</h2>
                    <ul>
                        {/* {pokeStats} */}
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

PokeDetailsPage.propTypes = {
    selectedPokemon: PropTypes.oneOfType([PropTypes.string,PropTypes.object]).isRequired,
    allPokemon: PropTypes.array.isRequired
}