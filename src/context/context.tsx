import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer.ts";

const AppContext = createContext("app");

type AppState = {
  search: null | object;
  currentWeather: null | object;
  currentAstro: null | object;
  forecastWeather: null | object;
  isWeatherLoading: boolean;
};

type ActionKind = {
    type: string,
    payload: any,
}

const initialState: AppState = {
  search: null,
  currentWeather: null,
  currentAstro: null,
  forecastWeather: null,
  isWeatherLoading: false,
};

type AppProviderProps = {
  children?: (string | JSX.Element) | (string | JSX.Element)[];
};

export default function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    search,
    currentAstro,
    currentWeather,
    forecastWeather,
    isWeatherLoading,
  } = Object(state);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
