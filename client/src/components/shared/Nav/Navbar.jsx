import { Link } from "react-router-dom";
import logo from "./Assets/feedable-logo.png";

import "./Navbar.css";

const authenticatedOptions = (
  <>
    <Link to="/create">Add Product</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/cart">
      <div>Cart</div>
    </Link>
  </>
)

const unauthenticatedOptions = (
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
)

const alwaysOptions = (
  <>
    <Link to="/products">Products</Link>
    <Link to="/about">Mission</Link>
  </>
)

export default function Navbar({ user }) {
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
        <div className="nav-greeting">
          {user && <div className="link-welcome">Welcome, {user.first_name}</div>}
        </div>
        <div className="nav-links">
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </nav>
    </header>
  );
}
