import React from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmOrder() {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="container">
      <h1>Confirm Your Order</h1>
      {state ? (
        <div>
          <h3>Product: {state.productName}</h3>
          <p>Quantity: {state.quantity}</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" required />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </form>
        </div>
      ) : (
        <p>No order information available.</p>
      )}
    </div>
  );
}

export default ConfirmOrder;
