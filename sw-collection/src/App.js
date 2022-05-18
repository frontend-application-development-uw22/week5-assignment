import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import FavoriteCharacter from "./components/FavoriteCharacter";
import NavBar from "./components/NavBar";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [swData, setSWData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(response => response.json())
      .then(data => {
        setSWData(data.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
      return <p>Loading...</p>;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home itemList={swData}/>} />
        <Route path="/favoritecharacter" element={<FavoriteCharacter />} />
        <Route path="/itemDetail/:itemName" element={<ItemDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
