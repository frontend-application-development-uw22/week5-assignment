import React from 'react'
import Navbar from './app-components/Navbar';
import Home from './app-components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Machines from "./app-components/Machines";
import Items from "./app-components/Items";
import Berrys from "./app-components/Berrys";
import Pokemons from "./app-components/Pokemons";
import Machine from "./app-components/Machine";
import NotFound from "./app-components/NotFound";
import Item from "./app-components/Item";
import Berry from "./app-components/Berry";
import Pokemon from "./app-components/Pokemon";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route path="/items" element = {<Items />}/>
            <Route path="/items/:id" element = {<Item />}/>
            <Route path="/machines" element = {<Machines />}/>
            <Route path="/machines/:id" element = {<Machine />}/>
            <Route path="/berries" element = {<Berrys />}/>
            <Route path="/berries/:id" element = {<Berry />}/>
            <Route path="/pokemons" element = {<Pokemons />}/>
            <Route path="/pokemons/:id" element = {<Pokemon />}/>
            <Route path="*" element = {<NotFound />}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
