import React from 'react'
import './TournamentBanner.css'
const TournamentBannerPlayerHost = () => {
  return (
    <div>
      <img src="./banner/tournament-banner.jpg" class="d-block w-100" alt="..." />
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
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <i class="fas fa-stream m-1"></i>
                  Bracket
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <i className="far fa-user me-1"></i>
                  Player
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i className="fas fa-cogs me-1"></i>
                  Settings
                </a>
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