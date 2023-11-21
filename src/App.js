import { useState } from "react";

import RollDice from "./components/RollDice";

function App() {

  const [randomNum, setRandomNum] = useState(0);

  const handleNumButtonClick = () => {
    const randomValue = Math.floor(Math.random() * 500) + 1;
    setRandomNum(randomValue);
  }

  return (
    <div className="App">
      <div className='main-container'>
        <div className='roll-dice-container'>
          <RollDice/>
        </div>
        <div className='random-num-container'>
          <button className='random-num-button' onClick={() => handleNumButtonClick()}>Generate Random Number</button>
          <p className='random-num'>{randomNum}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
