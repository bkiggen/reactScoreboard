import React from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action increment"> - </button>
        <span className="counter-score">35</span>
      <button className="counter-action decrement"> + </button>
    </div>
  )
};

export default Counter;