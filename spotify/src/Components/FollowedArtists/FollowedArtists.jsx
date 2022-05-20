import React, { useState, useEffect } from "react";
import "./FollowedArtists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

export default function FollowedArtists({ accessToken }) {
  const [followedArtists, setFollowedArtists] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/following?type=artist", {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFollowedArtists(data.artists.items);
        console.log(followedArtists);
      });
  }, []);

  return (
    <div className="followed-artists">
      <h2 className="followed-artists__heading">Followed Artists</h2>
      <div className="followed-artist__card">
        {followedArtists.map((artist) => (
          <ArtistCard artist={artist} />
        ))}
      </div>
    </div>
  );
}
