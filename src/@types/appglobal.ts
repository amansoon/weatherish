export interface AppState {
  city: string | null;
  weather: object | null;
  astrology: object | null;
  forecast: object | null;
  isWeatherLoading: boolean;
}

export enum AppActionType {
  SET_CITY = "SET_CITY",
  SET_WEATHER = "SET_WEATHER",
  SET_ASTROLOGY = "SET_WEATHER",
  SET_FORECAST = "SET_WEATHER",
}

export interface AppAction {
  type: AppActionType;
  payload: unknown;
}




