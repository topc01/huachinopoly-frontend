import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Unirse.css';
import Navbar from './Navbar';

function Unirse() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api-huachinopoly.onrender.com/game')
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los juegos:', error);
      });
  }, []);

  const unirseAJuego = (gameId) => {
    const playerName = prompt('Ingresa tu nombre de jugador:');
    if (playerName) {
      console.log(`Unirse al juego ${gameId} con el nombre ${playerName}`);
      localStorage.setItem('gameId', gameId.toString());
      const userId = localStorage.getItem('userId');
      axios
        .post(`https://api-huachinopoly.onrender.com/game/${gameId}/join/${userId}`, { name: playerName })
        .then((response) => {
          console.log(response.data.message);

          // Almacenar el gameId en el localStorage
          // localStorage.setItem('gameId', gameId.toString());

          // Redirigir a la ventana del juego
          navigate('/VentanaJuego');
        })
        .catch((error) => {
          console.error('Error al unirse al juego:', error);
        });
    }
  };

  const handleVolver = () => {
    navigate('/Principal');
  };

  return (
    <div>
      <Navbar />
      <div className="volver-container">
          <button onClick={handleVolver}>Volver</button>
        </div>
      <h2>Unirse a una partida</h2>
      {games.length === 0 ? (
        <p>No hay juegos disponibles</p>
      ) : (
        <div className="carta-container">
          {games.map((game) => (
            <div className="carta" key={game.id}>
              <p className="carta-title">Juego ID: {game.id}</p>
              <p>Jugadores: {game.players.length}</p>
              <p>Estado: {game.started ? 'Iniciado' : 'Pendiente'}</p>
              <button
                onClick={() => unirseAJuego(game.id)}
                disabled={game.started}
              >
                {game.started ? 'Iniciado' : 'Unirse'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Unirse;


