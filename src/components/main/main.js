import React, { useState } from "react";
import axios from 'axios';
import CityForm from '../city-form/city-form'
import Weather from "../weather";
import Error from "../error/error";
import './style.css';

const Main = () =>{
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('');
   

    return (
        <div className="main">
            <div className="main_block">
                <CityForm setWeatherData={setWeatherData} weatherData={weatherData} city={city} setCity={setCity}/>
                {/* <Weather weatherData={weatherData}/> */}
                {
                    Object.entries(weatherData).length === 0?
                    'Здесь будет погода' : weatherData.error ?
                    <Error/>:<Weather weatherData={weatherData}/>
                }
            </div>
        </div>
    );

};

export default Main;
