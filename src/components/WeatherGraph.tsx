import React from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  LabelProps,
} from "recharts";

const data = [
  {
    time: "Yesterday",
    temp: 20,
  },
  {
    time: "Morning",
    temp: 20,
  },
  {
    time: "Afternoon",
    temp: 34,
  },
  {
    time: "Evening",
    temp: 28,
  },
  {
    time: "Night",
    temp: 42,
  },
  {
    time: "tomorrow",
    temp: 30,
  },
];

function WeatherGraph() {
  return (
    <div className="flex pb-4 justify-between max-h-[400px] flex-1">
      <div className="w-[65%] flex flex-col">
        {/* graph heading */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-medium">Today's Temperature</h3>
        </div>

        {/* graph */}
        <div className="w-full h-full flex justify-center relative overflow-hidden">
          {/* line-graph and axis */}
          <div className="h-full w-[135%] flex flex-col absolute">
            <ResponsiveContainer width={"100%"}>
              <LineChart data={data}>
                <CartesianGrid
                  horizontal={false}
                  strokeWidth={1}
                  stroke="#ededed"
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#ff9124"
                  strokeWidth={1.5}
                  dot={{
                    fill: "#ff9124",
                    stroke: "#ff9124",
                    strokeWidth: 1.2,
                    r: 4,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between">
              {data.map(({ time, temp }) => {
                return <XAxisLabel temp={temp} time={time} />;
              })}
            </div>
          </div>
          {/* side smooth fades */}
          <div className="w-[20px] absolute right-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-slate-50"></div>
          <div className="w-[20px] absolute left-0 top-0 bottom-0 bg-gradient-to-r from-slate-50 to-transparent"></div>
        </div>
      </div>

      {/* tomorrow */}
      <div className="w-[30%] rounded-2xl bg-[url('/weather/rain.jpg')] bg-cover"></div>
    </div>
  );
}


type XAxisLabelProps = {
  temp: string,
  time: string,
} 

const XAxisLabel = ({ temp, time } : XAxisLabelProps) => {
  return (
    <div className="flex flex-col items-center gap-2 last-of-type:invisible first-of-type:invisible">
      <span className="text-xl font-medium text-slate-800"> {`${temp}°`} </span>
      <span className="text-slate-400"> {time} </span>
    </div>
  );
};

export default WeatherGraph;
