import React from "react";
import CTAButton from "./CTAButton";

export default function HeroLeft({ eyebrow, title, cta }) {
  return (
    <div className="hero-left">
      <div className="eyebrow">
        {eyebrow.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <h1 className="hero-title">
        {title.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </h1>

      <CTAButton>{cta}</CTAButton>
    </div>
  );
}