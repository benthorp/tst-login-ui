import logo from './logo.png';
import './App.css';
import LoginPage from '../pages/login/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <LoginPage />
    </div>
  );
}

export default App;
