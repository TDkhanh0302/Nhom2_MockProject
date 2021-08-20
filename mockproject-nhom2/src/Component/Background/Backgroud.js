import React from 'react'
import { useHistory } from 'react-router-dom'
import './Background.css'

function Background() {
  const history = useHistory();
  const addTournament = () =>{
    history.push('/add-tournament')
  }

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./homepage img/home-background.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <button type="button" className="btn create-btn" onClick={addTournament}>Create your tourament now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
