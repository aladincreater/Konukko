import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import "./styles/hero.css";
import image from "../../assets/image.png";

export default function Hero({
  eyebrow = "Best Ear\nHeadphones",
  title = ["Music To", "Fill Your Heart"],
  cta = "Shop Now",
}) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <HeroLeft eyebrow={eyebrow} title={title} cta={cta} />
        <HeroRight image={image} />
      </div>
    </section>
  );
}