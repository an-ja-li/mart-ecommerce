import React, { useState, useMemo } from 'react';
import { serviceData } from '../data/serviceData';
import FeatureCard from '../Compnents/FeatureCard';
import HeroSlider from '../Compnents/HeroSlider';
import { discoutProducts } from "../data/productData";
import { products } from "../data/productData";
import "./Home.css";

const Home = ({ cartItems, setCartItems }) => {
  // Simple addToCart (same as Product.jsx)
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


  const mobileProducts = products.filter(
    (item) => item.category.toLowerCase() === "mobile"
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
      <div className="discount-section">
        <h2 className="discount-title">Big Discount</h2>
        <div className="discount-grid">
          {discoutProducts.map((item) => (
            <div key={item.id} className="product-card">
              <span className="discount-badge">{item.discount}% Off</span>

              <button
                className="wishlist-icon"
                title="Add to Wishlist"
                onClick={(e) => {
                  e.stopPropagation();
                  addToWishlist(item);
                }}
              >
                ♥
              </button>

              <img
                src={item.imgUrl}
                alt={item.productName}
                className="product-image"
              />
              <h3 className="product-name">{item.productName}</h3>
              <div className="product-rating">
                {Array(5).fill().map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p>
                <span className="price">${item.price}</span>
                <button
                  className="add-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                >
                  ＋
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>



      {/* new arrival */}


      <div>
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {mobileProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.imgUrl} alt={item.productName} className="product-img" />
            <h4>{item.productName}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

export default Home;
