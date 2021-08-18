import Home from './Pages/Home/Home'
import HomeLoggedIn from './Pages/Home/HomeLoggedIn'
import './App.css';
import NewTournament from './Pages/NewTournament/NewTournament'
import LoginForm from './Pages/Login/LoginForm'
import SignupForm from './Pages/Login/SignUpForm'
import AllTournament from './Pages/AllTournament/AllTournament';
import AllTournamentLogged from './Pages/AllTournament/AllTournamentLogged';
import YourTournament from './Pages/YourTournament/YourTournament'

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <HomeLoggedIn/>
      <NewTournament/>
      <LoginForm/>
      <SignupForm/>
      <AllTournament/>
      <AllTournamentLogged/> */}
      <YourTournament/>
    </div>
  );
}

export default App;
