import React from "react";
import { useLocation } from "react-router-dom";
import "./Artist.css";

export default function Artist() {
  const location = useLocation();
  const { currentArtist } = location.state;

  console.log(currentArtist);

  return (
    <div className="artist">
      <img
        className="artist__image"
        src={currentArtist.images[1].url}
        alt="{currentArtist.name}"
      />
      <div className="artist__details">
        <h2 className="artist__name">{currentArtist.name}</h2>
        <p className="artist__followers">
          Followers: {currentArtist.followers.total}
        </p>
        <p>
          <a
            className="artist__link--spotify"
            href={currentArtist.external_urls.spotify}
          >
            Listen on Spotify
          </a>
        </p>
      </div>
    </div>
  );
}
