import React from "react";

export default function CTAButton({ children }) {
  return (
    <button className="cta-btn" type="button">
      <span>{children}</span>
      <span className="arrow">→</span>
    </button>
  );
}