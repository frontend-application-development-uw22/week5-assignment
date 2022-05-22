import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StarWarsCharactersList from './components/StarWarsCharactersList';
import StarWarsCharacterDetails from './components/StarWarsCharacterDetails';

function App() {  
  return (
    <Router>
       <div class="header">
          <h1> STAR WARS - May the Force be with you </h1>
       </div>
       <Switch>
          <Route exact path="/" component={StarWarsCharactersList} />
          <Route path="/details/:id" component={StarWarsCharacterDetails} />
       </Switch>
     </Router>
  );
}

export default App;
