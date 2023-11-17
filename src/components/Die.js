import React, { useState, useEffect } from 'react'

import '../css/main.css'

const Die = (props) => {

    const [dice1, setDice1] = useState('fas fa-dice-one');
    const [dice2, setDice2] = useState('fas fa-dice-one');

    useEffect(() => {
        if (props.rollResults?.length >= 2) {
          switch (props.rollResults[0]) {
            case 1:
              setDice1('fas fa-dice-one');
              break;
            case 2:
              setDice1('fas fa-dice-two');
              break;
            case 3:
              setDice1('fas fa-dice-three');
              break;
            case 4:
              setDice1('fas fa-dice-four');
              break;
            case 5:
              setDice1('fas fa-dice-five');
              break;
            case 6:
              setDice1('fas fa-dice-six');
              break;
            default:
              setDice1('fas fa-dice-one');
            }

          switch (props.rollResults[1]) {
            case 1:
              setDice2('fas fa-dice-one');
              break;
            case 2:
              setDice2('fas fa-dice-two');
              break;
            case 3:
              setDice2('fas fa-dice-three');
              break;
            case 4:
              setDice2('fas fa-dice-four');
              break;
            case 5:
              setDice2('fas fa-dice-five');
              break;
            case 6:
              setDice2('fas fa-dice-six');
              break;
            default:
              setDice2('fas fa-dice-one');
            }
        }
    }, [props.rollResults]);
    
    return (
        <div>
            <div className='dice-container'>
                <i className={dice1}></i>
                <i className={dice2}></i>
            </div>
            
        </div>
    );

};
    
export default Die;