import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom"; import './App.css';
import Home from './components/Home';
import PokemonCharacter from './components/PokemonCharacter';

function App() {

  return (
    <div className='App'>
      <nav>
        <p><Link to="/"> Home </Link></p>
        <p><Link to="/pokemoncharacter"> Pokemon Character Page </Link></p>
      </nav>
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemoncharacter/" element={<PokemonCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
