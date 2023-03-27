import React from "react";
import thunderstorm from "@/assets/images/sthunderstorm.png";
import heavySnowfall from "@/assets/images/heavy-snowfall.png";
import cloud from "@/assets/images/cloud.png";



function WeatherStats() {
  return (
    <div className="flex gap-6">

      <div className="w-[300px] h-[250px] rounded-lg bg-white p-6">
        <div className="flex justify-between text-4xl font-medium"> 
          <span> 22°C </span> 
          <img src={thunderstorm.src} alt="weahter" width={60} />
          <img src={heavySnowfall.src} alt="weahter" width={60} />
          <img src={cloud.src} alt="weahter" width={60} />
        </div>
      </div>

      <div className="w-[50%] h-[250px] rounded-lg bg-white"> air quality </div>
    </div>
  );
}

export default WeatherStats;
