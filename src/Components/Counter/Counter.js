import React, { useState } from 'react';
import './Counter.css'

const Counter = ({ count, handleAdd, handleMinus }) => {
//   const { count, handleAdd, handleMinus } = props;
  // console.log(count);

  return (
    <div className="name">
      <h1>{count}</h1>
      <button onClick={handleAdd} className="btn1">
        Add
      </button>
      <button onClick={handleMinus} className="btn2">
        Minus
      </button>
    </div>
  );
};

export default Counter;