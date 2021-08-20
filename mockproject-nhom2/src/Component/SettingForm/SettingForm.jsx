import React from 'react'

const SettingForm = () => {
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
            </div>
            <button type="button" className="btn view-btn m-3">Save</button>
            <button type="button" className="btn view-btn m-3">Delete Tournament</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SettingForm