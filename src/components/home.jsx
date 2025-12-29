import Hero from "./hero/Hero";
import NavBar from "./navBar/navBar";
import { SearchBar } from "./utils/searchBar";
import { TypeWriter } from "./utils/typewriter";
import { useState } from "react";
import CategoriesGrid from "./categories/CategoriesGrid";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import PopularProducts from "./popularProducts/PopularProducts";
export const Home = () => {
  const messages = [
    "Welcome to your next favorite store...",
    "Discover products that spark joy...",
    "Shop smart. Live better...",
    "Unbox happiness, one click at a time...",
    "Your cart is waiting for something amazing...",
  ];
  const [value, setValue] = useState("");

  const submitHandler = () => {
  };
  return (
    <>
        <NavBar />
        <Hero
        eyebrow={"Best Ear\nHeadphones"}
        title={["Music To", "Fill Your Heart"]}
        cta="Shop Now"
      />
     <CategoriesGrid
          items={[
            { title: "Exercise Bike & Shaver Clean", image: product1, bg: "#f3f6f3" },
            { title: "Wireless & Watches", image: product2, bg: "#fde8e6" },
            { title: "Camera Bluetooth & Headset", image: product3, bg: "#e9f9ee" },
            { title: "Ipad Phone & Tablets", image: product4, bg: "#f3eefe" },
          ]}
        />
      <PopularProducts />
    </>
  );
};
