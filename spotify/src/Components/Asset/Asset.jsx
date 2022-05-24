import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "../Carousel/Carousel";
import "./Asset.css";

export default function Artist() {
  const location = useLocation();
  const [albumList, setAlbumList] = useState([]);
  const { currentArtist, accessToken } = location.state;

  useEffect(() => {
    fetch(
      `http://localhost:8000/albums?accessToken=${accessToken}&id=${currentArtist.id}`
    )
      .then((res) => res.json())
      .then((data) => setAlbumList(data.items));
  }, []);

  return (
    <div className="app">
      <div className="asset">
        <img
          className="asset__image"
          src={currentArtist.images[1].url}
          alt="{currentArtist.name}"
        />
        <div className="asset__details">
          <h2 className="asset__name">{currentArtist.name}</h2>
          <p className="asset__followers">
            Followers: {currentArtist.followers.total}
          </p>
          <p>
            <a
              className="asset__link--spotify"
              href={currentArtist.external_urls.spotify}
            >
              Listen on Spotify
            </a>
          </p>
        </div>
      </div>
      <div>
        <Carousel
          accessToken={accessToken}
          size="small"
          data={albumList}
          heading="Selected Albums"
        />
      </div>
    </div>
  );
}
