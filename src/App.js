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


import jacket1 from './components/images/clothes/024-hoodie-1.svg'
import jacket2 from './components/images/clothes/006-coat.svg'


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
}

const clothes={
  rain:[<img src={jacket1} alt="jacket1"/>, <img src={jacket2} alt="jacket2"/>]
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
    const apiWeather=await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ccd3d30c2893d71a1e27328402f54f3/51.5074,-0.1278');
    const dataWeather=await apiWeather.json();
    console.log(dataWeather)

    this.setState({
      data:dataWeather,
      loaded:true,
      city:'london',
      temperature:dataWeather.currently.temperature,
      //description:'Rain',
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
