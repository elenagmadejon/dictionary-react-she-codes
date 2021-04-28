import logo from './pandaLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <p className="Title">
          Dictionary
        </p>
        <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
          <img src={logo} alt="logo"/>

      </header>
      
    </div>
  
    
  );
}

export default App;
