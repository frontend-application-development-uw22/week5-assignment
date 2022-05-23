import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import Masonry from 'react-masonry-css'
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function PokemonList({pokemons}) {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  const pokemonList = pokemons.results.map((pokemon)=>(

    <div key={pokemon.url}>

      <br/>

      <Card elevation={2}>

        <CardContent>
          <Typography variant='subtitle2' color="textSecondary">

            <Link to={`/pokemons/${pokemon.url.split('/')[pokemon.url.split('/').length-2]}`} style={{
              textDecoration:"none"
            }}>

              <h2>{pokemon.name}</h2>

            </Link>

          </Typography>

        </CardContent>

      </Card>

    </div>

  ))

  return(

    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {pokemonList}
      </Masonry>

    </Container>

  )

}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}
