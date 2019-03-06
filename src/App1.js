
//import Form from './components/Form';
import Weather from './components/Weather';
import Styles from './App.css';
import {Router,Route,Switch} from 'react-router';
//import { Button } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

import rain from './components/images/icons/Rain.svg'
import snow from './components/images/icons/Snow.svg'
import thunderstrom from './components/images/icons/Thunderstorm.svg'
import drizzle from './components/images/icons/Drizzle.svg'
import clear from './components/images/icons/Clear.svg'
import clouds from './components/images/icons/Clouds.svg'

const weatherIcons ={
  Rain: <img src={rain}/>,
  Snow: <img src={snow}/>,
  Thunderstrom: <img src={thunderstrom}/>,
  Drizzle: <img src={drizzle}/>,
  Clear: <img src={clear}/>,
  Clouds: <img src={clouds}/>
}

class App extends Component {

  constructor(props) {
    super(props);
  this.state={
      city: '',
      temperature: '',
      description: '',
      humidity: '',
      windSpeed: '',
      feelsLike: '',
      loaded: false,
      forecast:[],
      icon:weatherIcons
    }
  }

  getWeather = async(e) => {
    document.getElementById("getWeather_btn").style.visibility="hidden";

    e.preventDefault()

    const apiWeather=await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=356a159c433d9dbbded590451fc05b55&units=metric');
      const dataWeather=await apiWeather.json();
      console.log(dataWeather)


    const apiForecast=await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=356a159c433d9dbbded590451fc05b55&units=metric');
    const dataForecast=await apiForecast.json();
    console.log(dataForecast)
      this.setState({
        test:dataForecast.message,
        city:dataWeather.name,
        temperature:dataWeather.main.temp,
        description:dataWeather.weather[0].main,
        humidity:dataWeather.main.humidity,
        windSpeed:dataWeather.wind.speed,
        loaded:true,
        forecast:dataForecast,
        icon:weatherIcons

    });
  }
  render() {
      if (this.state.loaded){
        return (
          <div className="container">

            <button id="getWeather_btn" className="getWeather_button" onClick={this.getWeather}>Get Weather</button>

            <Weather className="container"
              city={this.state.city}
              temperature={this.state.temperature}
              description={this.state.description}
              humidity={this.state.humidity}
              windSpeed={this.state.windSpeed}
              test={this.state.test}
              forecast={this.state.forecast}
              icon={this.state.icon}
            />
          </div>
        );
      }
    else {
      return(
        <div className="container">
          <button id="getWeather_btn" className="getWeather_button" onClick={this.getWeather}>Get Weather</button>
        </div>
      )
    }
  }
}

export default App;
