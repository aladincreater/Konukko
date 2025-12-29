import React from "react";

export default function HeroRight({ image }) {
  return (
    <div className="hero-right" aria-hidden>
      <div className="hero-circle" />
      <div className="hero-image-wrap">
        <img src={image} alt="" className="hero-image" />
      </div>
    </div>
  );
}