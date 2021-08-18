import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentThumb from '../../Component/TournamentThumb/TournamentThumb'
import './AllTournament.css'
const AllTournamentLogged = () => {
    return (
        <div>
            <HeaderLoggedIn />
            <div className="container-fluid  all-tournaments-list p-5">
                <div className="container">
                    <div className="row">
                        <TournamentThumb/>
                        <TournamentThumb/>
                        <TournamentThumb/>
                        <TournamentThumb/>
                        <TournamentThumb/>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AllTournamentLogged