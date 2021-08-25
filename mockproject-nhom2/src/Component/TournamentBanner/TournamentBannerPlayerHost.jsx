import React from 'react'
import { Link } from 'react-router-dom'
import './TournamentBanner.css'
const TournamentBannerPlayerHost = () => {
  return (
    <div>
      <img src="https://assets.challonge.com/assets/community_default_banners/default-cover-1-131d838501be46b4dc4ccf812fb3f7829fc8d2ff99d0e6dc60627288a696f341.svg" className="d-block w-100" alt="..." />
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
                <Link className="nav-link " to="/tournament/bracket">
                  <i className="fas fa-stream m-1"></i>
                  Bracket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/tournament/players">
                  <i className="far fa-user me-1"></i>
                  Player
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tournament/setting">
                  <i className="fas fa-cogs me-1"></i>
                  Settings
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

export default TournamentBannerPlayerHost