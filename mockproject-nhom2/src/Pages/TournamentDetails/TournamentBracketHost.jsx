import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracketHost from '../../Component/TournamentBanner/TournamentBannerBracketHost'
import { useParams } from 'react-router-dom'

const TournamentBracketHost = () => {
    let {tournamentId} = useParams();

    return (
        <div>
            <Header/>
            <TournamentBannerBracketHost tournamentId={tournamentId}/>
            <div className='tournamentContent'>
            </div>
            <Footer/>
        </div>
    )
}

export default TournamentBracketHost