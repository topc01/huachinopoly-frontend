import Navbar from "./Navbar";
import DiceButton from "./DiceButton";
import Auto from '../assets/img/auto.png';
import './Board.css';
import { useState } from 'react';


export default function Board() {
    const [movesLeft, setMovesLeft] = useState(0);
    const [movesUp, setMovesUp] = useState(0);

    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    const add = 40;

    const handleClick = () => {
        let dirX = 0;
        let dirY = 0;
        if ((movesLeft < 10) && (movesUp == 0)) {
            dirX = -1;
            setMovesLeft(movesLeft + 1);
        }
        else if ((movesLeft == 10) && (movesUp < 10)) {
            dirY = -1;
            setMovesUp(movesUp + 1);
        }
        else if ((movesLeft > 0) && (movesUp == 10)) {
            dirX = 1;
            setMovesLeft(movesLeft - 1);
        }
        else if ((movesLeft == 0) && (movesUp > 0)) {
            dirY = 1;
            setMovesUp(movesUp - 1);
        }
        const newXPos = xPos + add * dirX;
        const newYPos = yPos + add * dirY;
        setXPos(newXPos);
        setYPos(newYPos);
    }

    return (
        <>
            <Navbar />
            <h1>Tablero</h1>
            <div className="board-container">
                <div className='board'>
                    <img src={Auto} alt="auto" className='img-auto' style={{ transform: `translate(${xPos}px, ${yPos}px)` }}/>
                </div>
                <br/><br/>            
                <DiceButton onClick={handleClick}/>
            </div>
        </>
    )
}