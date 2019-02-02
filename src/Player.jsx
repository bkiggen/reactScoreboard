import Counter from './Counter.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Ben
      </span>
      <Counter />
    </div>
  )
}

export default Player;