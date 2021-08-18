import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white-50 p-5">
      <div className="row">
        <p>Product by Group 2</p>
      </div>
      <div>
        <a href="#">
          <i className="fab fa-facebook-f p-2"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram p-2"></i>
        </a>
      </div>
      <div>
        <i className="fa fa-envelope p-2">&nbsp;haimu.99@gmail.com</i>
        <i className="fa fa-mobile-alt p-2">&nbsp;0904687771</i>
      </div>
    </footer>

  )
}

export default Footer