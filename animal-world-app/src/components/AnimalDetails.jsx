import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
 

function AnimalDetails() {

  const { id } = useParams();

  console.log({ id });

  const [animalDetail, setAnimalDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  // const baseURL = `https://acnhapi.com/v1a/sea/`;
  // const url = `${baseURL}${id}`;

  console.log({ id });

  useEffect((id) => {
    fetch(`https://acnhapi.com/v1a/sea/` + {id})

      .then(response => response.json())

      .then(
        data => {
          setAnimalDetail(data);
          setIsLoading(false);
        },

        error => {
          setHasError(true)
          setIsLoading(false);

        }
      );


  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (hasError) {
    return <p>An error has occurred.  Please try again.</p>
  }

  // console.log(animalDetail);


  return (

    <div>
      <div key={animalDetail.id} >
        <img className = "detail-img" src={animalDetail[`image_uri`]} alt={animalDetail[`file-name`]} />
        <div className="detail-info"  >
          <p><span>Name:  </span> {animalDetail.name[`name-USen`]}</p>
          <p><span>Speed:  </span>  {animalDetail.speed}</p>
          <p><span>Catch Phrase:  </span>  {animalDetail[`catch-phrase`]}</p>
          <p><span>Fun Facts:  </span>  {animalDetail[`museum-phrase`]}</p>

        </div>
        <ul>
          <li className="link" ><Link to="/">Return Home</Link></li>
        </ul>
      </div>

    </div>

  )
}

export default AnimalDetails