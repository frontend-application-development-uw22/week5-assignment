import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

export default function Artist({ artist }) {
  function playAlbum() {
    fetch(`http://localhost:8000/play`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const artistSlug = artist.name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <div className="artist-card">
      <div>
        <img className="artist-card__image" src={artist.images[0].url} alt="" />
      </div>
      <Link to={`/artist/${artistSlug}/${artist.id}`}>
        <h5 className="artist-card__name">{artist.name}</h5>
      </Link>
    </div>
  );
}
