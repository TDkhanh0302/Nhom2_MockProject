import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerSetting from '../../Component/TournamentBanner/TournamentBannerSetting'
import './TournamentDetails.css'
import SettingForm from '../../Component/SettingForm/SettingForm'
const TournamentSetting = () => {
    return (
        <div>
            <HeaderLoggedIn />
            <TournamentBannerSetting />
            <div className="tournamentContent">
                <SettingForm/>
            </div>
            <Footer />
        </div>
    )
}

export default TournamentSetting