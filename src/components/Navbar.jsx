import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import productContext from "../context/ProductContext";

const Navbar = (props) => {
  const context = useContext(productContext);
  console.log(context);
  
  const {
    state: {cart },
  } = context;
  
  
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            first-project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cartItems">
                  <FaCartShopping />
                  <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile"></Link>
              </li>
            </ul>

            <button
              className="btn btn-success"
              onClick={props.toggleMode}
              type="submit"
            >
              {props.btnText}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;