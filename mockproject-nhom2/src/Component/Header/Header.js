import React from "react";
import './Header.css'
function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fas fa-trophy"></i>
        </a>
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
              <a className="nav-link acvite" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tournament
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Game
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item sign-up">
              <a class="nav-link active"  href="#">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
