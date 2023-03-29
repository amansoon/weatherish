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
          <div className="h-full w-[135%] flex flex-col gap-2 absolute">
            <ResponsiveContainer width={"100%"}>
              <LineChart data={data}>
                <CartesianGrid
                  horizontal={false}
                  strokeWidth={1.5}
                  stroke="#efefef"
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#ff9124"
                  strokeWidth={1.5}
                  label={<CustomizedLabel />}
                  dot={{
                    fill: "#ff9124",
                    stroke: "#ff9124",
                    strokeWidth: 1.2,
                    r: 4,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between h-[80px]">
              {data.map(({ time, temp }) => {
                return <XAxisLabel temp={temp} time={time} />;
              })}
            </div>
          </div>
          {/* side smooth fades */}
          <div className="w-full h-[20px] absolute right-0 left-0 top-0 bg-gradient-to-b from-slate-50 to-transparent"></div>
          <div className="w-[50px] absolute right-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-slate-50"></div>
          <div className="w-[50px] absolute left-0 top-0 bottom-0 bg-gradient-to-r from-slate-50 to-transparent"></div>
        </div>
      </div>

      {/* tomorrow */}
      <div className="w-[30%] flex flex-col justify-between rounded-2xl p-6 bg-[url('/weather/sky.png')] bg-cover">
        <div className="flex flex-col gap-2">
          <div> Tomorrow </div>
          <div className="text-2xl font-medium"> Saudi Arabia </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-medium"> 24°C </div>
          <div> Rainny </div>
        </div>
      </div>
    </div>
  );
}

type XAxisLabelProps = {
  temp: number;
  time: string;
};

const XAxisLabel = ({ temp, time }: XAxisLabelProps) => {
  return (
    <div className="w-[1px] first-of-type:invisible last-of-type:invisible">
      <div className="h-full w-full flex flex-col items-center gap-2">
        <span className="text-xl font-medium text-slate-800">
          {" "}
          {`${temp}°`}
        </span>
        <span className="text-slate-400"> {time} </span>
      </div>
    </div>
  );
};

class CustomizedLabel extends React.Component {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      // <text
      //   x={x}
      //   y={y}
      //   dy={-30}
      //   fill={stroke}
      //   textAnchor="middle"
      //   className="text-normal text-rose-500"
      // >
      //   {value}
      // </text>

      <svg
        x={x}
        y={y}
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{backgroundColor: 'red'}}
      >
        <circle cx="21" cy="21" r="20.5" stroke="#C2D3FF" />
        <g clip-path="url(#clip0_412_1253)">
          <path
            d="M27.5334 25.557C28.3919 25.181 29.0949 24.5211 29.5245 23.6881C29.954 22.8551 30.0839 21.8996 29.8924 20.9822C29.7008 20.0647 29.1995 19.2411 28.4726 18.6495C27.7456 18.0579 26.8373 17.7344 25.9 17.7333H24.871C24.6121 16.7309 24.1187 15.8043 23.4315 15.03C22.7442 14.2557 21.8828 13.6558 20.9182 13.2797C19.9535 12.9037 18.9134 12.7623 17.8834 12.8672C16.8534 12.9721 15.863 13.3202 14.994 13.883C14.125 14.4457 13.4021 15.207 12.885 16.1039C12.368 17.0009 12.0715 18.0079 12.02 19.0419C11.9685 20.076 12.1634 21.1074 12.5888 22.0513C13.0142 22.9952 13.6579 23.8245 14.4667 24.4708"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.7333 24.2667H17.7424"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.7333 27.5333H17.7424"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 25.9H21.0091"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 29.1667H21.0091"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.2667 24.2667H24.2758"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.2667 27.5333H24.2758"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_412_1253">
            <rect
              width="19.6"
              height="19.6"
              fill="white"
              transform="translate(11.2 11.2)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

export default WeatherGraph;
