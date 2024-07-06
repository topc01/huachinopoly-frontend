import React, { useState } from 'react';
import Navbar from './Navbar';
import './Register.css';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [alert, setAlert] = useState('');

  function handleRegister() {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(username)) {
      setAlert('ERROR: Usuario debe ser alfanumérico');
      return;
    }

    const mailRegex = /^\S+@\S+\.\S+$/;
    if (!mailRegex.test(mail)) {
      setAlert('ERROR: Correo electrónico inválido');
      return;
    }

    axios
      .post('https://api-huachinopoly.onrender.com/signup', { username: username, password: password, mail: mail })
      .then(response => {
        if (response.status === 201) {
          setAlert(`Usuario ${username} se creó exitosamente`);
          setUsername('');
          setPassword('');
          setMail('');
        } else {
          setAlert('Error al intentar crear usuario');
        }
      })
      .catch(error => {
        setAlert('Error al intentar crear usuario');
      });
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <h1>Registra aquí un nuevo usuario!</h1>
        <div className="register-container">
          <div className="register-form">
            <h2>Ingresa el nombre de usuario:</h2>
            <input
              type="text"
              id="username"
              className="register-input"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <h2>Ingresa la contraseña:</h2>
            <input
              type="password"
              id="password"
              className="register-input"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <h2>Ingresa el correo electrónico:</h2>
            <input
              type="email"
              id="mail"
              className="register-input"
              value={mail}
              onChange={event => setMail(event.target.value)}
            />
            <div className="alert">{alert}</div>
            <button onClick={handleRegister}>Registrar al nuevo usuario</button>
          </div>
        </div>
        <div className="footer">
          <p>Equipo Huachipato Games.</p>
        </div>
      </div>
    </>
  );
}

export default Register;





