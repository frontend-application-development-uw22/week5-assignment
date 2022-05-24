import React from "react";
import "./Carousel.css";
import PropTypes from "prop-types";
import CarouselCard from "./CarouselCard";

export default function Carousel({ accessToken, data, heading, size }) {
  console.log(data);
  return (
    <div className={`carousel--${size}`}>
      <h2 className="carousel-asset__heading">{heading}</h2>
      <div className="carousel-asset__card">
        {data.map((asset) => (
          <CarouselCard
            key={asset.id}
            size={size}
            asset={asset}
            accessToken={accessToken}
          />
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  accessToken: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
