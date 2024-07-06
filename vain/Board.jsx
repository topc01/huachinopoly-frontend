import board_img from '../assets/img/board.png';
import Auto from '../assets/img/auto.png';
import './Board.css'

export default function Board({style}) {
    // const carName = 'img-auto';
    return (
        <div className='board'>
            <img src={Auto} alt="auto" className='img-auto' style={style}/>
        </div>
    );
}