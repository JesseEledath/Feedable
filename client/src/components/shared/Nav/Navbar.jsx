import { Link } from "react-router-dom";
import logo from "./Assets/feedable-logo.png";

import "./Navbar.css";


export default function Navbar({user}) {
  // console.log(user)
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="icon" />
        </Link>
      </div>
      <nav>
        <Link className="icon icon-link" to="/">
          <div>Feedable</div>
        </Link>
          {user && <div className="link-welcome">Welcome, {user.email}</div>}
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/create">Add Product</Link>
          <Link to="/about">Mission</Link>
          <div className="nav-dropdown">
            <button className="dropbtn">
              Join Us
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/sign-in">Sign In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
          <Link to="/cart">
            <div>Cart</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
