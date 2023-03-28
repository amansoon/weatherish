import React from "react";
import { Image } from "react-feather";
import thunderstorm from "@/assets/images/thunderstorm.png";
import { HeavyRain } from "iconoir-react";
import { Wind, Cloud } from "react-feather";

import myImage from "../assets/images/cloud.png";

function WeatherStats() {
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
          <span className="text-4xl font-medium"> 34°C </span>
          <span className=""> Partly Cloudy </span>
        </div>

        <div className="flex gap-3 leading-none">
          <div className="w-1/3 flex flex-col gap-2 justify-center items-center bg-slate-900 text-slate-50 rounded-xl p-5">
            <span> Pressure </span>
            <span className="text-xl font-medium"> 800mb </span>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center bg-yellow-200 rounded-xl p-5">
            <span> Visibility </span>
            <span className="text-xl font-medium"> 4.3 km </span>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center bg-white rounded-xl p-5">
            <span> Humidity </span>
            <span className="text-xl font-medium"> 87% </span>
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
          <span className="text-4xl font-medium"> 82 </span>
          <span className=""> North West wind </span>
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
