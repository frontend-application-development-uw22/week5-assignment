import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
// import profile from './Profile1.json'

export default function StarWarProfile ( {userName}) {
    const [profile, setProfile] = useState(undefined);
    const [isLoading, setIsLoading ] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${userName}`)
        .then(response => response.json())
        .then(
            data => {
                setProfile(data);
                setIsLoading(false);
            },
            error => {
                console.log(error);
                setHasError(true);
                setIsLoading(false);
            }
        );

        // const getUser = async () => {
        //     try {
        //     const response = await fetch(`https://swapi.dev/api/people/${userName}`);
        //     const data = await response.json();
        //     setProfile(data);
        //     setIsLoading(false);
        //     } catch {
        //         setHasError(true);
        //         setIsLoading(false);
        //     }
        // };
        // getUser();

        // // fetch(`https://randomuser.me/api/?results=${userName}`)
        // fetch(`https://swapi.dev/api/people/${userName}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setProfile(data);
        //         setIsLoading(false);
        //         })
        //     .catch ((error) => {
        //             console.log(error);
        //             setHasError(true);
        //             setIsLoading(false);
        //     });
    }, [userName]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error occurred, please try again later.</p>
    }

    return (
        <div>
            <h2>Star War Profile for {profile.name}</h2>
            <Link to='/'>Return to Star War People List</Link>
            <br />
            <br />
            <table>
                <thead>
                    <tr><th>Facts</th><th>Value</th></tr>
                </thead>
                <tbody>
                    <tr><th>Hair color</th><td>{profile.hair_color}</td></tr>
                    <tr><th>Skin color</th><td>{profile.skin_color}</td></tr>
                    <tr><th>Eye color</th><td>{profile.eye_color}</td></tr>
                    <tr><th>Birth Year</th><td>{profile.birth_year}</td></tr>
                </tbody>
            </table>
        </div>
    );
}

StarWarProfile.protoTypes = {
    userName: PropTypes.string.isRequired
}