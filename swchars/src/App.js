import './App.css';
import CharList from './CharList';
import Details from './Details';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharList />} />
        <Route 
          path="details/:index"
          element={<Details />}
        />
      </Routes>
      <CharList />
    </div>
  );
}

export default App;
