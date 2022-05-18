import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

function Home({ character }) {

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${character}`)
      .then(reply => reply.json())
      .then(data => console.log(data))
  })

  return (
    <div>Profile for {character}</div>
  )
}

// Home.propTypes = {}

export default Home
