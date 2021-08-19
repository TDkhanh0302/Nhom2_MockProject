import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerPlayerHost from '../../Component/TournamentBanner/TournamentBannerPlayerHost'
import PlayerAdd from '../../Component/PlayerAdd/PlayerAdd'
import PlayerList from '../../Component/PlayerList/PlayerList'
const TournamentPlayerHost = () => {
    return (
        <div>
            <HeaderLoggedIn/>
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