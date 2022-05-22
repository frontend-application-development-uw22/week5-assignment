import React, { useEffect, useState } from 'react';
import Animals from './Animals';


function ZooApp() {

    const [animals, setAnimals] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')

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
    
    return (
        <main>
            <div>
                {animals.map((animal, idx) =>
                    <Animals
                        key={idx}
                        animal={animal}
                    />
                )}
            </div>
        </main>
    );
}

export default ZooApp