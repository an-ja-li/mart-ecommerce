import React, { useState, useMemo } from 'react';
import { products } from "../data/productData";
import tableBg from '../Images/table.jpg';
import './Product.css';
import { Search } from 'lucide-react';
import ProductCard from '../Compnents/ProductCard';

const Product = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('sofa');

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

  // Optional: Placeholder for wishlist functionality
  const addToWishlist = (product) => {
    console.log('Added to wishlist:', product);
    // Extend this later to update a wishlist array in state/context
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
      <div className="product-hero"
        style={{
          backgroundImage: `url(${tableBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="product-title">Product</h2>
      </div>

      {/* Filters */}
      <div className="product-controls">
        <select
          value={categoryFilter}
          className="dropdown"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
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
    </div>
  );
};

export default Product;
