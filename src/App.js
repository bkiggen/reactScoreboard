import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player.jsx';
// import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        {/*Players List */}
        
        <Player />
      </div>
    );
  }
}

export default App;
