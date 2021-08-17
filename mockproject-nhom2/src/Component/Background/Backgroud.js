import React from 'react'
import './Background.css'

function Background() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./homepage img/background.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <button type="button" class="btn">Create your tourament now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
