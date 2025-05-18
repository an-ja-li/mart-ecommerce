import React, { useState, useMemo } from 'react';
import { products } from "../data/productData"; // Make sure path is correct
import "./Product.css";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

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
      <h2 className="product-title">Product</h2>

      <div className="product-controls">
        <select
          value={categoryFilter}
          className="DROPDOWN"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="sofa">Filter By Category</option>
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
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((item) => (
         <div key={item.id} className="product-card">
          <img src={item.imgUrl} alt={item.productName} />
          <h3>{item.productName}</h3>
          <div className="stars">
            {"★".repeat(Math.round(item.avgRating))} ({item.avgRating.toFixed(1)})
          </div>
          <p className="price">${item.price}</p>
          <button className="add-button">＋ Add</button>
        </div>

        ))}
      </div>
    </div>
  );
};

export default Product;
