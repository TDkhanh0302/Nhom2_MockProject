import React from 'react'
import { useHistory } from 'react-router-dom'
import './TournamentThumb.css'

const TournamentThumb = (props) => {
  const {tournamentName,playersCount,createDate,gameName,id}=props;
  const history = useHistory();
  const viewTournament = () =>{
    history.push(`/tournament/bracket/${id}`);
    console.log(id);
    return 
  }
  return (
    <div className='col-lg-4 sm-8'>
      <div className="card tournament-box m-3">
        <div className="card-body bg-dark">
          <h5 className="card-title">{tournamentName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className="fas fa-gamepad me-1"></i>{gameName}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className="far fa-user me-1"></i>{playersCount}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className="far fa-clock me-1"></i>{createDate}
          </h6>
          <button type="button" className="btn view-btn" onClick={viewTournament}>View</button>
        </div>
      </div>
    </div>
  )
}

export default TournamentThumb