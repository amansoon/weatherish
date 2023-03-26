import React from "react";
import AstroPieChart from "./AstroPieChart";

function Sidebar(): JSX.Element {
  return (
    <div className="h-screen w-[550px] p-8 bg-slate-50">
      <header className="flex justify-between items-center mb-8 pb-4 border-b ">
        <div> 
          <div className="text-slate-400"> 5:02 pm </div>
          <div> Gwalior, India  </div>
        </div>
        <div className="text-4xl font-medium text-orange-500"> 24°C </div>
      </header>
      <AstroPieChart />
    </div>
  );
}

export default Sidebar;
