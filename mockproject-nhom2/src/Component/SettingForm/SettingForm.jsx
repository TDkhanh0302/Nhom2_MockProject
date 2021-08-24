import React, { useContext, useEffect, useRef } from 'react';
import { TournamentsContext } from '../../contexts/TournamentsContext';

const SettingForm = ({ id }) => {
  const { getTournaments, tournaments, getTournamentById } = useContext(TournamentsContext);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    getTournaments();
  }, []);

  // useEffect(() => {
  //   const tournamentFromId = getTournamentById(id)
  //   nameRef.current.value = tournamentFromId.name;
  //   descriptionRef.current.value = tournamentFromId.description;
  //   gameRef.current.value = tournamentFromId.game_name;
  // }, [id])

  return (
    <div>
      <div className="wrap pt-5">
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
                  ref={nameRef}
                />
              </div>

              <div className="form_row row">
                <label className=" form_label" htmlFor="description">
                  Description
                </label>
                <textarea
                  ref={descriptionRef}
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
                  ref={gameRef}
                  className="col-8 form-control"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  required
                />
              </div>
            </div>
            <button type="button" className="btn view-btn m-3">
              Save
            </button>
            <button type="button" className="btn view-btn m-3">
              Delete Tournament
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
