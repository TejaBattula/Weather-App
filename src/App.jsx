import React, { useState } from 'react'
import './App.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import FiveDaysForecast from './components/FiveDaysForecast/FiveDaysForecast'
import AirQuality from './components/AirQuality/AirQuality'
import SunsetSunrise from './components/SunsetSunrise/SunsetSunrise'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'
import SearchBar from './components/SearchBar/SearchBar'
import Metricvalues from './components/Metrics/Metricvalues'
const App =  () => {
  const [searchData,setsearchData]=useState({})
  const [nextFiveDaysData,setnextFiveDaysData]=useState([])
  const [airQualityData,setairQualityData]=useState([])
  const handleSubmit = async (value)=>{
    console.log(value);
    const city= value||"Mumbai"
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3991e2b34cf5b57dd990f88ab8deb514&units=metric`)
        let data =await response.json();
        setsearchData(data)
        let lat=data.coord.lat
        console.log(lat);
        
        let lon=data.coord.lon
        let response2 = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=17.69&lon=83.2093&appid=3991e2b34cf5b57dd990f88ab8deb514&units=metric')
        let fivedaysforecast = await response2.json();
        setnextFiveDaysData(fivedaysforecast)
        
        let response3 = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=3991e2b34cf5b57dd990f88ab8deb514`)
        let airQuality = await response3.json();
        setairQualityData(airQuality)
        
    } catch (error) {
        console.log("Error occured!");
        
    }
  }
  return (
    <div className='weatherapp-page'>
      <div className="searchbar">
        <SearchBar handleSubmit={handleSubmit}/>
      </div>
      <div className='body-section'>
        <div className="left-section">
          <CurrentWeather searchData={searchData}/>
          <FiveDaysForecast nextFiveDaysData={nextFiveDaysData}/>
        </div>
        <div className="right-section">
          <div style={{marginBottom:"40px"}} className='Metric'>
            <Metricvalues searchData={searchData}/>
          </div>
          <div className='air-sun-div'>
            <AirQuality airQualityData={airQualityData}/>
            <SunsetSunrise searchData={searchData}/>
          </div>
          <div className='hourlyTemp'>
            <HourlyForecast nextFiveDaysData={nextFiveDaysData}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App