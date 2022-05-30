import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from "react-router-dom";

export default function CharacterDetail ()
{
  const { id } = useParams()

  const url = `https://swapi.dev/api/people/${id}/`
  const [character, setCharacter] = useState({})

  useEffect( () =>
  {
    fetch(url)
      .then(response => response.json())
      .then(data =>
      {
        setCharacter(data)
      }, id)
  })

  return (
    <div className="detail">
      <h2>Character Info</h2>
      <div >
        <p>{`Name: ${character.name}`}</p>
        <p>{`Birth Year: ${character.birth_year}`}</p>
        <p>{`Height: ${character.height}`}</p>
        <p>{`Mass: ${character.mass}`}</p>
        <Link to={`/`}>Back</Link>
      </div>
    </div>
  )
}

CharacterDetail.propTypes =
  {

  }
