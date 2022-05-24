import React from 'react';
import { useEffect, useState } from 'react';

export default function CharacterProfile() {
    const [characterDetail, setDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?search={characterDetail}`)
            .then(response => response.json())
            .then(data => {
                setDetails(data.results);
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
            <h4>{characterDetail}</h4>
            <div>{characterDetail.map((character) => {
                return (<characters character={character.name} />)

            })}
            </div>

        </div>
    );
}
