import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
function HeaderLoggedIn() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-trophy"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link acvite" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tournaments">
                All Tournament
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/your-tournaments">
                Your Tournament
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Username
              </a>
            </li>
            <li className="nav-item sign-up">
              <Link className="nav-link active"  to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderLoggedIn;
