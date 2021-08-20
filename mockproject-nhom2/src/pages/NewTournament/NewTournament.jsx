import React from 'react';

import './styles.css';
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn';
import Footer from '../../Component/Footer/Footer';
import { useHistory } from 'react-router-dom';

function NewTournament(props) {
  const history = useHistory();
  const createTournament = () =>{
    if(true){
      history.push('/tournament/bracket');//+id thêm sau
    }
  }
  return (
    <div>
      <HeaderLoggedIn />
      <div className="wrap">
        <div className="head">
          <h2>New Tournament</h2>
        </div>
        <div className="content row justify-content-center">
          <form className="col-8" action="">
            <div className="form_info">
              <div className="form_row row">
                <label className=" form_label" htmlFor="tournament_name">
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
                <label className=" form_label" htmlFor="description">
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
                <label className=" form_label" htmlFor="game">
                  Game
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
                <label className=" form_label" htmlFor="format">
                  Type
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
              <div className="form-check form_row">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className=" form_label" for="">
                  Include match for 3rd place
                </label>
              </div>

              <div className="form_row row">
                <label className=" form_label" htmlFor="start_time">
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

            <button type="submit" className="btn view-btn m-3" onClick={createTournament}>Save and continue</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewTournament;
