import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";
import {Route, Routes}
  from "react-router-dom";
import './App.css';
import {getAccessToken, getGPListData} from './get-data.js';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GPCardList from './components/GPCardList';
import GPPage from './components/GPPage';
import Loading from './components/Loading';

function App() {
  
  const [accessToken, setAccessToken] = useState([]);
  const [gpData, setGPData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshData = async () => {
      const gotAccessToken = await getAccessToken();
      const gotGPData = await getGPListData(gotAccessToken, 98405);
      setGPData(gotGPData);
      setLoading(false);
    }
    refreshData();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  }

  return (
    <div className="App">
        <Header />
        <SearchBar setGPData={setGPData} setLoading={setLoading} />
        <Routes>
          <Route 
            path="/" 
            element={<GPCardList gpData={gpData}/>}
          />
          <Route 
            path="guinea-pigs/:gpId"
            element={<GPPage />} 
          />
          <Route
            path="*"
            element={
              <main>
                <p>404</p>
              </main>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
