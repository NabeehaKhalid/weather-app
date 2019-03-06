import React, {Component} from "react";
import '../App.css';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Clothes from './Clothes.js';



const Weather = (props) => {
  return(

				<div >
          <div>
  					{<p className="location">{props.city}</p>}
  					{<p className="description"> {props.description}</p>}
            <p className="mainImage">{props.icon[props.iconName]}</p>
  					{<p className="temperature">{Math.round((props.temperature-32)*5/9)}°c</p>}

          </div>



				<div className="scroll">
					<button className="humidityBubble">{<p className="humidity">
						Humidity: {props.humidity*100}% </p>} </button>

					<button className="feelsLikeBubble"><p className="feelsLike">
						Feels Like: {Math.round((props.feelsLike-32)*5/9)}°c</p> </button>

					<button className="chanceOfRainBubble"><p className="chanceOfRain">
						Chance of Rain: {props.chanceOfRain}%</p> </button>

					<button className="windSpeedBubble"><p className="windSpeed">
						Wind Speed: {Math.round(props.windSpeed)} mph</p> </button>


          <div className="weekSummary">
            <div className="weekSummaryTitle">WEEKLY SUMMARY:</div>
            {props.weeklySummary}
          </div>

          <table>
            <tbody>
              <tr>
                <th>DAY</th>
                <th>AVERAGE</th>
                <th>MIN</th>
                <th>MAX</th>
              </tr>
              <tr>
                <td>{props.forecast[1].time}</td>
                <td>{Math.round(((props.forecast[1].temperatureMin + props.forecast[1].temperatureMax)/2-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[1].temperatureMin-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[1].temperatureMax-32)*5/9)}°c</td>
              </tr>
              <tr>
                <td>{props.forecast[2].time}</td>
                <td>{Math.round(((props.forecast[2].temperatureMin + props.forecast[2].temperatureMax)/2-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[2].temperatureMin-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[2].temperatureMax-32)*5/9)}°c</td>
              </tr>
              <tr>
                <td>{props.forecast[3].time}</td>
                <td>{Math.round(((props.forecast[3].temperatureMin + props.forecast[3].temperatureMax)/2-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[3].temperatureMin-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[3].temperatureMax-32)*5/9)}°c</td>
              </tr>
              <tr>
                <td>{props.forecast[4].time}</td>
                <td>{Math.round(((props.forecast[4].temperatureMin + props.forecast[4].temperatureMax)/2-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[4].temperatureMin-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[4].temperatureMax-32)*5/9)}°c</td>
              </tr>
              <tr>
                <td>{props.forecast[5].time}</td>
                <td>{Math.round(((props.forecast[5].temperatureMin + props.forecast[5].temperatureMax)/2-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[5].temperatureMin-32)*5/9)}°c</td>
                <td>{Math.round((props.forecast[5].temperatureMax-32)*5/9)}°c</td>
              </tr>
            </tbody>
          </table>




        </div>


        </div>

)
}

export default Weather;

//{<p className="mainImage"> {props.icon[props.description]}</p>}
