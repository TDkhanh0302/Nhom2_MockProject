import React, { useContext, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracketHost from '../../Component/TournamentBanner/TournamentBannerBracketHost'
import { useParams } from 'react-router-dom'
import { TournamentsContext } from '../../contexts/TournamentsContext'

const TournamentBracketHost = () => {
    
    const {tournamentId} = useParams(); 
    const {getTournamentById,getTournaments} = useContext(TournamentsContext);
    const currentTour = getTournamentById(tournamentId);
    useEffect(() =>{
      getTournaments();        
  },[]);

    return (
        <div>
            <Header/>
            <TournamentBannerBracketHost currentTour ={currentTour}  tournamentId={tournamentId}/>
            <div className='tournamentContent'>
            </div>
            <Footer/>
        </div>
    )
}

export default TournamentBracketHost