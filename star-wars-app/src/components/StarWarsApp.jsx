import React, { useEffect, useState } from 'react';
import characters from "../images/characters-small.jpg";

function StarWarApp() {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/1/`)
            .then(response => response.json())

            .then(data => {
                setCharacter(data.results);
                setIsLoading(false);
            })
            .catch(() => {
                setHasError(true)
                setIsLoading(false);

            });
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
        <main >
            <h1>Star Wars Characters</h1>
           

            <img className = "small" src={characters} alt="The Star Wars characters"/>
            <h2>Click on the Learn More button to learn more about your favorite character</h2>
            <div className = "row character-list ">
                <p>Name:   </p>
                <button>Learn More</button>
            </div>
        </main>
    );
    // end of return
}
// end of StarWarApp


export default StarWarApp