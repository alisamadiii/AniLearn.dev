import { combineReducers } from "redux";

import { buttonReducer } from "./test/Button.reduce";

export const rootReducer = combineReducers({
  button: buttonReducer,
});
