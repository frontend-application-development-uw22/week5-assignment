import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

export default function CharList() {
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then(reply => reply.json())
      .then(data => {
        return (
          <>
            {data.map((character) => (
              <div 
                key={character.height}
                className="card m-2 p-2"
              >
                <div className="card-body">
                  <div className="card-title">{character.name}</div>
                </div>
              </div>
            ))}
          </>
        )
      });
  })
  return (
    <h1>Character List</h1>
  )
}

// CharList.propTypes = {
//   charName: PropTypes.string.isRequired,
// }
