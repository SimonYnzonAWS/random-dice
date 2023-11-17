import React, { useState } from 'react';

import Die from './Die.js';

import '../css/main.css';

const RollDice = () => {
  const [diceArray, setDiceArray] = useState([]);

  const handleRollDiceClick = () => {
    const newDiceArray = [];
    let x = 0;
    while (x < 2) {
      const randomDiceNum = Math.floor(Math.random() * 6) + 1;
      newDiceArray.push(randomDiceNum);
      x++;
    }
    setDiceArray(newDiceArray);
    console.log(newDiceArray);
  };

  return (
    <div>
        <div>
            <Die rollResults={diceArray} />
            <button onClick={() => handleRollDiceClick()}>Roll Dice</button>
        </div>
    </div>
  );
}

export default RollDice;