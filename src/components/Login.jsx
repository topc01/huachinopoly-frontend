import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import './Login.css';
import Navbar from './Navbar';

function Login() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`https://api-huachinopoly.onrender.com/login`, {
      mail: mail,
      password: password
    })
      .then((response) => {
        console.log('Inicio de sesión exitoso');
        setError(false);
        setMsg("¡Inicio de sesión exitoso!");
        const { access_token, user } = response.data;
        localStorage.setItem('token', access_token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('username', user.username);
        setToken(access_token);
        console.log("Se estableció el token: ", access_token);

        setTimeout(() => {
          navigate('/Principal');
        }, 1000);
      })
      .catch((error) => {
        console.error('Ocurrió un error al intentar iniciar sesión:', error);
        setError(true);
      });
  };

  return (
    <div className="Login">
      <Navbar />
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}
      {error && <div className="error">Hubo un error con el inicio de sesión, por favor inténtalo nuevamente.</div>}
      <h1>Login Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input
            type="mail"
            name="mail"
            value={mail}
            onChange={e => setMail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Login;
