import { combineReducers } from "redux";

import userActionReducer from "./userAction";
import modalActionReducer from "./modalAction";

const combinedReducers = {
  userState: userActionReducer,
  modalState: modalActionReducer
};

export default combineReducers(combinedReducers);
