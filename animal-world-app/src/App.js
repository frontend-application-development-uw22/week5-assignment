import React from 'react';
import './App.css';
import AnimalApp from './components/AnimalApp';
import AnimalDetails from './components/AnimalDetails';
import {Route, Routes, Link,  useParams} from 'react-router-dom';

const Home = () => { 
    
    return (
    <div className="container ">

      <h1>Sea Creature Search</h1>

      <AnimalApp

      />
    </div>
  )};

  const AnimalDetailsPage = () => { 
    const {id} = useParams();
    return (
      <div detail-info>
      <h1>Sea Creature Details</h1>
      <ul>
          <li className="link" ><Link to="/">Return Home</Link></li>
        </ul>
      <AnimalDetails
        id={id}
      />
      </div>
   );}

   function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
      path="/seaID/:id"
      element={<AnimalDetailsPage/>}
      />
      </Routes>
    </div>
  );
}

export default App;