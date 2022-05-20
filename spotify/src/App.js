import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Playlists from "./Components/Playlists/Playlists";
import FollowedArtists from "./Components/FollowedArtists/FollowedArtists";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const [profile, setProfile] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);

  let query = useQuery();
  let token = query.get("access_token");

  useEffect(() => {
    const getProfile = () => {
      fetch(`http://localhost:8000/me?access_token=${token}`)
        .then((response) => response.json())
        .then((data) => {
          setProfile(data);
          setProfileLoaded(true);
        });
    };
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <div className="app">
      {!profileLoaded && <Login />}
      {profileLoaded && (
        <div>
          <div className="header">
            <Profile {...profile} />
          </div>
          <FollowedArtists accessToken={token} />
          <Playlists accessToken={token} />
        </div>
      )}
    </div>
  );
}

export default App;
