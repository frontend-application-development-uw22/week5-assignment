import React from 'react'
import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function Berry(){

  const {id} = useParams()

  const { data: berry, error} = useFetch('https://pokeapi.co/api/v2/berry/'+id)

  return(

    <div className="home">

      {!error && berry && (
        <div>

          <Card elevation={2}>

            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                {berry.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                Firmness: {berry.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Name: {berry.item.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Smoothness: {berry.smoothness}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
