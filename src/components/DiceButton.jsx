import './DiceButton.css';

export default function DiceButton({onClick}) {
    return (
        <div className='boton-container'>
            <button onClick={onClick} className='boton'/>
            <p>Presiona el boton para ver como avanza el auto!</p>
        </div>
    )
} 