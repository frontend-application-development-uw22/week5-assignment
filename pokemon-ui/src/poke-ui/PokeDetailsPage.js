import { useParams } from 'react-router-dom';
//import Proptypes from 'prop-types';

export default function PokeCharacters({selectedPokemon}) {
    const {iChooseYou} = useParams();

    return (
        <div>
            <img src={selectedPokemon.sprites.other["official-artwork"].front_default} alt={selectedPokemon.name} />
            <h1>{iChooseYou}</h1>
            <ul>
                <li>{selectedPokemon.stats[0].stat.name}: {selectedPokemon.stats[0].base_stat}</li>
                <li>{selectedPokemon.stats[1].stat.name}: {selectedPokemon.stats[1].base_stat}</li>
                <li>{selectedPokemon.stats[2].stat.name}: {selectedPokemon.stats[2].base_stat}</li>
                <li>{selectedPokemon.stats[3].stat.name}: {selectedPokemon.stats[3].base_stat}</li>
                <li>{selectedPokemon.stats[4].stat.name}: {selectedPokemon.stats[4].base_stat}</li>
                <li>{selectedPokemon.stats[5].stat.name}: {selectedPokemon.stats[5].base_stat}</li>
            </ul>
        </div>
    )
}