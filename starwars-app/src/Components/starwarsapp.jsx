import React from 'react';
import { useEffect, useState } from 'react';


export default function StarWarsProfile() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setIsLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Your search is loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred, please try again later.</p>
    }

    return (
        <div>
            <h4>Select a Character</h4>
            <div>{characters.map((character) => {
                return (<characters character={character.name} />)

            })}
            </div>

        </div>
    );
}
