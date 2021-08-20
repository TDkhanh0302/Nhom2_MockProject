import Home from './Pages/Home/Home'
import HomeLoggedIn from './Pages/Home/HomeLoggedIn'
import './App.css';
import NewTournament from './Pages/NewTournament/NewTournament'
import LoginForm from './Pages/Login/LoginForm'
import SignupForm from './Pages/Login/SignUpForm'
import AllTournament from './Pages/AllTournament/AllTournament';
import AllTournamentLogged from './Pages/AllTournament/AllTournamentLogged';
import YourTournament from './Pages/YourTournament/YourTournament'
import TournamentSetting from './Pages/TournamentDetails/TournamentSetting';
import TournamentBracket from './Pages/TournamentDetails/TournamentBracket';
import TournamentBracketHost from './Pages/TournamentDetails/TournamentBracketHost';
import TournamentBracketLogged from './Pages/TournamentDetails/TournamentBracketLogged';
import TournamentPlayer from './Pages/TournamentDetails/TournamentPlayer';
import TournamentPlayerLogged from './Pages/TournamentDetails/TournamentPlayerLogged';
import TournamentPlayerHost from './Pages/TournamentDetails/TournamentPlayerHost';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SignUpForm from './Pages/Login/SignUpForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/tournaments' component={AllTournament}/>
        <Route path = '/your-tournaments' component={YourTournament}/>
        <Route path = '/login' component={LoginForm}/>
        <Route path = '/sign-up' component={SignUpForm}/>
        <Route path = '/add-tournament' component = {NewTournament}/>
        <Route path = '/tournament/bracket' component = {TournamentBracketHost}/>
        <Route path = '/tournament/players' component ={TournamentPlayerHost}/>
        <Route path = '/tournament/setting' component = {TournamentSetting}/>
        {/* Tạm thời để tất cả các component host */}

      {/* <HomeLoggedIn/>
      <NewTournament/>
      <LoginForm/>
      <SignupForm/>
      <AllTournamentLogged/>
     
      <TournamentBracket/>
      <TournamentBracketHost/>
      <TournamentBracketLogged/>
      <TournamentPlayer/>
      
      <TournamentPlayerHost/> */}
    </div>
    </Router>
  );
}

export default App;
