import React from 'react'
import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {CardMedia} from '@mui/material';
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function Pokemon(){

  const {id} = useParams()

  const { data: pokemon, error} = useFetch('https://pokeapi.co/api/v2/pokemon/'+id)

  return(

    <div className="home">

      {!error && pokemon && (
        <div>

          <Card elevation={2}>
            <CardMedia
              component="img"
              height="600"
              image={pokemon.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
         <CardContent>

           <Typography gutterBottom variant = "h5" component="div">

             {pokemon.species.name}

           </Typography>

           <Typography variant="body2" color="text.secondary">

             Base Experience: {pokemon.base_experience}

           </Typography>
           <Typography variant="body2" color="text.secondary">

             Height: {pokemon.height}

           </Typography>
           <Typography variant="body2" color="text.secondary">

             Weight: {pokemon.weight}

           </Typography>

         </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
