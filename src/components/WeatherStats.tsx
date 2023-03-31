import React, { useEffect, useState } from "react";
import { Image } from "react-feather";
import thunderstorm from "@/assets/images/thunderstorm.png";
import { HeavyRain } from "iconoir-react";
import { Wind, Cloud } from "react-feather";

import myImage from "../assets/images/cloud.png";
import { useAppContext } from "@/context/context";

function WeatherStats() {
  const {weather} = useAppContext();

  const [temp, setTemp] = useState<string>()
  const [condition, setCondition] = useState<string>()
  const [pressure, setPressure] = useState<string>()
  const [humidity, setHumidy] = useState<string>()
  const [visibility, setVisibility] = useState<string>()
  const [aqi, setAqi] = useState<string>()
  const [aqiLevel, setAqiLevel] = useState<string>()
  const [windDirection, setWindDirection] = useState<string>()
  const [wind, setWind] = useState<string>()



  useEffect(() => {
    if(weather) {
       setTemp(`${Math.round(weather.current.temp_c)}°C`)
       setCondition(`${weather.current.condition.text}`)
       setPressure(`${Math.round(weather.current.pressure_mb)}mb`)
       setVisibility(`${weather.current.vis_km} km`)
       setHumidy(`${Math.round(weather.current.humidity)}%`)
       setAqi(`${Math.round(weather.current.air_quality['us-epa-index'])}`)
       setAqiLevel(`${'Hazardous'}`)
    
       setWindDirection(`${expandDir(weather.current.wind_dir)} wind`)
       setWindDirection(`${expandDir(weather.current.wind_dir)} wind`)

    }
  }, [weather])


  const expandDir = (dir : string) => {
    switch(dir) {
      case 'E': return 'east'; break;
      case 'W': return 'west'; break;
      case 'N': return 'north'; break;
      case 'S': return 'south'; break;

      case 'SE': return 'south east'; break;
      case 'SW': return 'south west'; break;
      case 'NE': return 'north east'; break;
      case 'NW': return 'noth west'; break;

      default: return 'N'; break;
    }
  }


  return (
    <div className="h-[350px] flex gap-6">
      {/* temperature */}
      <div className="w-1/2 flex flex-col justify-between rounded-2xl p-6 shadow-slate-100 bg-[url('/weather/sky.png')]">
        <div className="flex gap-5 items-center">
          <span className="p-3 rounded-full bg-white text-orange-500">
            <Cloud size={22} strokeWidth={1.5} />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-medium mb-1"> Weather </span>
            <span className=""> What's the weather. </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-4xl font-medium"> {temp} </span>
          <span className=""> {condition} </span>
        </div>

        <div className="flex gap-3 leading-none">
          <div className="w-1/3 flex flex-col gap-2 justify-center items-center bg-slate-900 text-slate-50 rounded-xl p-5">
            <span> Pressure </span>
            <span className="text-xl font-medium"> {pressure}  </span>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center bg-yellow-200 rounded-xl p-5">
            <span> Visibility </span>
            <span className="text-xl font-medium"> {visibility}  </span>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center bg-white rounded-xl p-5">
            <span> Humidity </span>
            <span className="text-xl font-medium"> {humidity} </span>
          </div>
        </div>
      </div>

      {/* wind and air quality */}
      <div className="w-1/2 flex flex-col justify-between rounded-2xl p-6 bg-white shadow-lg shadow-slate-100  bg-[url('/weather/clouds.jpg')] bg-cover">
        <div className="flex gap-5 items-center text-white">
          <span className="p-3 rounded-full bg-white text-orange-500">
            <Wind size={22} strokeWidth={1.5} />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-medium mb-1"> Air Quality </span>
            <span className=""> Main Pollutant : PM 2.5 </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-medium"> {aqi}  </span>
          <span className=""> {windDirection} </span>
        </div>
        <div className="flex flex-col gap-5 items-center bg-white rounded-xl p-5">
          <div className="w-full flex justify-between leading-none">
            <span> Good </span>
            <span> Hazardous </span>
          </div>
          {/* meter */}
          <div className="w-full h-[8px] rounded-lg bg-slate-200 relative">
            <span className="absolute left-0 top-0 bottom-0 w-[35%] rounded-lg bg-green-600">
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherStats;
