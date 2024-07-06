import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './VentanaJuego.css';

function VentanaJuego() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const gameId = localStorage.getItem('gameId');
  const userId = localStorage.getItem('userId');
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios
      .get('https://api-huachinopoly.onrender.com/game')
      .then((response) => {
        const currentGame = response.data.find((g) => g.id === Number(gameId));
        setGame(currentGame);
        const currentPlayer = currentGame.players.find((p) => p.userId === Number(userId));
        setPlayer(currentPlayer);
      })
      .catch((error) => {
        console.error('Error al obtener los juegos:', error);
      });
  }, [gameId, userId]);

  const handleStart = () => {
    axios
      .post(`https://api-huachinopoly.onrender.com/game/${gameId}/start`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Error al iniciar el juego:', error);
      });
  };

  const handleGoBack = () => {
    navigate('/Principal');
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="tablero-container">
          <div className="board1"></div>
          <div className="datos-container">
            <div className="game-info">
              <p>Game ID: {game ? game.id : ''}</p>
              <div className="jugador-actual">
                <div className="cuadrado-negro">
                  <p>Jugador Actual: {username}</p>
                  {player && (
                    <>
                      <p>Cuenta corriente: ${player.balance}</p>
                      <p>Posición: {player.position}</p>
                    </>
                  )}
                  <button>Ver mis propiedades</button>
                </div>
              </div>
            </div>
            <div className="botones">
              {game && !game.started && <button onClick={handleStart}>Start</button>}
              <button onClick={handleGoBack}>Volver</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Equipo Huachipato Games.</p>
        </div>
      </div>
    </>
  );
}

export default VentanaJuego;



