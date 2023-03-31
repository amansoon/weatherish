import { useAppContext } from "@/context/context";
import React, { useEffect, useState } from "react";

function AstroPieChart() {
  const { astronomy } = useAppContext();
  const [dayElaped, setDayElapsed] = useState<number>(0);

  console.log(astronomy)

  if(!astronomy) {
    return <h1> hello </h1>
  }

  useEffect(() => {
    if (astronomy) {
      const currentTime = new Date(Date.now());
      const sunriseTime = new Date(currentTime.toLocaleDateString() + " " + astronomy.sunrise);
      const sunsetTime = new Date(currentTime.toLocaleDateString() + " " + astronomy.sunset);
      const percent = (currentTime.getTime() - sunriseTime.getTime()) / ((sunsetTime.getTime() - sunriseTime.getTime())) * 100;
      setDayElapsed(Math.round(percent));
    }
  }, [astronomy]);

  useEffect(() => {
     console.log("day elapsed =", dayElaped)
  }, [dayElaped])

  const dotStyle =
    "w-[12px] h-[12px] absolute bottom-0 translate-y-[6px] bg-orange-400 rounded-full";

  return (
    <div className="">
      {/* semi-circle container */}
      <div className="flex justify-center border-b-2 border-orange-400">
        {/* semicircle wrapper */}
        <div className="relative isolate w-[240px]">
          {/* semicircle */}
          <div className="h-[120px] w-[240px] overflow-hidden">
            {/* circle */}
            <div className="h-[240px] w-[240px] bg-transparent rounded-full border border-dashed border-2 border-orange-300 overflow-hidden relative">
              {/* circle filled background */}
              <div className={`h-[240px] w-[240px] bg-gradient-to-b from-orange-100 via-orange-50 to-transparent absolute`} style={{left: `-${100 - dayElaped}%`}}></div>
            </div>
          </div>
          {/* sunrise dot */}
          <span className={`${dotStyle} -translate-x-[6px] left-0`}></span>
          {/* sunset dot */}
          <span className={`${dotStyle} translate-x-[6px] right-0`}></span>
          {/* current dot */}
          <span
            className={`${dotStyle} -translate-x-[6px] left-[${dayElaped}%]`} style={{left: `${dayElaped}%`}}
          ></span>
        </div>
      </div>

      {/* labels */}
      <div className=" w-[100%] flex justify-between px-4 py-6">
        <div className="flex flex-col items-center gap-1">
          <span className="font-medium"> Sunrise </span>
          <span className="text-sm text-slate-400"> {astronomy.sunrise} </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="font-medium"> Sunset </span>
          <span className="text-sm text-slate-400"> {astronomy.sunset} </span>
        </div>
      </div>
    </div>
  );
}

export default AstroPieChart;
