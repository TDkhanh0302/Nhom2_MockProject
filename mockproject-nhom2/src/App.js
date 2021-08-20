import Home from './Pages/Home/Home'
import './App.css';
import LoginForm from './Pages/Login/LoginForm';
import SignUpForm from './Pages/Login/SignUpForm';
import NewTournament from './Pages/NewTournament/NewTournament';

function App() {
  return (
    <div className="App">
      <SignUpForm/>
      <LoginForm/>
      <NewTournament />;
      <Home/>
    </div>
  );
}

export default App;
