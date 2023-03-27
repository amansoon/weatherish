import React from "react";
import thunderstorm from "@/assets/images/thunderstorm.png";



function WeatherStats() {
  return (
    <div className="flex gap-6">

      <div className="w-[300px] h-[250px] rounded-lg bg-white p-6 bg-slate-800">
        <div className="flex justify-between text-4xl font-medium"> 
          <span> 22°C </span> 
          <img src={thunderstorm.src} alt="weahter" height={50} width={80} />
        </div>
      </div>

      <div className="w-[50%] h-[250px] rounded-lg bg-white"> air quality </div>
    </div>
  );
}

export default WeatherStats;
