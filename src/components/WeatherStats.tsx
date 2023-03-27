import React from "react";
import thunderstorm from "@/assets/images/thunderstorm.png";
import heavy_snowfall from "@/assets/images/heavy-snowfall.png";

function WeatherStats() {
  return (
    <div className="flex gap-6">
      <div className="w-[300px] h-[250px] rounded-lg p-6 bg-white">
        <div className="flex justify-between text-4xl font-medium">
          <span> 22°C </span>
          <img src={thunderstorm.src} alt="weahter" width={60} />
          <img src={heavy_snowfall.src} alt="weahter" width={60} />
        </div>
      </div>

      <div className="w-[50%] h-[250px] rounded-lg bg-white"> air quality </div>
    </div>
  );
}

export default WeatherStats;
