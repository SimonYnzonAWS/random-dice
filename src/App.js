import { useState } from "react";

import RollDice from "./components/RollDice";

function App() {

  const [randomNum, setRandomNum] = useState(false);

  const handleNumButtonClick = () => {
    const randomValue = Math.floor(Math.random() * 500) + 1;
    setRandomNum(randomValue);
  }

  return (
    <div className="App">
      <p className='random-num'>{randomNum}</p>
      <button onClick={() => handleNumButtonClick()}>Generate Random Number</button>
      <RollDice/>
    </div>
  );
}

export default App;
