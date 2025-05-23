import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/productData';
import ProductCard from '../Compnents/ProductCard';
import Footer from '../Compnents/Footer';
import './ProductId.css';
import tableImage from '../Images/table.jpg';

const ProductId = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1); // Quantity state

  if (!product) return <div>Product not found</div>;

  const related = products.filter(p => p.category === product.category && p.id !== product.id);

  // Final addToCart method using quantity
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


  return (
    <div>
      {/* Banner */}
      <div className="product-banner" style={{ backgroundImage: `url(${tableImage})` }}>
        <div className="overlay">
          <h1 className="banner-title">{product.productName}</h1>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-detail">
        <div className="detail-header">
          <img src={product.imgUrl} alt={product.productName} className="product-image" />

          <div className="detail-info">
            <h1>{product.productName}</h1>

            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="avg-rating">{product.avgRating} ratings</span>
            </div>

            <h2>
              ${product.price}{' '}
              <span className="category">category: {product.category}</span>
            </h2>

            <p className="short-desc">{product.shortDesc}</p>

            <div className="cart-controls">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="quantity-input"
              />
              <button
                className="add-to-cart"
                onClick={() => addToCart(product, quantity)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="description-section">
          <div className="tabs">
            <span className="tab active">Description</span>
            <span className="tab">Reviews ({product.reviews.length})</span>
          </div>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <h3 className="suggestion-title">You might also like</h3>
      <div className="related-products">
        {related.map(item => (
          <ProductCard key={item.id} item={item} addToCart={(item) => addToCart(item, 1)} />
        ))}
      </div>

     <Footer />
    </div>  
   
  );
};

export default ProductId;
