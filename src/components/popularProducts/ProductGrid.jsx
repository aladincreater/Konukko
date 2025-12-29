import React, { useState } from 'react';
import Tabs from './Tabs';
import ProductList from './ProductList';
import './styles/ProductGrid.css';

const productData = {
  'Top Rated': [
    {
      name: 'Apple Watch Series 8',
      price: 188.0,
      image: '/src/assets/product5.png',
    },
    {
      name: 'TECLAST Tablet Protective Cover Case',
      sale: 12,
      originalPrice: 899.0,
      discountedPrice: 791.12,
      image: '/src/assets/product6.png',
    },
    {
      name: 'ViewSonic Professional Monitor',
      sale: 6,
      originalPrice: 299.0,
      discountedPrice: 281.06,
      image: '/src/assets/product7.png',
    },
    {
      name: 'Buy Guild Planer - 900w',
      price: 239.0,
      image: '/src/assets/product8.png',
    },
  ],
  'Best Selling': [],
  'Latest Product': [],
};

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('Top Rated');

  return (
    <div className="ProductGrid">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductList products={productData[activeTab]} />
    </div>
  );
};

export default ProductGrid;