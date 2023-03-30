import { useReducer, useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { ReactNode } from "react";
import { AppAction, AppActionType, AppState} from "@/@types/globals";

const AppContext = createContext("app");

const initialState: AppState = {
  city: null,
  currentWeather: null,
  currentAstro: null,
  forecastWeather: null,
  isWeatherLoading: false,
};

type childrenPropType = {
  children: ReactNode;
};

function AppProvider({ children }: childrenPropType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    city,
    currentAstro,
    currentWeather,
    forecastWeather,
    isWeatherLoading,
  } = state as AppState;

  console.log(dispatch);

  const setCity = (city: string) => {
    const action: AppAction = {
      type: AppActionType.SET_CITY,
      payload: city,
    };
    dispatch(action);
  };

  return (
    <AppContext.Provider
      value={{
        city,
        currentWeather,
        currentAstro,
        forecastWeather,
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
