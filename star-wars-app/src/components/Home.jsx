import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './CharacterDetail'
import '../App.css'

export default function Home ()
{
  const url = `https://swapi.dev/api/people/`
  const [characters, setCharacters] = useState([])

  useEffect( () =>
  {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        {
          setCharacters(data.results)
        }, [])
  })
  return (
    <div>
      <h2>Characters</h2>
      <div className="list-container">
        {characters.map((character, idx) => (
          <Link key={idx} to={`/detail/${character.url.match(/\/\d+\/$/)[0].match(/\d+/)[0]}`}>{character.name}</Link>
        ))}
      </div>
    </div>
  )
}


