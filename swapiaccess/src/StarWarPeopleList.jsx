import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import StarWarProfile from "./StarWarProfile";

export default function StarWarPeopleList () {
    const [peopleList, setPeopleList] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);
    const [hasError, setHasError] = useState(false);

    const Home = () => <h2>Star War People List</h2>;
    const About = () => <h1>About</h1>;
    const SWProfilePage = () => {
        const {idx} = useParams();
        return (
            <div>
                {idx}
            </div>
        );
    };

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
        .then(response => response.json())
        .then(
            data => {
                // console.log(data.results);
                setPeopleList(data.results);
                setIsLoading(false);
            },
            error => {
                console.log(error);
                setHasError(true);
                setIsLoading(false);
            }
        );

    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error occurred, please try again later.</p>
    }

    const peopleItems = peopleList.map((profile, idx) => {
        // console.log('my profile', profile, idx);
        return (
            <li key={idx}><a href='swprofile/:idx'> {profile.name}</a></li>
        );
    });

    return (
        <div>
        <Routes>
            {/* <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='swprofile/:userID' element={<SWProfilePage />}></Route>
            <link to='swprofile/:userID'>my user profile</link> */}
            <Route path='/' element={<Home />}></Route>
            <Route path='swprofile/:userID' element={<SWProfilePage  />} ></Route>
        </Routes>
        <ul>
            {peopleItems}
        </ul>
        </div>
    );
}

StarWarProfile.protoTypes = {
    userName: PropTypes.string.isRequired
}