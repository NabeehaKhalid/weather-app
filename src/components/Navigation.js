import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return(
    <div>
    <ul>
      <li><NavLink to="/Weather">Weather</NavLink></li>
      <li><NavLink to="/Clothes">Clothes</NavLink></li>
    </ul>

    </div>
  )
}

export default Navigation;
