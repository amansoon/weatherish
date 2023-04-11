import React, { useEffect, useState } from "react";
import AstroPieChart from "./AstroPieChart";
import Icon from "./Icon";
import { CloudSunny } from "iconoir-react";
import { Sun } from "react-feather";

import { useAppContext } from "@/context/context";

function Sidebar() {
  const { weather, astronomy } = useAppContext();

  return (
    <div className="h-screen w-[550px] px-8 py-6 bg-slate-100">
      <header className="flex justify-between items-center mb-8 pb-4 border-b ">
        <div>
          <div className="font-medium text-xl mb-1"> Wednesday </div>
          <div className="text-slate-600"> Florida, India </div>
        </div>
        <div className="text-4xl font-medium text-orange-500"> {Math.round(weather?.current.temp_c) + "°C"}  </div>
      </header>

      <AstroPieChart astronomy={astronomy} />

      <UVIndex uvIndex={weather?.current.uv} />

      <h3 className="text-2xl font-medium mb-6 mt-6"> Weather Prediction </h3>

      <ForcaseDay />
      <ForcaseDay />
    </div>
  );
}

type UVIndexProps = {
  uvIndex: number;
};

const UVIndex = ({ uvIndex }: UVIndexProps) => {
  const [message, setMessage] = useState<string>();
  const [level, setLevel] = useState<string>();

  useEffect(() => {
    if (uvIndex) {
      if (uvIndex <= 2) {
        setMessage("No danger to the average person");
        setLevel("Low");
      } else if (uvIndex <= 5) {
        setMessage("Little risk of harm from unprotected sun exposure");
        setLevel("Moderate");
      } else if (uvIndex <= 7) {
        setMessage("High risk of harm from unprotected sun exposure");
        setLevel("High");
      } else if (uvIndex <= 10) {
        setMessage("Very high risk of harm from unprotected sun exposure");
        setLevel("Very High");
      } else {
        setMessage("Extreme risk of harm from unprotected sun exposure");
        setLevel("Extreme");
      }
    }
  }, [uvIndex]);

  return (
    <div className="flex items-center gap-5 px-6 py-5 text-white bg-slate-900 rounded-xl">
      <div>
        <Sun size={28} strokeWidth={1.4} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="leading-none flex items-center gap-4">
          <span className="text-2xl"> {uvIndex} UVI </span>
          <span className="px-4 py-1 rounded-full bg-yellow-200 text-black text-sm font-medium">{level}</span>
        </div>
        <div className="text-slate-400">{level} risk of UV rays.</div>
      </div>
    </div>
  );
};

const ForcaseDay = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl mb-4 shadow shadow-slate-100">
      <span>
        <Icon>
          <CloudSunny />
        </Icon>
      </span>
      <div className="flex flex-col gap-1">
        <span> November 10 </span>
        <span className="text-lg font-medium"> Cloudy </span>
      </div>
      <div className="text-lg text-orange-500 ml-auto"> 26° / 18° </div>
    </div>
  );
};

export default Sidebar;
