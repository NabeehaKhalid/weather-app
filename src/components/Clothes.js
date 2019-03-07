//ECS522U/ECS744P Graphical User Interfaces project
//Assignment 2 - Implementation of Weather-App

//Group 19
  //Nabeeha Khalid - 170434328
  //Zara Mahmood - 170945916

//----------CLOTHING SUGGESTIONS PAGE----------

import React from 'react';
import  '../App.css'


const Clothes = (props) => {
  return(
    <div className="Clothes">
      Clothing
      Suggestions
      <p className="dailySummary">{props.dailySummary}</p>

      <p></p>

      <table className="clothesTable">
        <tbody>
          <tr className="clothesTR">
            <td className="clothesTD">{props.clothesIcon[0]}</td>
            <td className="clothesTD">{props.clothesIcon[1]}</td>
          </tr>
          <tr className="clothesTR">
            <td className="clothesTD">{props.clothesIcon[2]}</td>
            <td className="clothesTD">{props.clothesIcon[3]}</td>
          </tr>
          <tr className="clothesTR">
            <td className="clothesTD">{props.clothesIcon[4]}</td>
            <td className="clothesTD">{props.clothesIcon[5]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Clothes;
