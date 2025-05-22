import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, addToCart }) => {
  const navigate = useNavigate();

  if (!item) return null; // 🛡️ prevent rendering if item is undefined

  return (
    <div className="product-card" onClick={() => navigate(`/product/${item.id}`)}>
      <img src={item.imgUrl} alt={item.productName} />
      <h3>{item.productName}</h3>
      <div className="stars">{"★".repeat(Math.round(item.avgRating))}</div>
      <p>
        <span className="price">${item.price}</span>
        <button className="add-button" onClick={(e) => {
          e.stopPropagation(); // 🛑 prevent parent click navigation
          addToCart(item);
        }}>＋</button>
      </p>
    </div>
  );
};

export default ProductCard;
