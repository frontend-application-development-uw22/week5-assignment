import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

function Home({ character }) {
  const [profile, setProfile] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const[hasError, setHasError] = useState(false);

  // For practice:
  // useEffect(() => {
  //   const getCharacter = async () => {
  //     try { 
  //       const reply = await fetch(`https://swapi.dev/api/people/?search=${character}`);
  //       const data= await reply.json();
  //       setProfile(data.results[0]);
  //       setIsLoading(false);
  //     } catch {
  //       setHasError(true);
  //       setIsLoading(false);
  //     }
  //   }
  //   getCharacter();
  // });

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${character}`)
      .then(reply => reply.json())
      .then(
        data => {
          setIsLoading(false);
          setProfile(data.results[0])
        },
        // Error handling here to avoid .catch{}-ing unrelated errors
        error => {
          setHasError(true);
          setIsLoading(false);
        }
      )
      // Need character in dependency list so useEffect() re-runs if/when it changes
  }, [character]);

  if (isLoading) {
    return <div>Obtaining data...</div>
  }

  if (hasError) {
    <div>Sorry, an error occured, please try again later.</div>
  }

  return (
    <div>
      <h2>{profile.name}</h2>
    </div>
  )
}

// Home.propTypes = {}

export default Home
