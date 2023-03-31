import { AppAction, AppActionType, AppState } from "@/@types/appglobal";

export function reducer(state: AppState, action: AppAction): AppState {
  const { type, payload } = action;

  if (type === AppActionType.SET_CITY) {
    return { ...state, city: payload };
  }

  if (type === AppActionType.SET_WEATHER) {
    return { ...state, ...payload };
  }

  if (type === AppActionType.SET_WEATHER_LOADING) {
    return { ...state, isWeatherLoading: payload };
  }

  return state;
}
