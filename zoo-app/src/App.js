import React from 'react';
import './App.css';
import ZooApp from './components/ZooApp';
import Info from './components/Info';
import {Route, Routes} from 'react-router-dom';

const Home = () => { 
    
    return (
    <div>
      
      <h1>Zoo Animals!</h1>
      <ZooApp/>
    </div>
  )};

  const InfoPage = () => { 

    return (
      <div>
      <h1>Animal Details</h1>
      <Info/>
      </div>
   );}

   function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
      path="animal/:animalName"
      element={<InfoPage/>}
      />
      </Routes>
    </div>
  );
}

export default App;
