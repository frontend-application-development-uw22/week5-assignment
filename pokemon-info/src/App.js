import './App.css';
import { Route, Routes } from "react-router-dom";
import NavigationBar from './00-main-page/zb-navigation';
import ShowPokemon from './00-main-page/00-list-pokemon';

function App() {

    return (
        <div>
            <NavigationBar />
            
            <h1 className='intro'>Gotta Catch'em All!!!</h1>
            <Routes>
                <Route path="*" element={<ShowPokemon />} />
            </Routes>

        </div>
  );
}

export default App;
