import React, { useEffect, useState } from 'react';
import charactersImg from "../images/characters-small.jpg";
import luke from "../images/luke-skywalker.jpg";

function StarWarApp() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // fetch(`https://randomuser.me/api/?results=1`)
        fetch(`https://swapi.dev/api/people/`)
            .then(response => response.json())

            .then(data => {
                setCharacters(data.results[0]);
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
           

            <img className = "small" src={charactersImg} alt="The Star Wars characters"/>
            <h2>Click on the button to learn more about your favorite character</h2>
            <section className="row row-center">
            <div className="character-list">
                <img className="character-img" src={luke} alt="Luke holding a light sabre"/>
                <p>{characters.name}</p>
                <button>Learn More</button>
            </div>
             </section>
        </main>
    );
    // end of return
}
// end of StarWarApp


export default StarWarApp