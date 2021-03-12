import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allUsers } from "../../../services/users";
import logo from "./Assets/feedable-logo.png";

import "./Navbar.css";

export default function Navbar({ user }) {

  const authenticatedOptions = (
    <>
      <Link to="/sign-out">Sign Out</Link>
      <Link to="/cart">
        <div>Cart</div>
      </Link>
    </>
  )

  const adminAuthenticatedOptions = (
    <>
      <div className="nav-dropdown">
        <button className="dropbtn">
          Admin
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/create">Add Product</Link>
          <Link to="/allusers">All Users</Link>
        </div>
      </div>
      {authenticatedOptions}
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
          {user && <div className="link-welcome">Welcome, {user.full_name}</div>}
        </div>
        <div className="nav-links">
          {alwaysOptions}
          {user ? (user.role.includes("Admin") ? adminAuthenticatedOptions : authenticatedOptions) : unauthenticatedOptions}
        </div>
      </nav>
    </header>
  );
}
