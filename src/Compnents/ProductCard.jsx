import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, addToCart, showDiscount = false, discount = 0, addToWishlist }) => {
  const navigate = useNavigate();

  if (!item) return null; // 🛡️ prevent rendering if item is undefined

  return (
    <div className="product-card" onClick={() => navigate(`/product/${item.id}`)}>
      {showDiscount && discount > 0 && (
        <span className="discount-badge">{discount}% Off</span>
      )}

      {addToWishlist && (
        <button
          className="wishlist-icon"
          title="Add to Wishlist"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking wishlist
            addToWishlist(item);
          }}
        >
          ♥
        </button>
      )}

      <img src={item.imgUrl} alt={item.productName} />
      <h3>{item.productName}</h3>
      <div className="stars">{"★".repeat(Math.round(item.avgRating))}</div>
      <p>
        <span className="price">${item.price}</span>
        <button
          className="add-button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking add button
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
