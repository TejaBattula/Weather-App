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

  const [isloading,setloading]=useState(false)
  const [iserror,seterror]=useState(false)
  const handleSubmit = async (value)=>{
    console.log(value);
    const city= value||"Mumbai"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    try {
        setloading(true)
        seterror(false)
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        let data =await response.json();
        setsearchData(data)
        let lat=data.coord.lat
        
        let lon=data.coord.lon
        let response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        let fivedaysforecast = await response2.json();
        setnextFiveDaysData(fivedaysforecast)
        
        let response3 = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )
        let airQuality = await response3.json();
        setairQualityData(airQuality)
        setloading(false)
    } catch (error) {
        console.log("Error occured!");
        seterror(true)
        setloading(false)
    }
  }
  return (
    <div className='weatherapp-page'>
      <div className="searchbar">
        <SearchBar handleSubmit={handleSubmit}/>
        <h3 style={{color : "green"}}>{isloading?"Loding please wait...":""}</h3>
        <h3 style={{color:"red"}}>{iserror?"Error Occured!...":""}</h3>

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