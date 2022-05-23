import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import Masonry from 'react-masonry-css'
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function BerryList({berrys}) {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  const berryList = berrys.results.map((berry)=>(

    <div key={berry.id}>

      <br/>

      <Card elevation={2}>

        <CardContent>
          <Typography variant='subtitle2' color="textSecondary">

            <Link to={`/berries/${berry.url.split('/')[berry.url.split('/').length-2]}`} style={{
              textDecoration:"none"
            }}>

              <h2>{berry.name}</h2>

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
        {berryList}
      </Masonry>

    </Container>

  )

}

BerryList.propTypes = {
  berrys: PropTypes.arrayOf(PropTypes.object).isRequired
}
