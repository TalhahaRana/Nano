import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "NanoDrier Ink Drier",
      price: 49.99,
      description: "High-performance ink drier",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "UV Ink Drier",
      price: 59.99,
      description: "Top-quality UV ink drier",
      image: "https://via.placeholder.com/300",
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.name} has been added to the cart.`);
  };

  return (
    <div className="container p-5">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="form-control mb-2"
            />
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetail;
