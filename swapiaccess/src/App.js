import React, { useEffect, useState } from "react";
import './App.css';
import StarWarProfile from './StarWarProfile';
import {Link, BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

const Home = () => <h2>Star War People List</h2>;
// const About = () => <h1>About</h1>;
// const SWProfilePage = () => {
//   const {userID} = useParams();

//   return (
//     <div>
//       <StarWarProfile userName={userID} />
//     </div>
//   );
// };
const SWProfilePage = () => {
  const {idx} = useParams();
  return (
      <div>
          <StarWarProfile userName={idx} />
      </div>
  );
};

function App() {
  // const [username, setUsername] = useState('');
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   setUsername(event.target[0].value);
  // };
  const [peopleList, setPeopleList] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);
  const [hasError, setHasError] = useState(false);
  
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
        <li key={idx}><a href={'/swprofile/' + (idx+1)}> {profile.name}</a></li>
    );
});

  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='swprofile/:idx' element={<SWProfilePage />} ></Route>
        </Routes>
        <ul>
            {peopleItems}
        </ul>
      
    </div>
  );
}

export default App;
