import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracketHost from '../../Component/TournamentBanner/TournamentBannerBracketHost'

const TournamentBracketHost = () => {
    return (
        <div>
            <HeaderLoggedIn/>
            <TournamentBannerBracketHost/>
            <div className='tournamentContent'>

            </div>
            <Footer/>
        </div>
    )
}

export default TournamentBracketHost