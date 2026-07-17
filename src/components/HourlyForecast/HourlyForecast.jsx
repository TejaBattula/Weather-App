import React from 'react'
import weather from '../../assets/weather.png'
import './HourlyForecast.css'
const HourlyForecast = ({nextFiveDaysData}) => {
  const hourforecast = []

  for(let i=0;i<6;i+=1){
    const hour = nextFiveDaysData?.list?.[i]?.dt_txt?.split(" ")[1] ?? "00:00:00"
    const temp = nextFiveDaysData?.list?.[i]?.main?.temp ?? 0
    hourforecast.push({hour:Number(hour.split(":")[0]),temp:temp})
  }


  return (
    <div class="right-side-bottom">
                <h4 style={{fontSize:"20px"}}>Today</h4>
                <div class="hoursTempDiv">
                    <div class="singleHourTempDiv rightChildBottom">
                        <h4 id="onetemp">{hourforecast[0].hour?(hourforecast[0].hour-12)+":00 PM":"00:00:00"}</h4>
                        <img src={weather} width="30"/>
                        <h4><span id="onehour"></span>{hourforecast[0].temp} &deg;C</h4>
                    </div>
                    <div class="singleHourTempDiv rightChildBottom">
                        <h4 id="twotemp">{hourforecast[1].hour?(hourforecast[1].hour-12)+":00 PM":"00:00:00"}</h4>
                        <img src={weather} width="30"/>

                        <h4><span id="twohour"></span>{hourforecast[1].temp} &deg;C</h4>
                    </div>
                    <div class="singleHourTempDiv rightChildBottom">
                        <h4 id="threetemp">{hourforecast[2].hour?(hourforecast[2].hour-12)+":00 PM":"00:00:00"}</h4>
                        <img src={weather} width="30"/>

                        <h4><span id="threehour"></span>{hourforecast[2].temp} &deg;C</h4>
                    </div>
                    <div class="singleHourTempDiv rightChildBottom">
                        <h4 id="fourtemp">{hourforecast[3].hour?(12-hourforecast[3].hour)+":00 AM":"00:00:00"}</h4>
                        <img src={weather} width="30"/>

                        <h4><span id="fourhour"></span>{hourforecast[3].temp} &deg;C</h4>
                    </div>
                    <div class="singleHourTempDiv rightChildBottom">
                        <h4 id="fivetemp">{hourforecast[4].hour?(12-hourforecast[4].hour)+":00 AM":"00:00:00"}</h4>
                        <img src={weather} width="30"/>

                        <h4><span id="fivehour"></span>{hourforecast[4].temp} &deg;C</h4>
                    </div>
                    <div class="singleHourTempDiv rightChildBottom">
                        <h4 id="sixtemp">{hourforecast[5].hour?(12-hourforecast[5].hour)+":00 AM":"00:00:00"}</h4>
                        <img src={weather} width="30"/>

                        <h4><span id="sixhour"></span>{hourforecast[5].temp} &deg;C</h4>
                    </div>
                </div>
            </div>
  )
}

export default HourlyForecast