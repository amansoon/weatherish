import React from "react";

import { LineChart, Line, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
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
];

function WeatherGraph() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium">Today's Temperature</h3>
      </div>
      <div className="flex pb-4 gap-6">
        {/* graph */}
        <div className="w-[65%]">
          <ResponsiveContainer height={200}>
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
          <div className="flex justify-between py-3">
            {data.map(({ time, temp }) => {
              return <XAxisLabel temp={temp} time={time} />;
            })}
          </div>
        </div>

        {/* tomorrow */}
        <div className="w-[35%] rounded-2xl bg-white shadow-lg">

        </div>

      </div>
    </div>
  );
}

const XAxisLabel = ({ temp, time }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xl font-medium text-slate-800"> {`${temp}°`} </span>
      <span className="text-slate-400"> {time} </span>
    </div>
  );
};

export default WeatherGraph;
