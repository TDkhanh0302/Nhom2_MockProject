import React from 'react'
import './PlayerList.css'
const PlayerList = () => {
  return (
    <div className="container pt-3">

      <div className="row">
        <p className="col-sm-3 player-name me-2">
          Player Name
        </p>
        <button className="col-sm-2 col-md-1 btn view-btn delete-btn" type='button' ><i className="fa fa-trash"></i></button>
      </div>
    </div>
  )
}

export default PlayerList