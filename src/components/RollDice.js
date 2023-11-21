import React, { useState } from 'react';

import Die from './Die.js';

import '../css/main.css';

const RollDice = () => {
  const [diceArray, setDiceArray] = useState([]);
  const [rollAnimation, setRollAnimation] = useState(false);

  const handleRollDiceClick = () => {
    const newDiceArray = [];
    let x = 0;
    while (x < 2) {
      const randomDiceNum = Math.floor(Math.random() * 6) + 1;
      newDiceArray.push(randomDiceNum);
      x++;
    }
    setDiceArray(newDiceArray);
    setRollAnimation(true);
    
    setTimeout(() => {
      setRollAnimation(false);
    }, 1000); // Adjust the duration to match the animation duration in CSS
  };

  return (
    <div>
        <div>
            <button className='roll-dice-button' onClick={() => handleRollDiceClick()}>Roll Dice</button>
            <div className={`die-component-container ${rollAnimation ? 'shake' : ''}`}>
              <Die rollResults={diceArray} />
            </div>
        </div>
    </div>
  );
}

export default RollDice;