import { useAppContext } from "@/context/context";
import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  DotProps,
  XAxisProps,
} from "recharts";

const data = [
  {
    time: "Yesterday",
    temp: 0,
  },
  {
    time: "Morning",
    temp: 10,
  },
  {
    time: "Afternoon",
    temp: 15,
  },
  {
    time: "Evening",
    temp: -20,
  },
  {
    time: "Night",
    temp: -5,
  },
  {
    time: "tomorrow",
    temp: 28,
  },
];

function WeatherGraph() {
  const { forecast } = useAppContext();
  const [forecastData, setForecastData] = useState<Array<object>>([]);

  useEffect(() => {
    if (forecast) {
      const hours = forecast[0].hour;
      const preMorning = { ...hours[6], time: "pre-morning" };
      const morning = { ...hours[8], time: "morning" };
      const afternoon = { ...hours[14], time: "afternoon" };
      const evening = { ...hours[19], time: "evening" };
      const night = { ...hours[23], time: "night" };
      const postNight = { ...hours[0], time: "night" };
      setForecastData([
        preMorning,
        morning,
        afternoon,
        evening,
        night,
        postNight,
      ]);
    }
  }, [forecast]);

  useEffect(() => {
    console.log("Forecast data = ", forecastData);
  }, [forecastData]);

  return (
    <div className="flex pb-4 justify-between max-h-[400px] flex-1">
      <div className="w-[65%] flex flex-col">
        {/* graph heading */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-medium">Today's Temperature</h3>
        </div>

        {/* graph */}
        <div className="w-full h-full flex justify-center relative overflow-hidden">
          {/* line-graph and axis */}
          <div className="h-full w-[135%] flex flex-col justify-between absolute">
            <div className="w-full" style={{height: "calc(100% - 80px)"}}>
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={forecastData} margin={{ top: 60, bottom: 10 }}>
                  <CartesianGrid
                    horizontal={false}
                    vertical={false}
                    strokeWidth={1.5}
                    stroke="#efefef"
                  />
                  <Line
                    type="monotone"
                    dataKey="temp_c"
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
            </div>
            <div className="h-[80px] flex justify-between items-center">
              {forecastData.map(({ time, temp_c }) => {
                return <XAxisLabel temp={temp_c} time={time} />;
              })}
            </div>
          </div>
          {/* side smooth fades */}
          <div className="w-full h-[10px] absolute right-0 left-0 top-0 bg-gradient-to-b from-slate-50 to-transparent"></div>
          <div className="w-[30px] absolute right-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-slate-50"></div>
          <div className="w-[30px] absolute left-0 top-0 bottom-0 bg-gradient-to-r from-slate-50 to-transparent"></div>
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
      <div className="w-full flex flex-col items-center gap-2">
        <span className="text-xl font-medium text-slate-800">{`${Math.round(
          temp
        )}°`}</span>
        <span className="text-slate-400"> {time} </span>
      </div>
    </div>
  );
};

// Customized label

const CustomizedLabel = (props: DotProps) => {
  const { x, y, stroke } = props;

  return (
    <svg
      x={Number(x) - 25}
      y={Number(y) - 60}
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "red" }}
    >
      <g filter="url(#filter0_d_412_1253)">
        <circle cx="25" cy="21" r="20.5" fill="white" stroke="#C2D3FF" />
        <g clip-path="url(#clip0_412_1253)">
          <path
            d="M31.5334 25.557C32.3919 25.181 33.0949 24.5211 33.5245 23.6881C33.954 22.8551 34.0839 21.8996 33.8924 20.9822C33.7008 20.0647 33.1995 19.2411 32.4726 18.6495C31.7456 18.0579 30.8373 17.7344 29.9 17.7333H28.871C28.6121 16.7309 28.1187 15.8043 27.4315 15.03C26.7442 14.2557 25.8828 13.6558 24.9182 13.2797C23.9535 12.9037 22.9134 12.7623 21.8834 12.8672C20.8534 12.9721 19.863 13.3202 18.994 13.883C18.125 14.4457 17.4021 15.207 16.885 16.1039C16.368 17.0009 16.0715 18.0079 16.02 19.0419C15.9685 20.076 16.1634 21.1074 16.5888 22.0513C17.0142 22.9952 17.6579 23.8245 18.4667 24.4708"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.7333 24.2667H21.7424"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.7333 27.5333H21.7424"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 25.9H25.0091"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 29.1667H25.0091"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.2667 24.2667H28.2758"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.2667 27.5333H28.2758"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_412_1253"
          x="0"
          y="0"
          width="50"
          height="51"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.709167 0 0 0 0 0.709167 0 0 0 0 0.709167 0 0 0 0.33 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_412_1253"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_412_1253"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_412_1253">
          <rect
            width="19.6"
            height="19.6"
            fill="white"
            transform="translate(15.2 11.2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WeatherGraph;
