import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import "./styles/categories.css";

export default function CategoriesGrid({ items = [], initial = 0 }) {
  const [active, setActive] = useState(initial);
  const count = Math.max(items.length, 1);
  return (
    <section className="categories">
      <div className="categories-row" style={{ ["--count"]: count }}>
        {items.map((it, i) => (
          <button
            key={i}
            className={`cat-item ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <CategoryCard {...it} />
          </button>
        ))}
      </div>

      <div className="categories-indicator-wrap" aria-hidden>
        <div
          className="categories-indicator"
          style={{ transform: `translateX(calc(${active} * 100%))`, width: `calc(100% / ${count})` }}
        />
      </div>
    </section>
  );
}
