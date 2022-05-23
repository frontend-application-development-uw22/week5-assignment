import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

export default function Details(characterName) {
  const [characterDetails, setCharacterDetails] = useState('');

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then(reply => reply.json())
      .then(data => data.results)
      .then(results => setCharacterDetails(`${characterName}`))
  }, [])

  return (
    <>
      <h1>Details</h1>
      <div>
        //Need to pull data from obj, .map is for arr.
        {characterDetails.map((char, index) => {
          return(
            <div 
              key={index} 
              className="card m-2 p-2"
            >
              <div className="card-body">
                <div className="card-title">
                    {char.name}
                </div>
                <div className="card-text">
                  Height: {char.height}cm
                  Weight: {char.mass}kg
                  Eye Color: {char.eye_color}
                </div>
              </div>
            </div>
          )})}
      </div> 
    </>
  )
}

// Details.propTypes = {}
