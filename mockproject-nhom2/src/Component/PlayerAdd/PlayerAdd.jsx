import React from 'react'
import './PlayerAdd.css'
const PlayerAdd = (props) => {
  return (
    <div>
      <div className="container pt-3">
        <form>
          <div className="row">
            <input
              className="col-sm-3 form-control add-player me-2"
              type="text"
              name="tournament_name"
              id="tournament_name"
              required
            />
            <button className="col-sm-2 col-md-1 btn view-btn add-btn" type='submit' >Add</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default PlayerAdd