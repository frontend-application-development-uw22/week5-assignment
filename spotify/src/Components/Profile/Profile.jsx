import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

export default function Profile({ display_name, country, images }) {
  return (
    <div className="profile">
      <img className="profile__image" src={images[0].url} alt={display_name} />
      <div>
        <h1 className="profile__name">{display_name}'s Spotify Profile</h1>
        <p>Location: {country}</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  display_name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};
