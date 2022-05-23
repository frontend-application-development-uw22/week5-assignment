import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import Masonry from 'react-masonry-css'
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function MachineList({machines}) {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  const machineList = machines.results.map((machine)=>(

    <div key={machine.url}>

      <br/>

      <Card elevation={2}>

        <CardContent>
          <Typography variant='subtitle2' color="textSecondary">

            <Link to={`/machines/${machine.url.split('/')[machine.url.split('/').length-2]}`} style={{
              textDecoration:"none"
            }}>

              <h2>{machine.url.split('/')[machine.url.split('/').length-2]}</h2>

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
        {machineList}
      </Masonry>

    </Container>

  )

}

MachineList.propTypes = {
  machines: PropTypes.arrayOf(PropTypes.object).isRequired
}
