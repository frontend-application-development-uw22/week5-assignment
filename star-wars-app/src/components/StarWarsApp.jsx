import React, { useEffect, useState } from 'react';
import charactersImg from "../images/characters-small.jpg";
import Characters from "./Characters";

function StarWarsApp() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);


    useEffect(() => {

        fetch(`https://swapi.dev/api/people/`)
            .then(response => response.json())

            .then(data => {
                setCharacters(data.results);
                setIsLoading(false);
                // console.log(characters);
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

            <img className="small" src={charactersImg} alt="The Star Wars characters" />
            <h3>Click on the button to learn more about your favorite character</h3>
            <section key="index" className="row">
                {characters.map((character, index) =>
                    <Characters
                        key={index}
                        character={character}
                    />
 
                )}
            </section>
        </main>
    );
    // end of return
}
// end of StarWarApp


export default StarWarsApp