import React from 'react'
import './AirQuality.css'
const AirQuality = ({airQualityData}) => {
    
   const PH25=airQualityData?.list?.[0]?.components?.pm2_5 ?? "--"
   const SO2=airQualityData?.list?.[0]?.components?.so2 ?? "--"
   const NO2=airQualityData?.list?.[0]?.components?.no2 ?? "--"
   const O3=airQualityData?.list?.[0]?.components?.o3 ?? "--"

    
    
  return (

            <div class="right-side-middle-leftDiv">
                <h3>Air Quality Index (AQI)</h3>
                <div class="air-quality-div">
                    <i style={{fontSize:"20px"}} class="fa-solid fa-smog"></i>
                    <div >
                        <h5>PH25</h5>
                        <h5 id="ph25">{PH25}</h5>
                    </div>
                    <div >
                        <h5>SO2</h5>
                        <h5 id="so2">{SO2}</h5>
                    </div>
                    <div >
                        <h5>NO2</h5>
                        <h5 id="no2">{NO2}</h5>
                    </div>
                    <div >
                        <h5>O3</h5>
                        <h5 id="o3">{O3}</h5>
                    </div>
                </div>
            </div>
  )
}

export default AirQuality