import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; // Import Carousel
import proA from "../img/product/proA.png";
import proB from "../img/product/proB.png";
import proC from "../img/product/proC.png";

function Products() {
  const products = [
    {
      id: 1,
      name: 'NanoDrier-offset',
      price: 49.99,
      description: 'High-performance ink drier',
      images: [proA, proB, proC],
    },
    {
      id: 2,
      name: 'UV Ink Drier',
      price: 59.99,
      description: 'Top-quality UV ink drier',
      images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/300'],
    },
  ];

  return (
    <div className="container mt-4 p-5">
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Carousel>
                  {product.images.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={img}
                        className="d-block w-100"
                        alt={`${product.name} slide ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
