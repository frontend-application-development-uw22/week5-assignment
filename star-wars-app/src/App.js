
import './App.css';
import StarWarApp from './components/StarWarsApp';
import CharDetails from './components/CharDetails';
import { Route, Routes  } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <StarWarApp />
    </div>
  )
};

const CharDetailsPage = () => {
  // setting up a parameter for results use useParams() - const value is what you put in path under routes
  // const { characterURL } = useParams();

  return (
    <div>
      <h1>Character Details</h1>
      {/* <h2>{githubUserName} </h2> */}
      {/* can pass in username from URL in the compoent by using the useParams value */}
      <CharDetails />
    </div>
  )
};


function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul> */}
          {/* <li><Link to="/">Home</Link></li> */}
          {/* <li><Link to="/character/charName">Character Details</Link></li> */}
        {/* </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="character/:charName"
          element={<CharDetailsPage />}
        />
      </Routes>
      </div>
  );
}

export default App;
