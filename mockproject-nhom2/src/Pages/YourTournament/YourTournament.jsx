import React, { useContext, useEffect, useRef } from 'react';
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Footer from '../../Component/Footer/Footer'
import TournamentThumb from '../../Component/TournamentThumb/TournamentThumb'
import { TournamentsContext } from '../../contexts/TournamentsContext';

const YourTournament = () => {
    const { tournaments, getTournaments} = useContext(TournamentsContext);
    const { userLogged, getUserLogged } = useContext(TournamentsContext);
    let showListTournaments = tournaments?.map(item => {
        if (item.user_id === userLogged.id) {
            return (
            <TournamentThumb
                key={item.id} 
                tournamentName={item.name}
                playersCount={item.player_count}
                createDate={item.created_at}
                gameName={item.game_name}
            />)
        }

    })
    useEffect(() => {
        getUserLogged();
      }, []);
      useEffect(() => {
        getTournaments();
      }, []);
    return (
        <div>
            <HeaderLoggedIn />
            <div className="container-fluid  all-tournaments-list p-5">
                <div className="container">
                    <div className="row">
                        {showListTournaments}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default YourTournament