import React, { useContext, useEffect } from 'react'
import { TournamentsContext } from '../../contexts/TournamentsContext';
import { realtimeDB } from '../../firebase/firebaseConfig';
import PlayerItem from './PlayerItem';
import './PlayerList.css'

const PlayerList = ({listplayers,tournamentId}) => {
  const {writeDataTable} = useContext(TournamentsContext);
  const showListPlayer = listplayers?.map((player,index) =>{
    const onDelete = (index)=>{
      listplayers.splice(index, 1);
      writeDataTable(listplayers,'players');
      console.log(listplayers);
    }
  
    if(player.tournament_id === tournamentId)
    {
      return(
          <PlayerItem index = {index} key = {player.id} player = {player} onDelete = {onDelete}/>
      )
    }
  })
  
  return(
    <>
      {showListPlayer}
    </>
  )
};

export default PlayerList