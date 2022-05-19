import React, {useState, useEffect} from 'react';
import './App.css';
import GPCardList from './components/GPCardList';

function App() {
  
  const [accessToken, setAccessToken] = useState([]);
  const [gpData, setGPData] = useState([]);

  useEffect(() => {
    // getAccessToken //////////////////////////////////////////////////////////
    // Returns an access token from petfinder.com.
    const getAccessToken = async () => {
      const gotAccessToken = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: "grant_type=client_credentials&client_id=pnIwAePqMP6iENJBYvs24T7RHVS3qeyiNX1q0Q056DN7WvVC80&client_secret=ciQLt1H1fIJPmqpDucZ5odp0upsB1MfXGDA4SyZZ",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      })
      .catch(() => {
        console.log(
          `Failed [access_token] request to petfinder.com.
          Do you have the [client_id] and [client_secret]?`
        );
      })
      // Convert response to JSON,
      .then((fetchedResponse) => {
        return fetchedResponse.json();
      })
      // Extract & return [access_token] from response.
      .then((jsonifiedResponse) => {
        return jsonifiedResponse.access_token;
      })
      .catch(() => {
        console.log("Cannot retrieve [access_token] from petfinder.com.");
      })
      return gotAccessToken;
    }
    // getGPData ///////////////////////////////////////////////////////////////
    // Returns guinea pig data given a petfinder.com access token.
    const getGuineaPigData = async (gotAccessToken) => {
      const gotGPData = fetch("https://api.petfinder.com/v2/animals/?type=small-furry&location=98405&sort=distance", {
        headers: {
          Authorization: `Bearer ${gotAccessToken}`
        }
      })
      .catch(() => {
        console.log("Cannot fetch guinea pig data.");
      })
      // Convert response to JSON,
      .then((fetchedResponse) => {
        return fetchedResponse.json();
      })
      // Extract & return [animals] array from response.
      .then((jsonifiedResponse) => {
        return jsonifiedResponse.animals;
      })
      return gotGPData;
    }
    // refreshData /////////////////////////////////////////////////////////////
    // Gets & sets the [accessToken] and [gpData].
    const refreshData = async () => {
      let gotAccessToken = await getAccessToken();
      setAccessToken(gotAccessToken);
      let gotGPData = await getGuineaPigData(gotAccessToken);
      setGPData(gotGPData);
    }
    refreshData();
  }, []);

  return (
    <div className="App">
      <GPCardList 
        gpData={gpData}
      />
    </div>
  );
}

export default App;
