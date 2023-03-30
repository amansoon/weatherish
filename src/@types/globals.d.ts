export interface AppState {
  city: string | null;
  currentWeather: object | null;
  currentAstro: object | null;
  forecastWeather: object | null;
  isWeatherLoading: boolean;
}

export enum AppActionType {
  SET_CITY = "SET_CITY",
  SET_WEATHER = "SET_WEATHER",
}

export interface AppAction {
  type: AppActionType;
  payload: string;
}




