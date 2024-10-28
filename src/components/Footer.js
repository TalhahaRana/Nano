import React from "react";
import { Link } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";
import logo from '../img/logo.png';


const Footer = () => {
  return (
    <footer className="text-white pt-4 mt-4">
      <Container>
        {/* Logo Section */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="text-center">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
        </Row>

        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We provide high-quality services to help you achieve better results with less effort. Discover how we can improve your workflow and efficiency.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="navbar-nav ms-auto">
           
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart</Link>
            </li>
          </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </Col>
        </Row>

        <hr className="bg-white" />

        {/* Footer Bottom */}
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} NanoDrier-Offset All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
