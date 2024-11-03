import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // Import Carousel
import proA from "../img/product/proA.png";
import proB from "../img/product/proB.png";
import proC from "../img/product/proC.png";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "NanoDrier-offset",
      price: 49.99,
      description: "High-performance ink drier",
      images: [proA, proB, proC],
    },
    {
      id: 2,
      name: "UV Ink Drier",
      price: 59.99,
      description: "Top-quality UV ink drier",
      images: ["https://via.placeholder.com/300", "https://via.placeholder.com/400"],
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
            {/* Carousel for Product Images */}
            <Carousel>
              {product.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Optional: Display thumbnails below the carousel */}
            <div className="d-flex mt-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="img-thumbnail me-2"
                  style={{ width: "50px", cursor: "pointer" }}
                  onClick={() => document.querySelectorAll(".carousel-item")[index].click()}
                />
              ))}
            </div>
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
            <div className="desc mt-4">
              <h3>About Product</h3>
              <p>
                All description will be here
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetail;
