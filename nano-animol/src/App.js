import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";
import {Link, Outlet, Route, Routes, useLocation, useNavigate, useParams}
  from "react-router-dom";
import './App.css';
import {getAccessToken, getGPListData} from './get-data.js';
import GPCardList from './components/GPCardList';
import GPPage from './components/GPPage';

function App() {
  
  const [accessToken, setAccessToken] = useState([]);
  const [gpData, setGPData] = useState([]);

  useEffect(() => {
    // refreshData /////////////////////////////////////////////////////////////
    // Gets & sets the [accessToken] & [gpData].
    const refreshData = async () => {
      const gotAccessToken = await getAccessToken();
      setAccessToken(gotAccessToken);
      const gotGPData = await getGPListData(gotAccessToken);
      setGPData(gotGPData);
    }
    refreshData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={<GPCardList gpData={gpData} accessToken={accessToken}/>}
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
