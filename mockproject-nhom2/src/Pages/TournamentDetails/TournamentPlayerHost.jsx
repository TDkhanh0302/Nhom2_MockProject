import React, { useContext, useEffect } from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import TournamentBannerPlayerHost from '../../Component/TournamentBanner/TournamentBannerPlayerHost';
import PlayerAdd from '../../Component/PlayerAdd/PlayerAdd';
import PlayerList from '../../Component/PlayerList/PlayerList';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import { useParams } from 'react-router-dom';

const TournamentPlayerHost = () => {
  const { tournamentId } = useParams();
  const { players, tournaments, getPlayers, getTournamentById, getTournaments } =
    useContext(TournamentsContext);
  const currentTour = getTournamentById(tournamentId);
  useEffect(() => {
    getPlayers();
    getTournaments();
  }, []);
  return (
    <div>
      <Header />
      <TournamentBannerPlayerHost 
        currentTour={currentTour} 
        tournamentId={tournamentId} />
      <div className="tournamentContent">
        <PlayerAdd 
            listplayers={players} 
            tournaments={tournaments} 
            tournamentId={tournamentId} />
        <div className="container pt-3">
          <PlayerList 
            listplayers={players} 
            tournaments={tournaments} 
            tournamentId={tournamentId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TournamentPlayerHost;
