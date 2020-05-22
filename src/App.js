import React from 'react';
import './App.css';
import home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>login : </p>
        <input className="log"></input>
        <p>mot de pass : </p>
        <input className="mdp"></input>

        <Router>
          <div className="home">
              <Route path="/home" component={home}></Route>
          </div>
        </Router>

      </header>
    </div>
  );
}

export default App;
