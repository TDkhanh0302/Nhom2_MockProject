import React from 'react'
import './TournamentThumb.css'

const TournamentThumb = () => {
  return (
    <div className='col-lg-4 sm-8'>
      <div class="card tournament-box m-3">
        <div class="card-body bg-dark">
          <h5 class="card-title">Tournament Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="fas fa-gamepad me-1"></i>Gamename
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="far fa-user me-1"></i>Number playerss
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            <i className="far fa-clock me-1"></i>Date
          </h6>
          <button type="button" class="btn view-btn">View</button>
        </div>
      </div>
    </div>
  )
}

export default TournamentThumb