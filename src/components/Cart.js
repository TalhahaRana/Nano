import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import cart from '../img/cart.gif';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleConfirmOrder = (item) => {
    navigate('/confirm-order', {
      state: {
        productName: item.name,
        quantity: item.quantity,
      },
    });
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <img src={cart} alt="Empty Cart" style={{ width: '200px', height: '200px' }} />
        </div>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <div>
                  <button className="btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  <button className="btn-success ms-2" onClick={() => handleConfirmOrder(item)}>Confirm</button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ${getTotalPrice()}</h4>
          <button className="btn" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
