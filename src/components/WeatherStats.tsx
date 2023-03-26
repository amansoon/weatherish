import React from "react";

function WeatherStats() {
  return (
    <div className="flex gap-6">
      <div className="w-[50%] h-[250px] rounded-lg bg-white">templerature</div>
      <div className="w-[50%] h-[250px] rounded-lg bg-white"> air quality </div>
    </div>
  );
}

export default WeatherStats;
