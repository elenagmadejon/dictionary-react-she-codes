import logo from './pandaLogo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <p className="Title">
         My awesome dictionary
          <img src={logo} alt="logo"/>
           </p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <small>
        Coded by <a href="https://github.com/elenagmadejon/dictionary-react-she-codes.git" alt="blank"> Elena Guerrero </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
