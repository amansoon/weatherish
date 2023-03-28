import React from "react";
import thunderstorm from "@/assets/images/thunderstorm.png";
import { HeavyRain } from "iconoir-react";
import { Wind, Cloud } from "react-feather";

function WeatherStats() {
  return (
    <div className="flex gap-6 flex-1">
      {/* temperature */}
      <div className="w-1/2 flex flex-col justify-between rounded-2xl p-6 bg-white shadow-lg shadow-slate-100">
        <div className="flex justify-between items-center">
          <span className="p-3 rounded-full bg-orange-600 text-white">
            <Cloud size={22} strokeWidth={1.5} />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-4xl font-medium"> 34°C </span>
          <span className="text-slate-500"> Partly Cloudy </span>
        </div>

        <div className="flex gap-3 leading-none">
          <div className="w-1/3 flex flex-col gap-2 justify-center items-center bg-slate-100 rounded-xl p-5">
            <span> Pressure </span>
            <span className="text-xl font-medium"> 800mb </span>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center bg-slate-100 rounded-xl p-5">
            <span> Visibility </span>
            <span className="text-xl font-medium"> 4.3 km </span>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center bg-slate-100 rounded-xl p-5">
            <span> Humidity </span>
            <span className="text-xl font-medium"> 87% </span>
          </div>
        </div>
      </div>

      {/* wind and air quality */}
      <div className="w-1/2 flex flex-col justify-between rounded-2xl p-6 bg-white shadow-lg shadow-slate-100">
        <div className="flex justify-between items-center">
          <span className="p-3 rounded-full bg-orange-600 text-white">
            <Wind size={22} strokeWidth={1.5} />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-medium"> 82 </span>
          <span className="text-slate-500"> North West wind </span>
        </div>
        <div className="flex flex-col gap-5 items-center bg-slate-100 rounded-xl p-5">
          <div className="w-full flex justify-between leading-none">
             <span> Good </span>
             <span> Hazardous </span>
          </div>
          {/* meter */}
          <div className="w-full h-[10px] rounded-lg bg-slate-200 relative">
            <span className="absolute left-0 top-0 bottom-0 w-[35%] rounded-lg bg-green-600">
              {" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherStats;
