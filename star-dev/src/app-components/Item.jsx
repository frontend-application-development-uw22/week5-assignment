import React from 'react'
import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";


export default function Item(){

  const {id} = useParams()

  const { data: item, error} = useFetch('https://pokeapi.co/api/v2/item/'+id)

  return(

    <div className="home">

      {!error && item && (
        <div>

          <Card elevation={2}>

            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                {item.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                Category: {item.category.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Name: {item.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Cost: {item.cost}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
