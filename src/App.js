//ECS522U/ECS744P Graphical User Interfaces project
//Assignment 2 - Implementation of Weather-App

//Group 19
  //Nabeeha Khalid - 170434328
  //Zara Mahmood - 170945916

//----------MAIN APP PAGE----------

import Weather from './components/Weather';
import Clothes from './components/Clothes';
import Navigation from './components/Navigation';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';


//importing weather icons
import rain from './components/images/icons/Rain.svg'
import snow from './components/images/icons/Snow.svg'
import thunderstrom from './components/images/icons/Thunderstorm.svg'
import fog from './components/images/icons/Fog.svg'
import clear_day from './components/images/icons/Clear_Day.svg'
import clear_night from './components/images/icons/Clear_Night.svg'
import cloudy_day from './components/images/icons/Cloudy_Day.svg'
import cloudy_night from './components/images/icons/Cloudy_Night.svg'
import wind from './components/images/icons/Wind.svg'

//importing clothes images
import boots_mens from './components/images/clothes/boots_mens.png'
import cap from './components/images/clothes/cap.png'
import denim_jacket from './components/images/clothes/denim_jacket.png'
import dress_womens from './components/images/clothes/dress_womens.png'
import hat from './components/images/clothes/hat.png'
import hoodie from './components/images/clothes/hoodie.png'
import jacket1_mens from './components/images/clothes/jacket1_mens.png'
import jacket_womens from './components/images/clothes/jacket_womens.png'
import jeans from './components/images/clothes/jeans.png'
import raincoat from './components/images/clothes/raincoat.png'
import scarf from './components/images/clothes/scarf.png'
import shirt_mens from './components/images/clothes/shirt_mens.png'
import shirt1_mens from './components/images/clothes/shirt1_mens.png'
import shirt_womens from './components/images/clothes/shirt_womens.png'
import shorts_mens from './components/images/clothes/shorts_mens.png'
import skirt from './components/images/clothes/skirt.png'
import sneakers_womens from './components/images/clothes/sneakers_womens.png'
import sneakers_mens from './components/images/clothes/sneakers_mens.png'
import socks from './components/images/clothes/socks.png'
import sweater_mens from './components/images/clothes/sweater_mens.png'
import umbrella from './components/images/clothes/umbrella.png'


//setting weather icons to weather so it changes accordingly
const weatherIcons = {
  clear_day:<img src={clear_day} alt="clearDayImage"/>,
  clear_night:<img src={clear_night} alt="clearNightImage"/>,
  rain:<img src={rain} alt="rainImage"/>,
  snow: <img src={snow} alt="snowImage"/>,
  wind:<img src={wind} alt="windImage"/>,
  fog:<img src={fog} alt="fogImage"/>,
  partly_cloudy_day:<img src={cloudy_day} alt="cloudDayImage"/>,
  partly_cloudy_night:<img src={cloudy_night} alt="cloudyNightImage"/>,
  thunderstrom: <img src={thunderstrom} alt="thunderstromImage"/>,
  cloudy: <img src={cloudy_night} alt="cloudyNightImage"/>
}

