import React from 'react'
import './SunsetSunrise.css'
import sun from "../../assets/sun.png";
import moon from "../../assets/full-moon.png";
const SunsetSunrise = ({searchData}) => {

  const sunrisetime = searchData?.sys?.sunrise? new Date(searchData.sys.sunrise*1000) : null
  const sunrise = sunrisetime ? sunrisetime.toLocaleTimeString("en-In",{
    hour :"2-digit",
    minute:"2-digit",
    hour12 :true
  }):"--"

  const sunsettime = searchData?.sys?.sunset? new Date(searchData.sys.sunset*1000) : null
  const sunset = sunsettime ? sunsettime.toLocaleTimeString("en-In",{
    hour :"2-digit",
    minute:"2-digit",
    hour12 :true
  }):"--"

  return (
    <div class="right-side-middle-rightDiv">
        <h3>Sunrise & Sunset</h3>
        <div class="sunrise-sunset-info">
            <img src={sun} alt="" width="50"/>
            <div>
                <h4>Sunrise</h4>
                <h2 id="sunrise">{sunrise}</h2>
            </div>
            <img src={moon} alt="moon" width="50"/>
            <div>
                <h4>Sunset</h4>
                <h2 id="sunset">{sunset}</h2>
            </div>
        </div>
    </div>
    
  )
}

export default SunsetSunrise