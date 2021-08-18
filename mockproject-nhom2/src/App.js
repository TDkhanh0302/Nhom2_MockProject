import Home from './Pages/Home/Home'
import './App.css';
import LoginForm from './Pages/Login/LoginForm';
import SignUpForm from './Pages/Login/SignUpForm';
import NewTournament from './NewTournament/NewTournament';

function App() {
  return (
    <div className="App">
      <SignUpForm/>
      <NewTournament />;
    </div>
  );
}

export default App;
