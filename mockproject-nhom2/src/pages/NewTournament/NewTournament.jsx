import React from 'react';

import './styles.css';

function NewTournament(props) {
  return (
    <div className="wrap">
      <div className="head">
        <h2>New Tournament</h2>
      </div>

      <div className="content row justify-content-center">
        <form className="col-8" action="">
          <div className="form_info">
            <div className="form_row row">
              <label className="col-3 form_label" htmlFor="tournament_name">
                Tournament name
              </label>
              <input
                className="col-8 form-control"
                type="text"
                name="tournament_name"
                id="tournament_name"
                required
              />
            </div>

            <div className="form_row row">
              <label className="col-3 form_label" htmlFor="description">
                Description
              </label>
              <textarea
                className="col-8 form-control"
                name="description"
                id="description"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="form_row row">
              <label className="col-3 form_label" htmlFor="game">
                Game
              </label>
              <select
                className="form-control col-8"
                name="game"
                id="game"
                required
              >
                <option value="">Counter-Strike: Global Offensive</option>
                <option value="">League of Legends</option>
                <option value="">FIFA 14</option>
              </select>
            </div>

            <div className="form_row row">
              <label className="col-3 form_label" htmlFor="format">
                Định dạng
              </label>
              <select
                className="col-8 form-control"
                name="format"
                id="format"
                required
              >
                <option value="single">Single Elimination</option>
              </select>
            </div>

            <div className="form_row row">
              <label className="col-3 form_label" htmlFor="start_time">
                Start Time
              </label>
              <input
                className="col-8 form-control"
                type="date"
                name="start_time"
                id="start_time"
              />
            </div>
          </div>

          <input className="form_btn" type="submit" value="SAVE AND CONTINUE" />
        </form>
      </div>
    </div>
  );
}

export default NewTournament;
