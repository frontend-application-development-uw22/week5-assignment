import PokeDetails from './PokeDetails'
//import Proptypes from 'prop-types';

export default function PokeCharacters({pokemons, selectPokemon}) {
    const allPokemon = pokemons.map((pokemon,index) =>
      <PokeDetails
          key = {index}
          pokemon = {pokemon} 
          selectPokemon = {selectPokemon}
      />
    )
    return (
        <div className='allPokemon'>
            {allPokemon}
        </div>
    );
}

