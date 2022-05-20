import React from "react";
import "./Profile.css";

export default function Profile({ display_name, country, type, images }) {
  return (
    <div className="profile">
      <img className="profile__image" src={images[0].url} alt="sdf" />
      <div>
        <h1 className="profile__name">{display_name}'s Spotify Profile</h1>
        <p>Location: {country}</p>
      </div>
    </div>
  );
}
