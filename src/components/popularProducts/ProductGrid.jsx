import React, { useState } from 'react';
import Tabs from './Tabs';
import ProductList from './ProductList';
import './styles/ProductGrid.css';
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";

const productData = {
  'Top Rated': [
    {
      name: 'Apple Watch Series 8',
      price: 188.0,
      image: product5,
    },
    {
      name: 'TECLAST Tablet Protective Cover Case',
      sale: 12,
      originalPrice: 899.0,
      discountedPrice: 791.12,
      image: product6,
    },
    {
      name: 'ViewSonic Professional Monitor',
      sale: 6,
      originalPrice: 299.0,
      discountedPrice: 281.06,
      image: product7,
    },
    {
      name: 'Buy Guild Planer - 900w',
      price: 239.0,
      image: product8,
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