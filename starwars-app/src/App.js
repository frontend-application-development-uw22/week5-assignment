import './App.css';
import StarWarsProfile from './Components/starwarsapp';
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Details from './Components/details';


const Characters = () => {
 return (
    <div>
      <h1>Select your favorite Star Wars Character</h1>
      <StarWarsProfile />
    </div>
  )
};
const CharacterProfilePage = () => {
  const { characterDetail } = useParams();
  return (
    <div>
      <h1>Character Profile</h1>
      <Details characterName={characterDetail} />
    </div>
  )
}

function App() {
  // const [characterName, setCharName] = useState('');
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   setCharName(event.target[0].value);
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="characters" element={<Characters />} />
        <Route path="character-name/:characterName" element={<CharacterProfilePage />} />
      </Routes>
      <StarWarsProfile />

      {/* <form onSubmit={onFormSubmit}>
      <label htmlFor='characterName-input'>Character Name: </label>
      <input id='characterName-input' />
      <button type='submit'>Search</button>
      </form>
      {characterName && <StarWarsProfile characterName={characterName} />} */}
    </div>
  );
}

export default App;

