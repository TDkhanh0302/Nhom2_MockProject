import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './PlayerList.css';
const PlayerItem = ({ player, onDelete, index, listplayers, tournamentId,onEditPlayer }) => {
  const editPlayerRef = useRef(null);
  const errEditNameRef = useRef(null);

  const {getTournamentById,userLogged,getUserLogged} = useContext(TournamentsContext);

  const history = useHistory();
  const currentTour = getTournamentById(tournamentId);
  const deleteButtonRef = useRef(null);
  const editButtonRef = useRef(null);

  const checkHost  = () =>{
    if (!userLogged|| currentTour?.user_id !== userLogged.id){
      deleteButtonRef.current.classList.add('hidden');
      editButtonRef.current.classList.add('hidden');
    }
    else
    {
      deleteButtonRef.current.classList.remove('hidden');
      editButtonRef.current.classList.remove('hidden');
    }
    
  }
  
  useEffect(() => { 
    getUserLogged();
    checkHost();
  }, []);
  const hanldeDeletePlayer = (event) => {
    event.preventDefault();
    onDelete(index);
  };

  const hanldeEditPlayer = (event) => {
    event.preventDefault();

    let check = true;
    if (editPlayerRef.current.value === '') {
      errEditNameRef.current.innerText = 'Vui lòng điền tên người chơi';
      errEditNameRef.current.classList.add('invalid');
      editPlayerRef.current.focus();
      check = false;
    }
    if (editPlayerRef.current.value === player.name) {
      errEditNameRef.current.innerText = 'Tên không thay đổi';
      errEditNameRef.current.classList.add('invalid');
      editPlayerRef.current.focus();
      check = false;
    }

    for (let i = 0; i < listplayers.length; i++) {
      if (
        listplayers[i].name === editPlayerRef.current.value &&
        listplayers[i].tournament_id === tournamentId
      ) {
        errEditNameRef.current.innerText = 'Người chơi đã tồn tại';
        errEditNameRef.current.classList.add('invalid');
        editPlayerRef.current.focus();
        check = false;
        break;
      }
    }

    if (check) {
      onEditPlayer(index,editPlayerRef.current.value);
      history.go(0);
    }
    editPlayerRef.current.value = '';
  };
  const onInputData = () => {
    editPlayerRef.current.oninput = () => {
      errEditNameRef.current.innerText = '';
      errEditNameRef.current.classList.remove('invalid');
    };
  };

  useEffect(() => {
    editPlayerRef.current.onblur = () => {
      onInputData();
    };
  }, []);

  return (
    <div className="row">
      <p className="col-sm-3 player-name me-2">{player.name}</p>
      <button
        className="col-sm-2 col-md-1 btn ms-2 me-2 view-btn delete-btn"
        type="button"
        ref = {editButtonRef}
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal"+index}
      >
        <i className="fa fa-edit"></i>
      </button>
      <div
        className="modal fade"
        id={"exampleModal"+index}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Name: {listplayers[index].name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body bg-light">
              <input
                type="text"
                className="form-control edit-name-input"
                ref={editPlayerRef}
              ></input>
              <span ref={errEditNameRef} className="err_message"></span>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={hanldeEditPlayer}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="col-sm-2 col-md-1 btn view-btn delete-btn"
        type="button"
        ref = {deleteButtonRef}
        onClick={hanldeDeletePlayer}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default PlayerItem;
