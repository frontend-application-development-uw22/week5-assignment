import React, { useState, useEffect } from "react";

export default function Albums({ accessToken }) {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/albums", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        console.log(albums);
      });
  }, []);

  return (
    <div>
      <h3>Albums</h3>
      {albums.items.map((album) => (
        <p>{album.name}</p>
      ))}
    </div>
  );
}
