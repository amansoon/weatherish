import { AppAction, AppActionType, AppState } from "@/@types/globals";

export function reducer(state: AppState, action: AppAction): AppState {
  const { type, payload } = action;

  // set searched city
  if (type === AppActionType.SET_CITY) {
    return { ...state, city: payload };
  }

  // set weather information of searched city
  if (type === AppActionType.SET_WEATHER) {
    return { ...state };
  }

  return state;
}
