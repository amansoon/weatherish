export interface AppState {
  city: string | null;
  
  weather: object | null;
  astronomy: object | null;
  forecast: object[] | null;

  isWeatherLoading: boolean,
}

export enum AppActionType {
  SET_CITY = "SET_CITY",
  SET_WEATHER = "SET_WEATHER",
  SET_WEATHER_LOADING = "SET_WEATHER_LOADING",
}

export interface AppAction {
  type: AppActionType;
  payload: any;
}




