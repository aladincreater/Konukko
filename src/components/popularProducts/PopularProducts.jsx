import ProductGrid from "./ProductGrid";
import "./styles/popularProducts.css";
const PopularProducts = () => {
    const eyebrow = "Popular Products";
  return (
    <div>
      <div className="eyebrow-header">
        {eyebrow.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
        <ProductGrid />
        
    </div>
  );
};
export default PopularProducts;
