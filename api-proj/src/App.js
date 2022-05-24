import './App.css';
// import Home from './Home';
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import CharacterProfile from './CharacterProfile';

const Home = () => <h1>Home</h1>;
const Character = () => <h1>Character</h1>;
const CharacterPage = () => {
  const {characterName} = useParams();

  return (
    <div>
      <h2>Character Profile</h2>
      <CharacterProfile character={characterName} />
    </div>
  )
}

function App() {
  const [searchInput, setSearchInput] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target[0].value);
  };

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="character/:characterName" 
          element={<CharacterPage />} 
        />
      </Routes>
      {/* <form onSubmit={onFormSubmit}>
        <label htmlFor="search-input">Search: </label>
        <input id="search-input" />
        <button type="Submit">Find Character</button>
      </form>
      {searchInput && <Home character={searchInput} />} */}
    </div>
  );
}

export default App;
