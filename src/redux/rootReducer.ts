import { combineReducers } from "redux";
import { generalReducer } from "./general/general.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  general: generalReducer,
});
