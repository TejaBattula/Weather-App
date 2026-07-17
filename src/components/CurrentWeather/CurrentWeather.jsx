import React from 'react'
import './CurrentWeather.css'
const CurrentWeather = ({searchData}) => {
 
    const cityname = searchData?.name || "City Name";
    const temperature = searchData?.main?.temp || 0;
    const description = searchData?.weather?.[0]?.description || "Description";
    const date = searchData ? new Date(searchData.dt * 1000) : null;
    const formattedDate = date
    ? date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";
    const formattedTime = date
    ? date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "";
  return (
    <div className="currentWeather-page">
        <h3 className="city-name">{cityname}</h3>
        <h1 className="city-temp">{temperature}&deg;C</h1>
        <p className="city-desc">{description}</p>
        <div className='hr-line'></div>
        <div className="date">
            <i class="fa-solid fa-calendar"></i>
            <p>{formattedDate?formattedDate:"date"}</p>
        </div>
        <div className="time">
        <i class="fa-solid fa-clock"></i>
        <p>{formattedTime?formattedTime:"time"}</p>
        </div>
    </div>
  )
}

export default CurrentWeather