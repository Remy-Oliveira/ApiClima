import { useState, useRef } from 'react'
import axios from 'axios';
import WeatherInformation from './Components/WeatherInformation/weatherinformation';

function App() {
  const [weather, setWeather] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "1b72b1b9ebd232e15ab3da932cb8f299";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);

  }

  return (
    <div>
      <h1>API CLIMA</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformation weather={weather} />}
    </div>
  )
}

export default App
