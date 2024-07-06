import React, { useState } from 'react';
import Navbar from './Navbar';
import './Principal.css';
import coheteImg from '../assets/img/cohete.png';
import barcoImg from '../assets/img/barco.png';
import avionImg from '../assets/img/avion.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Principal() {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState(""); // Estado para almacenar el ID del juego creado

  const iniciarPartida = () => {
    const userId = localStorage.getItem('userId'); // Obtener el ID del usuario actual desde localStorage

    axios.post('https://api-huachinopoly.onrender.com/game')
      .then((response) => {
        console.log('Partida iniciada');
        const gameId = response.data.id; // Obtener el ID del juego creado
        localStorage.setItem('gameId', gameId); // Guardar el ID del juego en localStorage
        setGameId(gameId); // Actualizar el estado con el ID del juego

        // Unir al usuario al juego
        axios.post(`https://api-huachinopoly.onrender.com/game/${gameId}/join/${userId}`, { name: "Nombre del jugador" })
          .then((response) => {
            console.log('Usuario unido al juego');
            navigate('/VentanaJuego');
          })
          .catch((error) => {
            console.error('Error al unirse al juego:', error);
          });
      })
      .catch((error) => {
        console.error('Error al iniciar la partida:', error);
      });
  };

  const handleLogout = () => {
    navigate('/Logout');
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="logout-container">
          <button onClick={handleLogout}>Log Out</button>
        </div>
        <div className="carta-container">
          <div className="carta">
            <img src={coheteImg} alt="Cohete" className="carta-image" />
            <h2 className="carta-title">Iniciar partida</h2>
            <p className="carta-description">
              Juega a ser millonario y compra las ciudades del mundo!
            </p>
            <button onClick={iniciarPartida}>Iniciar</button>
          </div>
          <div className="carta">
            <img src={barcoImg} alt="Barco" className="carta-image" />
            <h2 className="carta-title">Sumarme a Partida</h2>
            <p className="carta-description">
              Únete a partidas ya existentes.
            </p>
            <button onClick={() => navigate('/Unirse')}>Unirse</button>
          </div>
          <div className="carta">
            <img src={avionImg} alt="Avion" className="carta-image" />
            <h2 className="carta-title">Mejores Jugadores</h2>
            <p className="carta-description">
              Descubre los mejores jugadores del mundo en Monopoly!
            </p>
            <button>Descubrir</button>
          </div>
        </div>
        <div className="footer">
          <p>Equipo Huachipato Games.</p>
        </div>
      </div>
    </>
  );
}

export default Principal;

