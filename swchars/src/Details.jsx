import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <h1 className="mt-3">Details</h1>
      <div>
        <div className="card m-2 p-2">
          <div className="card-body">
            <div className="card-title">
                <h3>{characterDetails.name}</h3>
            </div>
            <div className="card-text">
              <p>Height: {characterDetails.height}cm</p>
              <p>Weight: {characterDetails.mass}kg</p>
              <p>Eye Color: {characterDetails.eye_color}</p>
            </div>
          </div>
        </div>
      </div> 
      <Link to="/">&#11013; Back to Character List</Link>
    </>
  )
}

Details.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  mass: PropTypes.number.isRequired,
  eye_color: PropTypes.string.isRequired,
}
