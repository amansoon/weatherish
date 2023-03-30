import { AppAction, AppActionType, AppState } from "@/@types/appglobal";

export function reducer(state: AppState, action: AppAction): AppState {
  const { type, payload } = action;
  if (!payload) {
    return state;
  }

  // set searched city
  if (type === AppActionType.SET_CITY) {
    return { ...state, city: payload };
  }

  // set weather information of searched city
  if (type === AppActionType.SET_WEATHER) {
    return { ...state, weather: payload };
  }

  // set weather information of searched city
  if (type === AppActionType.SET_FORECAST) {
    return { ...state, forecast: payload };
  }

  // set weather information of searched city
  if (type === AppActionType.SET_ASTROLOGY) {
    return { ...state, astrology: payload };
  }

  return state;
}
