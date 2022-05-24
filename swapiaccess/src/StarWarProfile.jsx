import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import profile from './Profile1.json'

export default function StarWarProfile ( {username}) {
    const [profile, setProfile] = useState(undefined);
    const [isLoading, setIsLoading ] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${username}`)
        // fetch(`https://randomuser.me/api/?results=${username}`)
            .then(response => response.json())
            .then(data => {
                setProfile(data);
                setIsLoading(false);
                })
            .catch ((error) => {
                    console.log(error);
                    setHasError(true);
                    setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error occurred, please try again later.</p>
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <table>
                <tr><th>Facts</th><th>Value</th></tr>
                <tr><td>Hair color</td><td>{profile.hair_color}</td></tr>
                <tr><td>Skin color</td><td>{profile.skin_color}</td></tr>
                <tr><td>Eye color</td><td>{profile.eye_color}</td></tr>
            </table>
        </div>
    );
}

StarWarProfile.protoTypes = {
    username: PropTypes.string.isRequired
}