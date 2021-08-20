import React from 'react'
import { Link } from 'react-router-dom'
import './TournamentBanner.css'
const TournamentBannerPlayer = () => {
  return (
    <div>
      <img src="./banner/tournament-banner.jpg" className="d-block w-100" alt="..." />
      <div className="container-fluid tournament-banner">
        <div className="container">
          <div className="row pt-3">
            <div className="col-8">
              <h3>Tournament Name</h3>
            </div>
          </div>
          <div className="row pt-3 pb-3Bracket">
            <div className="col-lg-2 col-sm-4">
              <h6>
                <i className="fas fa-gamepad me-1"></i>Gamename
              </h6>
            </div>
            <div className="col-lg-2 col-sm-4">
              <h6>
                <i className="far fa-user me-1"></i>Number players
              </h6>
            </div>
            <div className="col-lg-2 col-sm-4">
              <h6>
                <i className="far fa-clock me-1"></i>Date
              </h6>
            </div>
          </div>
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link " to="/tournament">
                  {/* id thêm sau và xét điều kiện the*/}
                  <i className="fas fa-stream m-1"></i>
                  Bracket
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/tournament/players">
                  {/* id tour thêm sau */}
                  <i className="far fa-user me-1"></i>
                  Player
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='abc'></div>
    </div>
  )
}

export default TournamentBannerPlayer