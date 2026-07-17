import React from 'react'
import './Metricvalues.css'
const Metricvalues = ({searchData}) => {

    const pressure= searchData?.main?.pressure ?? "--"
    const humidity= searchData?.main?.humidity ?? "--"
    const wind_speed= searchData?.wind?.speed ?? "--"
    const feelsLike= searchData?.main?.feels_like ?? "--"

  return (
    <div className="right-side-Top">
                <div className="pressureDiv rightTopDiv">
                    <i style={{fontSize:"20px"}} className="fa-solid fa-wind" ></i>
                    <div>
                        <h4 className="metricname">Pressure</h4>
                        <h4 className="metricvalue">{pressure} hpa</h4>
                    </div>
                </div>
                <div className=" pressureDiv rightTopDiv">
                    <i style={{fontSize:"20px"}} className="fa-solid fa-wind" ></i>
                    <div>
                        <h4 className="metricname">Humidity</h4>
                        <h4 className="metricvalue">{humidity} %</h4>
                    </div>
                </div>
                <div className=" pressureDiv rightTopDiv">
                    <i style={{fontSize:"20px"}} className="fa-solid fa-wind" ></i>
                    <div>
                        <h4 className="metricname">Wind Speed</h4>
                        <h4 className="metricvalue">{wind_speed} m/s</h4>
                    </div>
                </div>
                <div className=" pressureDiv rightTopDiv">
                    <i style={{fontSize:"20px"}} className="fa-solid fa-temperature-high" ></i>
                    <div>
                        <h4 className="metricname">Feelslike</h4>
                        <h4 className="metricvalue">{feelsLike} &deg;C</h4>
                    </div>
                </div>
            </div>
  )
}

export default Metricvalues