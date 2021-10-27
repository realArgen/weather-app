import React from "react";

const Weather =({weatherData})=>{

    const formattedTime = (time)=>{
        const date = new Date(time*1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }

    return(
        <div>
            <div>
                <p>Город: {weatherData.name}
                    <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png}`} alt="Icon Weather" />
                </p>
                <p>Температура: {(weatherData.main.temp-273.15).toFixed(2)}°C</p>
                <p>Давление: {weatherData.main.pressure} Па</p>
                <p>Влажность: {weatherData.main.humidity}%</p>
                <p>Время: {formattedTime(weatherData.dt)}</p>
                <p>Восход: {formattedTime(weatherData.sys.sunrise)}</p>
                <p>Закат: {formattedTime(weatherData.sys.sunset)}</p>
                <p>Скорость ветра: {formattedTime(weatherData.wind.speed)}</p>
            </div>
        </div>
    )
}

export default Weather;