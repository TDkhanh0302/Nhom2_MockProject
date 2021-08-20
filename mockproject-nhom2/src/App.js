import './App.css';
import TournamentsContextProvider from './contexts/TournamentsContext';
import NewTournament from './Pages/NewTournament/NewTournament';

function App() {
  return (
    <div className="App">
      <TournamentsContextProvider>
        <NewTournament />;
      </TournamentsContextProvider>
    </div>
  );
}

export default App;
