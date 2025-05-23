import React, { useState, useMemo } from 'react';
import { products } from "../data/productData";
import tableBg from '../Images/table.jpg';
import './Product.css';
import { Search } from 'lucide-react';
import Footer from '../Compnents/Footer';
import ProductCard from '../Compnents/ProductCard';

const Product = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('sofa');  // Default empty - show all

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const addToWishlist = (product) => {
    console.log('Added to wishlist:', product);
    // Future: update wishlist state or context
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (categoryFilter) {
      filtered = filtered.filter(product =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }
    if (searchTerm.trim()) {
      filtered = filtered.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [searchTerm, categoryFilter]);

  return (
    <div className="product-section">

      {/* Banner */}
      <div className="product-banner" style={{ backgroundImage: `url(${tableBg})` }}>
        <div className="overlay">
          <h1 className="banner-title">
            Explore {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'All'} Products
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="product-controls">
        <select
          value={categoryFilter}
          className="dropdown"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="sofa">Filter By Category   |</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="mobile">Mobile</option>
          <option value="watch">Watch</option>
          <option value="wireless">Wireless</option>
        </select>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="search-icon" size={18} />
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Product;
