import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CarouselCard.css";

export default function CarouselCard({ accessToken, asset, size }) {
  const [currentAsset, setCurrentAsset] = useState(asset);

  const artistSlug = asset.name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <div className={`carousel-card--${size}`}>
      <div>
        <img
          className={`carousel-card__image carousel-card__image--${size}`}
          src={asset.images[0].url}
          alt={asset.name}
        />
      </div>
      <Link
        to={`/${artistSlug}/${asset.id}`}
        state={{ currentArtist: currentAsset, accessToken: accessToken }}
      >
        <h5 className="carousel-card__name">{asset.name}</h5>
      </Link>
    </div>
  );
}

CarouselCard.propTypes = {
  accessToken: PropTypes.string.isRequired,
  asset: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
};
