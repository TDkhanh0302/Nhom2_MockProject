import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracketHost from '../../Component/TournamentBanner/TournamentBannerBracketHost'

const TournamentBracketHost = () => {
    return (
        <div>
            <Header/>
            <TournamentBannerBracketHost/>
            <div className='tournamentContent'>

            </div>
            <Footer/>
        </div>
    )
}

export default TournamentBracketHost