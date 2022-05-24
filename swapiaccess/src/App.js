import { useState } from 'react';
import './App.css';
import StarWarPeopleList from './StarWarPeopleList';
import StarWarProfile from './StarWarProfile';
// import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;
// const SWProfilePage = () => {
//   const {userID} = useParams();

//   return (
//     <div>
//       <StarWarProfile userName={userID} />
//     </div>
//   );
// };

function App() {
  const [username, setUsername] = useState('');
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   setUsername(event.target[0].value);
  // };

  return (
    <div className="App">
      <StarWarPeopleList />
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='swprofile/:userID' element={<SWProfilePage />}></Route>
        <link to='swprofile/:userID'>my user profile</link>
      </Routes> */}
      {/* <form onSubmit={onFormSubmit}>
        <label htmlFor='username-input'>Username: </label>
        <input id='username-input' />
        <button type='submit'>Search</button>
      </form>
      {username && <StarWarProfile username={username}/>} */}
    </div>
  );
}

export default App;
