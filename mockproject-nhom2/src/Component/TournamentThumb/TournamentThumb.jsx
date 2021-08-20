import React from 'react'
import { useHistory } from 'react-router-dom'
import './TournamentThumb.css'

const TournamentThumb = () => {
  const history = useHistory();
  const viewTournament = () =>{
    history.push('/tournament');//id thêm sau
  }
  return (
    <div className='col-lg-4 sm-8'>
      <div className="card tournament-box m-3">
        <div className="card-body bg-dark">
          <h5 className="card-title">Tournament Name</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className="fas fa-gamepad me-1"></i>Gamename
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className="far fa-user me-1"></i>Number playerss
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className="far fa-clock me-1"></i>Date
          </h6>
          <button type="button" className="btn view-btn" onClick={viewTournament}>View</button>
        </div>
      </div>
    </div>
  )
}

export default TournamentThumb