//setting different clothes icons in an array to different weather situations so they change accordingly
const clothes={
  rain:[<img src={raincoat} alt="raincoat" width={120} height={120} mode="fit"/>,
        <img src={umbrella} alt="umbrella" width={120} height={120} mode="fit"/>,
        <img src={jeans} alt="jeans" width={120} height={120} mode="fit"/>,
        <img src={shirt_mens} alt="shirt_mens" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens" width={120} height={120} mode="fit"/>,
        <img src={sneakers_mens} alt="sneakers_mens" width={120} height={120} mode="fit"/>],

  cloudy:[<img src={socks} alt="socks" width={120} height={120} mode="fit"/>,
        <img src={denim_jacket} alt="denim_jacket" width={120} height={120} mode="fit"/>,
        <img src={jeans} alt="jeans" width={120} height={120} mode="fit"/>,
        <img src={shirt_mens} alt="shirt_mens" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens" width={120} height={120} mode="fit"/>,
        <img src={sneakers_mens} alt="sneakers_mens" width={120} height={120} mode="fit"/>],

  partly_cloudy_night:[<img src={socks} alt="socks" width={120} height={120} mode="fit"/>,
        <img src={denim_jacket} alt="denim_jacket" width={120} height={120} mode="fit"/>,
        <img src={jeans} alt="jeans" width={120} height={120} mode="fit"/>,
        <img src={shirt_mens} alt="shirt_mens" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens" width={120} height={120} mode="fit"/>,
        <img src={sneakers_mens} alt="sneakers_mens" width={120} height={120} mode="fit"/>,],

  partly_cloudy_day:[<img src={socks} alt="socks" width={120} height={120} mode="fit"/>,
        <img src={denim_jacket} alt="denim_jacket" width={120} height={120} mode="fit"/>,
        <img src={jeans} alt="jeans" width={120} height={120} mode="fit"/>,
        <img src={shirt_mens} alt="shirt_mens" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens" width={120} height={120} mode="fit"/>,
        <img src={sneakers_mens} alt="sneakers_mens"width={120} height={120} mode="fit"/>],

  clear_day:[<img src={cap} alt="cap" width={120} height={120} mode="fit"/>,
        <img src={dress_womens} alt="dress_womens" width={120} height={120} mode="fit"/>,
        <img src={shirt1_mens} alt="shirt1_mens" width={120} height={120} mode="fit"/>,
        <img src={shirt_womens} alt="shirt_womens" width={120} height={120} mode="fit"/>,
        <img src={skirt} alt="skirt" width={120} height={120} mode="fit"/>,
        <img src={shorts_mens} alt="shorts_mens"width={120} height={120} mode="fit"/>],

  clear_night:[<img src={cap} alt="cap" width={120} height={120} mode="fit"/>,
        <img src={dress_womens} alt="dress_womens" width={120} height={120} mode="fit"/>,
        <img src={shirt1_mens} alt="shirt1_mens" width={120} height={120} mode="fit"/>,
        <img src={shirt_womens} alt="shirt_womens" width={120} height={120} mode="fit"/>,
        <img src={skirt} alt="skirt" width={120} height={120} mode="fit"/>,
        <img src={shorts_mens} alt="shorts_mens"width={120} height={120} mode="fit"/>],

  snow:[<img src={boots_mens} alt="cap" width={120} height={120} mode="fit"/>,
        <img src={jacket1_mens} alt="dress_womens" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens" width={120} height={120} mode="fit"/>,
        <img src={hoodie} alt="hoodie" width={120} height={120} mode="fit"/>,
        <img src={sweater_mens} alt="sweater_mens" width={120} height={120} mode="fit"/>,
        <img src={scarf} alt="scarf"width={120} height={120} mode="fit"/>],

  wind:[<img src={sweater_mens} alt="sweater_mens" width={120} height={120} mode="fit"/>,
        <img src={jacket1_mens} alt="jacket1_mens" width={120} height={120} mode="fit"/>,
        <img src={jeans} alt="jeans" width={120} height={120} mode="fit"/>,
        <img src={sneakers_womens} alt="sneakers_womens" width={120} height={120} mode="fit"/>,
        <img src={hat} alt="hat" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens"width={120} height={120} mode="fit"/>],

  fog:[<img src={cap} alt="cap" width={120} height={120} mode="fit"/>,
        <img src={dress_womens} alt="dress_womens" width={120} height={120} mode="fit"/>,
        <img src={shirt1_mens} alt="shirt1_mens" width={120} height={120} mode="fit"/>,
        <img src={shirt_womens} alt="shirt_womens" width={120} height={120} mode="fit"/>,
        <img src={skirt} alt="skirt" width={120} height={120} mode="fit"/>,
        <img src={shorts_mens} alt="shorts_mens"width={120} height={120} mode="fit"/>],

  thunderstrom:[<img src={boots_mens} alt="boots_mens" width={120} height={120} mode="fit"/>,
        <img src={jacket1_mens} alt="dress_womens" width={120} height={120} mode="fit"/>,
        <img src={jacket_womens} alt="jacket_womens" width={120} height={120} mode="fit"/>,
        <img src={hoodie} alt="hoodie" width={120} height={120} mode="fit"/>,
        <img src={sweater_mens} alt="sweater_mens" width={120} height={120} mode="fit"/>,
        <img src={scarf} alt="scarf"width={120} height={120} mode="fit"/>]
}


class App extends Component {
  constructor(props) {
    super(props);
  this.state={//setting states of variables
      city: '',
      temperature: '',
      description: '',
      humidity: '',
      feelsLike: '',
      chanceOfRain:'',
      windSpeed: '',
      loaded: false,
      forecast:[],
      weeklySummary:'',
      dailySummary:'',
      data:'',
      icon:weatherIcons,
      iconName:'',
      clothesIcon:clothes
    }
  }

  //getWeather which gets the weather information from api when button clicked
  getWeather = async(e) => {
    document.getElementById("getWeather_btn").style.visibility="hidden";

    e.preventDefault()

    //await allows all the data from the api to load before passing onto JSON variable
    //CORS error occurs without ('https://cors-anywhere.herokuapp.com') due to Dark Sky API security
    const apiWeather=await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ccd3d30c2893d71a1e27328402f54f3/51.5074,-0.1278');
    const dataWeather=await apiWeather.json();
    console.log(dataWeather);

    //this sets the states of the variables declared with the information from API
    this.setState({
      data:dataWeather,
      loaded:true,
      city:'london',
      temperature:dataWeather.currently.temperature,
      description:dataWeather.currently.icon.replace(/-/g,' '),
      humidity:dataWeather.currently.humidity,
      feelsLike:dataWeather.currently.apparentTemperature,
      chanceOfRain:dataWeather.currently.precipProbability,
      windSpeed:dataWeather.currently.windSpeed,
      forecast:dataWeather.daily.data,
      weeklySummary:dataWeather.daily.summary,
      dailySummary:dataWeather.hourly.summary,
      iconName:dataWeather.currently.icon.replace(/-/g,'_'),
      icon:weatherIcons,
      clothesIcon:clothes
    });
  }

  render() {
    if (this.state.loaded){
      return (
        <div className="container">
        <button id="getWeather_btn" className="getWeather_button" onClick={this.getWeather}>Get Weather</button>
          <div className="dotstyle dotstyle-fillup">
            <BrowserRouter>
              <div>
                <Navigation/>
                <Switch>
                  <Route path="/Weather" render={() => <Weather
                              city={this.state.city}
                              temperature={this.state.temperature}
                              description={this.state.description}
                              humidity={this.state.humidity}
                              feelsLike={this.state.feelsLike}
                              chanceOfRain={this.state.chanceOfRain}
                              windSpeed={this.state.windSpeed}
                              forecast={this.state.forecast}
                              weeklySummary={this.state.weeklySummary}
                              icon={this.state.icon}
                              iconName={this.state.iconName}
                              />} exact/>
                  <Route path="/Clothes" render={() => <Clothes
                              clothesIcon={this.state.clothesIcon[this.state.iconName]}
                              dailySummary={this.state.dailySummary}
                                />}/>
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      );
    }

    else {
      return(
        <div id="weather" className="container">
          <button id="getWeather_btn" className="getWeather_button" onClick={this.getWeather}>Get Weather</button>
        </div>
      )
    }
  }
}
export default App;
