import React, { useState, useEffect } from "react";
import "./Playlists.css";

export default function Playlists({ accessToken }) {
  const [playlists, setPlaylists] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
        setDataLoaded(true);
      });
  }, []);

  return (
    <div>
      <h2 className="playlists__heading">Playlists</h2>
      <div className="playlists">
        {dataLoaded &&
          playlists.items.map((playlist) => {
            return (
              <div className="playlists__details">
                <div>
                  <img
                    className="playlists__image"
                    src={playlist.images[0].url}
                    alt=""
                  />
                </div>
                <p className="" playlists__name>
                  {playlist.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
