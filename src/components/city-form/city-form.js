import axios from "axios";
import React from "react";

const CityForm = ({weatherData, setWeatherData, city, setCity}) =>{
    const API_KEY = '118b58e60394085475ab96826bb03c4d';
    const getWeatherData = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(({data})=>{
            return setWeatherData(data);
        })
        .catch(()=>{
            setWeatherData({...weatherData, error:true})
        })
    };
    
    const inputHandler = (e)=>{
        setCity(e.target.value);
    }
    return(
        <div>
            <form onSubmit={getWeatherData}>
            <input type="text" placeholder="Введите город" onChange={inputHandler}/>
            <button type="submit">Получить данные</button>
            </form>
            <div>
                {
                    JSON.stringify(weatherData)
                }
            </div>
        </div>
    )
}

export default CityForm;