import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ item, addToCart, showDiscount = false, discount = 0, addToWishlist }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  if (!item) return null; // 🛡️ prevent rendering if item is undefined

  return (
    <div className="product-card" onClick={() => navigate(`/product/${item.id}`)}>
      {showDiscount && discount > 0 && (
        <span className="discount-badge">{discount}% Off</span>
      )}

      <button
        className="wishlist-icon"
        title="Add to Wishlist"
        onClick={(e) => {
          e.stopPropagation();
          setIsClicked(!isClicked);
          addToWishlist(item);
        }}
        style={{ color: isClicked ? "red" : "gray" }}
      >
        <FaHeart />
      </button>

      <img src={item.imgUrl} alt={item.productName} className="product-img" />
      <h3>{item.productName}</h3>
      <div className="stars">{"★".repeat(Math.round(item.avgRating))}</div>

      <p className="price-add-wrapper">
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
  );
};

export default ProductCard;
