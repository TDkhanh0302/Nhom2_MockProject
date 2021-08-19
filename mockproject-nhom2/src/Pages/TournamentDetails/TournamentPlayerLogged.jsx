import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerPlayer from '../../Component/TournamentBanner/TournamentBannerPlayer'
import PlayerList from '../../Component/PlayerList/PlayerList'
const TournamentPlayerLogged = () => {
    return (
        <div>
            <HeaderLoggedIn/>
            <TournamentBannerPlayer/>
            <div className='tournamentContent'>
                <PlayerList/>
            </div>
            <Footer/>
        </div>
    )
}

export default TournamentPlayerLogged