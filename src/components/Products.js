import React from 'react';
import proA from "../img/product/proA.png";

import { Link } from 'react-router-dom';

function Products() {
  const products = [
    {
      id: 1,
      name: 'NanoDrier Ink Drier',
      price: 49.99,
      description: 'High-performance ink drier',
      image: [proA],
    },
    {
      id: 2,
      name: 'UV Ink Drier',
      price: 59.99,
      description: 'Top-quality UV ink drier',
      image: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div className="container mt-4 p-5">
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
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
