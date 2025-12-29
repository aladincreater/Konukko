import React from 'react';
import ProductCard from './PoductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
};

export default ProductList;