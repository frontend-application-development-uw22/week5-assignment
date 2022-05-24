import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CharList() {
  const [character, setCharacter] = useState([]);
    
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then(reply => reply.json())
      .then(data => data.results)
      .then(results => setCharacter([...results, character]))
  }, [])
    
  return (
    <div>
      <h1 className="mt-3">Character List</h1>
      <div>Select a character for more details</div>
      {character.map((char, index) => {
        return(
          <div key={index} className="card m-2 p-2">
            <div className="card-body">
{/* Index +1 to compensate for arrays starting at 0*/}
              <Link 
                to={`details/${index+1}`}
                className="card-title"
              >
                {char.name}
              </Link>
            </div>
          </div>
        )})}
    </div> 
  )
}

CharList.propTypes = {
  name: PropTypes.string.isRequired,
}