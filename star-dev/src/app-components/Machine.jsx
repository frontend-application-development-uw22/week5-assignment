import React from 'react'
import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";


export default function Machine(){

  const {id} = useParams()

  const { data: machine, error} = useFetch('https://pokeapi.co/api/v2/machine/'+id)

  return(

    <div className="home">

      {!error && machine && (
        <div>

          <Card elevation={2}>

            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                Item: {machine.item.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                Category: {machine.move.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Name: {machine.version_group.name}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
