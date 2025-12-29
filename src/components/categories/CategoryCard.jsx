import React from "react";
// import Image from"../../assets/product1.png";
export default function CategoryCard({ title, image, bg = "#f6f8f6" }) {
  return (
    <div className="category-card">
      <div className="category-media">
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <div className="category-title">{title}</div>
    </div>
  );
}
