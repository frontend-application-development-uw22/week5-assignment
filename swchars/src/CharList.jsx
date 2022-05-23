import React, { useEffect, useState } from 'react';

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
      {character.map((char, index) => {
        return(
          <div className="card m-2 p-2">
            <div className="card-body">
              <div 
                className="card-title" 
                key={index}>
                  {char.name}
              </div>
            </div>
          </div>
        )})}
    </div> 
  )
}
