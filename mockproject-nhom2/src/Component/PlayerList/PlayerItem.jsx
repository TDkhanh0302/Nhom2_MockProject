import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext'
import { realtimeDB } from '../../firebase/firebaseConfig';
import './PlayerList.css'
const PlayerItem = ({player,onDelete, index}) => {
    const hanldeDeletePlayer = () =>{
      console.log(player.id);
      realtimeDB.ref('players/' + player.id).remove();
      onDelete(index);
    }
    return (
        <div className="row">
        <p className="col-sm-3 player-name me-2">
          {player.name}
        </p>
        <button className="col-sm-2 col-md-1 btn ms-2 me-2 view-btn delete-btn" type='button' ><i className="fa fa-edit"></i></button>
        <button className="col-sm-2 col-md-1 btn view-btn delete-btn" type='button' onClick={hanldeDeletePlayer}><i className="fa fa-trash"></i></button>
        
      </div>
      )
}

export default PlayerItem;