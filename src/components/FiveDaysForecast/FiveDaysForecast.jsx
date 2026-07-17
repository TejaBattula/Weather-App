import React from 'react'
import './FiveDaysForecast.css'
const FiveDaysForecast = ({nextFiveDaysData}) => {
    const firstTemp = nextFiveDaysData?.list?.[0]?.main?.temp ?? 0
    const secondTemp = nextFiveDaysData?.list?.[8]?.main?.temp ?? 0
    const thirdTemp = nextFiveDaysData?.list?.[16]?.main?.temp ?? 0
    const fouthTemp = nextFiveDaysData?.list?.[24]?.main?.temp ?? 0
    const fifthtemp = nextFiveDaysData?.list?.[32]?.main?.temp ?? 0

    const firstDay = nextFiveDaysData?.list?.[0]?.dt_txt?.split(" ")[0] ?? "Date"
    const secondDay = nextFiveDaysData?.list?.[8]?.dt_txt?.split(" ")[0] ?? "Date"
    const thirdDay = nextFiveDaysData?.list?.[16]?.dt_txt?.split(" ")[0] ?? "Date"
    const fourthDay = nextFiveDaysData?.list?.[24]?.dt_txt?.split(" ")[0] ?? "Date"
    const fifthDay = nextFiveDaysData?.list?.[32]?.dt_txt?.split(" ")[0] ?? "Date"

    const forecastDays = [];

    for (let i = 0; i < 40; i += 8) {
    const item = nextFiveDaysData?.list?.[i];

    if (item) {
        const date = new Date(item.dt * 1000);

        forecastDays.push({
        day: date.toLocaleDateString("en-IN", {
            weekday: "long",
        }),
        });
    }
    
    }
    
    
    
  return (
    
        <div className="comingFiveDaysDiv">
                <h6 style={{fontSize:"23px"}}>Coming 5 Days</h6>
                <div className="FiveDaysContainer">
                    <div className="singleDay">
                        <div>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h6><span id="fristdaytemp">{firstTemp}</span> &deg;C</h6>

                        </div>
                        <h6 id="fristdayDay">{forecastDays[0]?.day ||"Day"}</h6>
                        <h6 id="fristdayDate">{firstDay}</h6>
                    </div>
                    <div className="singleDay">
                        <div>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h6><span id="secondTemptemp">{secondTemp}</span> &deg;C</h6>

                        </div>
                        <h6 id="secondTempDay">{forecastDays[1]?.day ||"Day"}</h6>
                        <h6 id="secondTempDate">{secondDay}</h6>
                    </div>
                    <div className="singleDay">
                        <div>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h6><span id="thirdTemptemp">{thirdTemp}</span> &deg;C</h6>

                        </div>
                        <h6 id="thirdTempDay">{forecastDays[2]?.day ||"Day"}</h6>
                        <h6 id="thirdTempDate">{thirdDay}</h6>
                    </div>
                    <div className="singleDay">
                        <div>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h6><span id="fourthdaytemp">{fouthTemp}</span> &deg;C</h6>

                        </div>
                        <h6 id="fourthdayDay">{forecastDays[3]?.day ||"Day"}</h6>
                        <h6 id="fourthdayDate">{fourthDay}</h6>
                    </div>
                    <div className="singleDay">
                        <div>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h6><span id="fifthtemptemp">{fifthtemp}</span> &deg;C</h6>

                        </div>
                        <h6 id="fifthtempDay">{forecastDays[4]?.day ||"Day"}</h6>
                        <h6 id="fifthtempDate">{fifthDay}</h6>
                    </div>
                </div>
            </div>
    
  )
}

export default FiveDaysForecast