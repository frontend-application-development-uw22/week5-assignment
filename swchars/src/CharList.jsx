import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'


export default function CharList() {
  const [character, setCharacter] = useState([]);
  // function addChar (name) {setCharacter(...name, name)}
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then(reply => reply.json())
      .then(data => data.results)
      .then(results => setCharacter([...results, character]))
      
        // <div className="card m-2 p-2">
          //     <div className="card-body">
          //       <div className="card-title">
          //         {character.name}
          //       </div>
          //     </div>
          // </div>
        
          // {addChar(data.results.map((character, index)));
      // console.log(jsonData)
      // const dataResults = jsonData.results;
      // for (let i = 0; i < dataResults.length; i++) {
      //   // const element = dataResults[i];
      //   return (
      // )})
      // {jsonData.map((name, index) => {addChar(jsonData.results.index)})
        // setCharacter(jsonData.results) 
  }, [])
    //   )
    // }
    
    return (
      <div>
        {character.map((char, index) => {
          return(
            <h1 key={index}>{char.name}</h1>
          )})}
      </div> 

      //   <div 
      //     key={character.index}
      //     className="card m-2 p-2"
      //     >
      //       <div className="card-body">
      //         <div className="card-title">
      //           {character.name}
      //         </div>
      //       </div>
      //     </div>
      //   {/* ))} 
    )
}

// CharList.propTypes = {
//   charName: PropTypes.string.isRequired
// }