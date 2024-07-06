import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from '../assets/img/logo.png';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar />
        <div>
          <img src={Logo} className="logo" alt="Monopoly-logo" />
        </div>
        <h1>Bienvenido a Monopoly!</h1>
        <p>Juega a ser millonario y compra las ciudades del mundo!</p>
        <div className="card">
          <button onClick={() => navigate('/Login')}>
            Jugar
          </button>
          <button onClick={() => navigate('/Register')}>
            Registrarse
          </button>
        </div>
        <div className="footer">
          <p>Equipo Huachipato Games.</p>
        </div>
      </div>
    </>
  );
}

export default App;

