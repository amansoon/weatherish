export interface AppState {
  city: string | null;
  
  weather: object | null;
  astrology: object | null;
  forecast: object | null;
  
  isAstrologyLoading: boolean,
  isWeatherLoading: boolean,
  isForecastLoading: boolean,
}

export enum AppActionType {
  SET_CITY = "SET_CITY",
  SET_WEATHER = "SET_WEATHER",
  SET_ASTROLOGY = "SET_ASTROLOGY",
  SET_FORECAST = "SET_FORECAST",
  SET_LOADING = "SET_LOADING",

  SET_WEATHER_LOADING = "SET_WEATHER_LOADING",
  SET_ASTROLOGY_LOADING = "SET_ASTRONOMY_LOADING",
  SET_FORECAST_LOADING = "SET_FORECAST_LOADING",
}

export interface AppAction {
  type: AppActionType;
  payload: any;
}




