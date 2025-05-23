import React from 'react';
import Footer from '../Compnents/Footer';
import './Cart.css';


const Cart = ({ cartItems, setCartItems }) => {
  const updateQty = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (type === 'inc' ? 1 : -1)) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-card">
            <img src={item.imgUrl} alt={item.productName} />
            <div>
              <h3>{item.productName}</h3>
              <p>${item.price.toFixed(2)} * {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
            </div>
            <div className="qty-controls">
              <button onClick={() => updateQty(item.id, 'inc')}>＋</button>
              <button onClick={() => updateQty(item.id, 'dec')}>－</button>
            </div>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>×</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4>Cart Summary</h4>
        <p>Total Price:</p>
        <h3>${totalPrice.toFixed(2)}</h3>
      </div>
        </div>
      <Footer />
    </div>
    
  );
};

export default Cart;
