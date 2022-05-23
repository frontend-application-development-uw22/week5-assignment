import React from 'react';
import './App.css';
import AnimalCrossingApp from './components/AnimalCrossingApp';
import VillagersInfo from './components/VillagerInfo';
import {Route, Routes} from 'react-router-dom';

const Home = () => { 
    
    return (
    <div>
      
      <h1>Villagers!</h1>
      <AnimalCrossingApp/>
    </div>
  )};

  const InfoPage = () => { 

    return (
      <div>
      <h1>Villager Details</h1>
      <VillagersInfo/>
      </div>
   );}

   function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
      path="villager/:id"
      element={<InfoPage/>}
      />
      </Routes>
    </div>
  );
}

export default App;
