import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Info from './Info';
// import Info from './Info';


function AnimalApp(id) {

    const [animals, setAnimals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    // const [animalDetails, setAnimalDetails] = useState([]);



    // const history = useHistory();

    useEffect(() => {
        fetch('https://acnhapi.com/v1a/sea/')

            .then(response => response.json())

            .then(
                data => {
                    setAnimals(data);
                    setIsLoading(false);
                },

                error => {
                    setHasError(true)
                    setIsLoading(false);

                }
            );


    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    // console.log(animalDetails.name);
    // console.log(animals);

    // console.log(seaCreatures);

    return (
        <main>
            <div className="row info">
                {animals.map((animal, id) =>

                    <div className="row border" key={id}>
                        <div className="info row">
                            <img src={animal.icon_uri} alt={animal.name} />
                            <h2><span>Name: </span>{animal.name["name-USen"]} - <span>id: </span> {animal.id}</h2>
                        </div>
                        <button ><Link to={`/seaID/${animal.id}`}>Species Info</Link></button>
                    </div>

                )}
            </div>

        </main>
    );
}

export default AnimalApp