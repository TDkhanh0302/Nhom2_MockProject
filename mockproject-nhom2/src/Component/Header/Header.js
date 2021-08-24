import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './Header.css';
function Header() {
  const { userLogged, getUserLogged, writeDataTable } = useContext(TournamentsContext);
  const usernameRef = useRef(null);
  const logoutRef = useRef(null);
  const loginRef = useRef(null);
  const registerRef = useRef(null);

  const checkUserLogged = () => {
    if (!userLogged) {
      usernameRef.current.classList.add('hidden');
      logoutRef.current.classList.add('hidden');
      loginRef.current.classList.remove('hidden');
      registerRef.current.classList.remove('hidden');
    } else {
      usernameRef.current.classList.remove('hidden');
      logoutRef.current.classList.remove('hidden');
      loginRef.current.classList.add('hidden');
      registerRef.current.classList.add('hidden');
    }
  };

  const handleLogout = () => {
    writeDataTable(null, 'userLogged');
    usernameRef.current.classList.add('hidden');
    logoutRef.current.classList.add('hidden');
    loginRef.current.classList.remove('hidden');
    registerRef.current.classList.remove('hidden');
  };

  useEffect(() => {
    getUserLogged();
    checkUserLogged();
  }, []);

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
            <li ref={usernameRef} className="nav-item hidden">
              <a className="nav-link" href="#">
                {userLogged?.username}
              </a>
            </li>
            <li onClick={handleLogout} ref={logoutRef} className="nav-item sign-up hidden">
              <Link className="nav-link active" to="/">
                Logout
              </Link>
            </li>
            <li ref={loginRef} className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li ref={registerRef} className="nav-item sign-up">
              <Link className="nav-link active" to="/sign-up">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
