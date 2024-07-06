import React, { useContext, useState, useEffect } from 'react';
import './Login.css';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!");

    setTimeout(() => {
      navigate('/');
    }, 2000); 
  }

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  const handleVolver = () => {
    navigate('/Principal');
  }

  return (
    <>
      <Navbar />
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
      <button onClick={handleVolver}>
        Volver
      </button>
    </>
  );
}

export default LogoutButton;

