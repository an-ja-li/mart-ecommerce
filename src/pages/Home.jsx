import React from 'react';
import { serviceData } from '../data/serviceData';
import FeatureCard from '../Compnents/FeatureCard';
import HeroSlider from '../Compnents/HeroSlider';
import ProductCard from '../Compnents/ProductCard';
import { discoutProducts, products } from "../data/productData";
import "./Home.css";

const Home = ({ cartItems, setCartItems }) => {
  // Simple addToCart
  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Placeholder for wishlist functionality
  const addToWishlist = (product) => {
    console.log("Added to wishlist:", product.productName);
  };

  // Filter products for New Arrivals (mobile + wireless)
  const mobileProducts = products.filter(
    (item) =>
      item.category.toLowerCase() === "mobile" || item.category.toLowerCase() === "wireless"
  );

  return (
    <div className="home-container">
      {/* Slider Section */}
      <section className="home-slider-section">
        <HeroSlider />
      </section>

      {/* Features Section */}
      <section className="services-container">
        {serviceData.map(({ iconName, title, subtitle, bg }, index) => (
          <FeatureCard
            key={index}
            iconName={iconName}
            title={title}
            description={subtitle}
            bgColor={bg}
          />
        ))}
      </section>

      {/* Discount Products Section */}
      <div className="home-discount-section">
        <h2 className="home-section-title">Big Discount</h2>
        <div className="home-product-grid">
          {discoutProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              showDiscount={true}
              discount={item.discount}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="home-new-arrivals-section">
        <h2 className="home-section-title">New Arrivals</h2>
        <div className="home-new-arrivals-grid">
          {mobileProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
