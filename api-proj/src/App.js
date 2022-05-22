import './App.css';
// import Home from './Home';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Character = () => <h1>Character</h1>;

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
        <Route path="character" element={<Character />} />
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
