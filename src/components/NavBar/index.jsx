import React from 'react';
import { NavLink } from 'react-router-dom'
import lfa from '../../assets/lfa-logo.png'

const NavBar = () => {

  return (
    <nav>
      <img src={lfa} alt="LFA LOGO" className="logo" />

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/deposit">Deposit</NavLink></li>
        <li><NavLink to="/withdraw">Withdraw</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;