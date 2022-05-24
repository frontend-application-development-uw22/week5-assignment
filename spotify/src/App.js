import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Carousel from "./Components/Carousel/Carousel";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const [profile, setProfile] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState(false);
  const [followedArtists, setFollowedArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  let query = useQuery();

  // Set access token state after successful user authentication
  useEffect(() => {
    const getAccessToken = () => {
      setAccessToken(query.get("access_token"));
    };

    if (query.get("access_token") !== undefined) {
      getAccessToken();
    }
  }, []);

  useEffect(() => {
    const storeAccessToken = () => {
      localStorage.setItem("accessToken", accessToken);
    };

    if (accessToken) {
      storeAccessToken();
    }
  });

  // Call to Spotify API to retrieve authenticated account details after access token has been set
  useEffect(() => {
    const getUserData = () => {
      fetch(`http://localhost:8000/me?access_token=${accessToken}`)
        .then((response) => response.json())
        .then((data) => {
          setProfile(data);
          setProfileLoaded(true);
        });

      fetch("https://api.spotify.com/v1/me/following?type=artist", {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setFollowedArtists(data.artists.items);
        });

      fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlaylists(data.items);
        });
    };

    if (accessToken) {
      getUserData();
    }
  }, [accessToken]);

  return (
    <div className="app">
      {!profileLoaded && <Login />}
      {profileLoaded && (
        <div>
          <div className="header">
            <Profile {...profile} />
          </div>
          <Carousel
            size="small"
            accessToken={accessToken}
            data={followedArtists}
            heading="Followed Artists"
          />
          <Carousel
            size="medium"
            accessToken={accessToken}
            data={playlists}
            heading="Top Playlists"
          />
        </div>
      )}
    </div>
  );
}

export default App;
