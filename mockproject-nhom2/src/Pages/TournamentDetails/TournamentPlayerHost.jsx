import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerPlayerHost from '../../Component/TournamentBanner/TournamentBannerPlayerHost'
import PlayerAdd from '../../Component/PlayerAdd/PlayerAdd'
import PlayerList from '../../Component/PlayerList/PlayerList'
const TournamentPlayerHost = () => {
    return (
        <div>
            <Header/>
            <TournamentBannerPlayerHost/>
            <div className='tournamentContent'>
                <PlayerAdd/>
                <PlayerList/>
            </div>
            <Footer/>
        </div>
    )
}

export default TournamentPlayerHost