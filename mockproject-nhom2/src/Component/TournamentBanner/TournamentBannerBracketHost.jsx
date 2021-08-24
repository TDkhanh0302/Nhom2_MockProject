import React from 'react'
import { Link } from 'react-router-dom'
import './TournamentBanner.css'
const TournamentBannerBracketHost = (props) => {
  const {id,tournamentName,gameName,playersCount,createDate}=props
  return (
    <div>
      <img src="https://lh3.googleusercontent.com/rJM9dBj8rkNowIWlkcy4X6t5YgoMcKq5GxH9LWMA4eRpRE992k03vPOOjErcmB2am21baO8G5LO7CwrQfGxE=w1920-h969-rw" className="d-block w-100" alt="..." />
      <div className="container-fluid tournament-banner">
        <div className="container">
          <div className="row pt-3">
            <div className="col-8">
              <h3>{tournamentName}</h3>
            </div>
          </div>
          <div className="row pt-3 pb-3Bracket">
            <div className="col-lg-2 col-sm-4">
              <h6>
                <i className="fas fa-gamepad me-1"></i>{gameName}
              </h6>
            </div>
            <div className="col-lg-2 col-sm-4">
              <h6>
                <i className="far fa-user me-1"></i>{playersCount}
              </h6>
            </div>
            <div className="col-lg-2 col-sm-4">
              <h6>
                <i className="far fa-clock me-1"></i>{createDate}
              </h6>
            </div>
          </div>
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link active" to="/tournament/bracket">
                  {/* +id thêm sau */}
                  <i className="fas fa-stream m-1"></i>
                  Bracket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tournament/players">
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

export default TournamentBannerBracketHost