import React from 'react';
import './styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
        <div className="icon-panel">
          <button className="side-icon">❤️</button>
          <button className="side-icon">👁</button>
          <button className="side-icon">🔗</button>
        </div>
        <div className="add-to-cart">Add to Cart</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        {product.sale ? (
          <p className="price">
            <span className="original-price">${product.originalPrice}</span>
            <span className="discounted-price">${product.discountedPrice}</span>
            <span className="sale-tag">-{product.sale}%</span>
          </p>
        ) : (
          <p className="price">${product.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;