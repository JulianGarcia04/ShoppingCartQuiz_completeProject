import logo from '../assets/logo.svg';
import NavBar from '../components/navbar.jsx';
import Carrousell from '../components/carrousell.jsx';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carrousell/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
