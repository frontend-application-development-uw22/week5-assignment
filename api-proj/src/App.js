import './App.css';
import Home from './Home';
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target[0].value);
  };

  return (
    <div className="">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="search-input">Search: </label>
        <input id="search-input" />
        <button type="Submit">Find Character</button>
      </form>
      {searchInput && <Home character={searchInput} />}
    </div>
  );
}

export default App;
