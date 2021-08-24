import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import SettingForm from '../../Component/SettingForm/SettingForm';
import TournamentBannerSetting from '../../Component/TournamentBanner/TournamentBannerSetting';
import './TournamentDetails.css';
const TournamentSetting = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <TournamentBannerSetting />
      <div className="tournamentContent">
        <SettingForm id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default TournamentSetting;
