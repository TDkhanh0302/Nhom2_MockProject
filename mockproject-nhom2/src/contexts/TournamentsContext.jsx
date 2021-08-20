import React, { createContext, useEffect, useState } from 'react';
import { realtimeDB } from '../firebase/firebaseConfig';

export const TournamentsContext = createContext();

const TournamentsContextProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState(null);
  const [players, setPlayers] = useState(null);
  const [match, setMatch] = useState(null);
  const [users, setUser] = useState(null);

  // gọi dữ liệu về và set các bảng dữ liệu vào các state tương ứng
  const getData = () => {
    realtimeDB.ref('/').on('value', (snapshot) => {
      const state = snapshot.val();
      setTournaments(state.tournaments);
      setPlayers(state.players);
      setMatch(state.match);
      setUser(state.user);
    });
  };

  // gọi hàm get data mỗi lần render đầu tiên
  useEffect(() => {
    getData();
  }, []);

  // add || update dữ liệu vào 1 bảng
  const writeDataTable = (data, table_name) => {
    realtimeDB.ref(table_name).set(data);
  };

  const TournamentsContextData = {
    writeDataTable,
    tournaments,
    players,
    match,
    users,
  };

  return (
    <TournamentsContext.Provider value={TournamentsContextData}>
      {children}
    </TournamentsContext.Provider>
  );
};

export default TournamentsContextProvider;
