import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
      <div className='nav'>
        <NavLink to='/' className="nav-element">
          Home
        </NavLink>
        <NavLink to='/aboutUs' className="nav-element">
          Sobre Nosotros
        </NavLink>
        <NavLink to='/instructions' className="nav-element">
          Instrucciones
        </NavLink>
        <NavLink to='/Board' className="nav-element">
          Tablero
        </NavLink>
      </div>
    )
}

export default Navbar;