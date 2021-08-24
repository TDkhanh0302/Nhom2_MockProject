import React, { useContext, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerPlayerHost from '../../Component/TournamentBanner/TournamentBannerPlayerHost'
import PlayerAdd from '../../Component/PlayerAdd/PlayerAdd'
import PlayerList from '../../Component/PlayerList/PlayerList'
import { TournamentsContext } from '../../contexts/TournamentsContext'

const TournamentPlayerHost = () => {
    const { players ,getPlayers} = useContext(TournamentsContext);
    useEffect(() =>{
        getPlayers();        
    },[]);
    return (
        <div>
            <Header/>
            <TournamentBannerPlayerHost/>
            <div className='tournamentContent'>
                <PlayerAdd listplayers = {players}/>
                <div className="container pt-3">
                    <PlayerList listplayers = {players}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TournamentPlayerHost