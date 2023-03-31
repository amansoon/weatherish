import axios from "axios";
import { useReducer, useContext, useEffect } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { ReactNode } from "react";
import { AppAction, AppActionType, AppState } from "@/@types/appglobal";

const AppContext = createContext("app");

const initialState: AppState = {
  city: null,
  weather: null,
  astrology: null,
  forecast: null,

  isWeatherLoading: false,
  isForecastLoading: false,
  isAstrologyLoading: false,
};

type childrenPropType = {
  children: ReactNode;
};

const BASE_URL = "http://api.weatherapi.com/v1";
const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

function AppProvider({ children }: childrenPropType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, astrology, weather, forecast, isWeatherLoading } =
    state as AppState;

  useEffect(() => {
    if (city) {
      fetchWeather();
      fetchAstrology();
      fetchForecast();
    }
  }, [city]);

  const fetchWeather = async () => {
    const WEATHER_URL = `${BASE_URL}/current.json?key=${WEATHER_KEY}&q=${city}&aqi=${"yes"}`;
    try {
      const res = await axios.get(WEATHER_URL);
      console.log("weather", res);
      if (res.status === 200) {
        dispatch({ type: AppActionType.SET_WEATHER, payload: res.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAstrology = async () => {
    const ASTRO_URL = `${BASE_URL}/astronomy.json?key=${WEATHER_KEY}&q=${city}`;
    try {
      const res = await axios.get(ASTRO_URL);
      console.log("astro", res);
      if (res.status === 200) {
        dispatch({
          type: AppActionType.SET_ASTROLOGY,
          payload: res.data.astronomy.astro,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchForecast = async () => {
    const FORECAST_URL = `${BASE_URL}/forecast.json?key=${WEATHER_KEY}&q=${city}&days=${3}&alerts=${"yes"}`;
    try {
      const res = await axios.get(FORECAST_URL);
      console.log("forecast", res);
      if (res.status === 200) {
        dispatch({
          type: AppActionType.SET_FORECAST,
          payload: res.data.forecast.forecastday,
        });
      }
    } catch (error) {
      console.log(error);
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
        astrology,
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
