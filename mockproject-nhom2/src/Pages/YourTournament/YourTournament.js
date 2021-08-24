import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import TournamentThumb from '../../Component/TournamentThumb/TournamentThumb';
const YourTournament = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid  all-tournaments-list p-5">
        <div className="container">
          <div className="row">
            <TournamentThumb />
            <TournamentThumb />
            <TournamentThumb />
            <TournamentThumb />
            <TournamentThumb />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default YourTournament;
