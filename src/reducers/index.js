import { combineReducers } from "redux";

import userActionReducer from "./userAction";

const combinedReducers = {
  userState: userActionReducer
};

export default combineReducers(combinedReducers);
