import React, { useEffect, useState } from 'react';

export default function CharList() {
  const [character, setCharacter] = useState([]);
  const [selected, setSelected] = useState('');
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then(reply => reply.json())
      .then(data => data.results)
      .then(results => setCharacter([...results, character]))
  }, [])
    
  return (
    <div>
      {character.map((char, index) => {
        return(
          <div key={index} className="card m-2 p-2">
            <div className="card-body">
              <h3 className="card-title">
                  {char.name}
              </h3>
              <button className="btn btn-primary btn-sm" characterIndex={index}>
                More Details
              </button>
            </div>
          </div>
        )})}
    </div> 
  )
}
