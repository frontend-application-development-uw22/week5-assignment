import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

export default function ArtistCard({ artist, size, accessToken }) {
  const [currentArtist, setCurrentArtist] = useState(artist);

  const artistSlug = artist.name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <div className={`artist-card--${size}`}>
      <div>
        <img
          className={`artist-card__image artist-card__image--${size}`}
          src={artist.images[0].url}
          alt={artist.name}
        />
      </div>
      <Link
        to={`/${artistSlug}/${artist.id}`}
        state={{ currentArtist: currentArtist, accessToken: accessToken }}
      >
        <h5 className="artist-card__name">{artist.name}</h5>
      </Link>
    </div>
  );
}

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
};
