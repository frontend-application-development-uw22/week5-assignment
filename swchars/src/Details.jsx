import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Details() {
  const { index } = useParams();
  const [characterDetails, setCharacterDetails] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${index}`)
      .then(reply => reply.json())
      .then(data => setCharacterDetails(data))
  }, [])

  return (
    <>
      <h1>Details</h1>
      <div>
        <div className="card m-2 p-2">
          <div className="card-body">
            <div className="card-title">
                {characterDetails.name}
            </div>
            <div className="card-text">
              Height: {characterDetails.height}cm
              Weight: {characterDetails.mass}kg
              Eye Color: {characterDetails.eye_color}
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

// Details.propTypes = {}
