import React, { useEffect, useState} from "react";
import luke from "../images/luke-skywalker.jpg"
// import {Link} from 'react-router-dom';


function CharDetails() {
    const [charDetail, setCharDetail] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

  useEffect(() => {
     fetch("https://swapi.dev/api/people/3/")

        .then(response => response.json())

        .then(
            data => {
            setCharDetail(data);
            setIsLoading(false);
            },
            // .error handling
            error => {
            setHasError(true)
            setIsLoading(false);

            }
        );


    }, []);

    // end of useEffect


    if (isLoading) {
        return <p>Loading...</p>
    }
    // end of isLoading

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    // end of hasError

  return ( 
    <div>
        <img className = "character-img" src = {luke}alt = "Luke Skywalker" / >
        <h2 > {charDetail.name}</h2>
        <p > <span> Hair Color: </span>{charDetail.hair_color}</p>
        <p> <span> Eye Color: </span>{charDetail.eye_color}</p>
        <p > <span> Height: </span>{charDetail.height} cm</p>
    </div>
  )

}

export default CharDetails
