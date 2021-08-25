import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import SettingForm from '../../Component/SettingForm/SettingForm';
import TournamentBannerSetting from '../../Component/TournamentBanner/TournamentBannerSetting';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './TournamentDetails.css';
const TournamentSetting = () => {
  const { id, tournamentId } = useParams();
  const { players, getPlayers, getTournamentById, getTournaments } = useContext(TournamentsContext);
  const currentTour = getTournamentById(tournamentId);
  useEffect(() => {
    getTournaments();
  }, []);
  return (
    <div>
      <Header />
      <TournamentBannerSetting 
        currentTour={currentTour} 
        tournamentId={tournamentId} 
      />
      <div className="tournamentContent">
        <SettingForm id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default TournamentSetting;
