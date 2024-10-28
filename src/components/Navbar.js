import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand px-3">
      <div className="container-fluid d-grid justify-content-center">
        <Link className="navbar-brand justify-content-center d-flex" to="/">
          <img src={logo} alt="logo" width="130" className="d-inline-block align-text-top" />
        </Link>
        <div className="navbar-nav ms-auto">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
