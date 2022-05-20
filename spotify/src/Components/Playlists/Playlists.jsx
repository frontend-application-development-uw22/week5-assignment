import React, { useState, useEffect } from "react";

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
      <h3 className="playlists">Playlists</h3>
      {dataLoaded &&
        playlists.items.map((playlist) => {
          return (
            <>
              <p className="playlists">{playlist.name}</p>
              <div>
                <img src={playlist.images[0].url} alt="" />
              </div>
            </>
          );
        })}
    </div>
  );
}
