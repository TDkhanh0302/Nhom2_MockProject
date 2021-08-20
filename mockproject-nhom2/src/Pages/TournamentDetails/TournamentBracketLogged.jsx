import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracket from '../../Component/TournamentBanner/TournamentBannerBracket'

const TournamentBracketLogged = () => {
    return (
        <div>
            <HeaderLoggedIn/>
            <TournamentBannerBracket/>
            <div className='tournamentContent'>

            </div>
            <Footer/>
        </div>
    )
}

export default TournamentBracketLogged