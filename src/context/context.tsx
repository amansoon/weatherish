import axios from "axios";
import { useReducer, useContext, useEffect } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { ReactNode } from "react";
import { AppAction, AppActionType, AppState } from "@/@types/appglobal";

const AppContext = createContext("app");

const initialState: AppState = {
  city: "shimla",
  weather: null,
  astronomy: null,
  forecast: null,

  isWeatherLoading: false,
};

type childrenPropType = {
  children: ReactNode;
};

const BASE_URL = "http://api.weatherapi.com/v1";
const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

function AppProvider({ children }: childrenPropType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, astronomy, weather, forecast, isWeatherLoading } =
    state as AppState;

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);


  const fetchData = async () => {
    const WEATHER_URL = `${BASE_URL}/current.json?key=${WEATHER_KEY}&q=${city}&aqi=${"yes"}`;
    const ASTRO_URL = `${BASE_URL}/astronomy.json?key=${WEATHER_KEY}&q=${city}`;
    const FORECAST_URL = `${BASE_URL}/forecast.json?key=${WEATHER_KEY}&q=${city}&days=${3}&alerts=${"yes"}`;

    try {
      dispatch({ type: AppActionType.SET_WEATHER_LOADING, payload: true });
      const weatherRes = await axios.get(WEATHER_URL);
      const astroRes = await axios.get(ASTRO_URL);
      const forecastRes = await axios.get(FORECAST_URL);

      if (
        weatherRes.status === 200 &&
        astroRes.status === 200 &&
        forecastRes.status === 200
      ) {
        const payloadData = {
          weather: weatherRes.data,
          astronomy: astroRes.data.astronomy.astro,
          forecast: forecastRes.data.forecast.forecastday,
          isWeatherLoading: false,
        };
        dispatch({ type: AppActionType.SET_WEATHER, payload: payloadData });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: AppActionType.SET_WEATHER_LOADING, payload: false });
    }
  };

  const setCity = (city: string) => {
    dispatch({ type: AppActionType.SET_CITY, payload: city });
  };

  return (
    <AppContext.Provider
      value={{
        city,
        weather,
        astronomy,
        forecast,
        isWeatherLoading,

        setCity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// custom hook
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
