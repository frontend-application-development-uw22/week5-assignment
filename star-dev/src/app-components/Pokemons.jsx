import React from 'react';
import PokemonList from './PokemonList'
import useFetch from "./useFetch";
import {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Pokemons() {

  const [offset, setOffset] = useState("0")
  const limit = "20"

  const {error, data: pokemons} = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)

  return(

    <div>

      <div className="pagination-buttons">

        <Stack spacing={2} direction="row">

          <Button onClick={()=>{
            const offsetNumber = Number(offset)
            const previousPage = offsetNumber-20
            setOffset(String(previousPage))
          }} variant="contained" style={{
            // backgroundColor: "#f1356d",
            backgroundColor: "#48C2F9",
            padding: "10px 10px",
            marginTop: "10px",

          }}>Previous</Button>

          <Button onClick={()=>{
            const offsetNumber = Number(offset)
            const nextPage = offsetNumber+20
            setOffset(String(nextPage))
          }} variant="contained" style={{
            // backgroundColor: "#f1356d",
            backgroundColor: "#48C2F9",
            padding: "10px 10px",
            marginTop: "10px",

          }}>Next</Button>

        </Stack>

      </div>

      <div className="home">

        { !error && pokemons && <PokemonList pokemons={pokemons}/>}

        <br/>

        <div className="error-message">

          {error && <div>{error}</div>}

        </div>

      </div>

    </div>

  )

}

