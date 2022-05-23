import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function AnimalCrossingApp() {

    const [villagers, setVillagers] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('https://acnhapi.com/v1a/villagers/')

            .then(response => response.json())

            .then(
                data => {
                    setVillagers(data);
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
    
    return (
        <main>
            <div>
                {villagers.map((villager, idx) =>
                    <div key='index'>
                    <h2>{villager.name["name-USen"]}</h2>
                    <h3>ID: {villager.id}</h3>
                    <button><Link to="villager/:id">Villager Info</Link></button>
                </div>
                )}
            </div>
        </main>
    );
}

export default AnimalCrossingApp