//ECS522U/ECS744P Graphical User Interfaces project
//Assignment 2 - Implementation of Weather-App

//Group 19
  //Nabeeha Khalid - 170434328
  //Zara Mahmood - 170945916

//----------NAVIGATION PAGE----------

import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return(
    <div>
    <ul>
      <li ><NavLink to="/Weather">Weather</NavLink></li>
      <li ><NavLink to="/Clothes">Clothes</NavLink></li>
    </ul>
    </div>
  )
}

export default Navigation;
