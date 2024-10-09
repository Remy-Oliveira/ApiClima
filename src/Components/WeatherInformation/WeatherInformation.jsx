
const WeatherInformation = ({ weather }) => {
    console.log(weather);
    return (
        <div>
            <h2>{weather.name}</h2>

            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icons" />
                <p>{Math.round(weather.main.temp)}°C</p>
            </div>

            <p>{weather.weather[0].description}</p>

            <div>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity}</p>
                <p>Pressão:  {weather.main.pressure}</p>
            </div>

        </div>
    )
};

export default WeatherInformation;