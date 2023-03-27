import React from "react";
import AstroPieChart from "./AstroPieChart";
import Icon from "./Icon";
import { CloudSunny } from "iconoir-react";

function Sidebar(): JSX.Element {
  return (
    <div className="h-screen w-[550px] px-8 py-6 bg-slate-100">
      <header className="flex justify-between items-center mb-8 pb-4 border-b ">
        <div>
          <div className="font-medium text-xl mb-1"> Wednesday </div>
          <div className="text-slate-600"> Florida, India </div>
        </div>
        <div className="text-4xl font-medium text-orange-500"> 24°C </div>
      </header>

      <AstroPieChart />


    
      <h3 className="text-2xl font-medium mb-6 mt-4"> Weather Prediction  </h3>

      <ForcaseDay />
      <ForcaseDay />
      <ForcaseDay />
     
    </div>
  );
}

const ForcaseDay = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl mb-4 shadow shadow-slate-100">
      <span>
        <Icon>
          <CloudSunny />
        </Icon>
      </span>
      <div className="flex flex-col">
         <span> Nov 24 </span>
         <span className="text-lg font-medium">Cloudy</span>
      </div>
      <div className="text-lg text-orange-500 ml-auto"> 26° / 18° </div>
    </div>
  );
};

export default Sidebar;
