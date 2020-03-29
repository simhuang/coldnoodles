import { combineReducers } from "redux";

import userActionReducer from "./userAction";
import modalActionReducer from "./modalAction";
import createGameReducer from "./createGame";

const combinedReducers = {
  userState: userActionReducer,
  modalState: modalActionReducer,
  gameList: createGameReducer
};

export default combineReducers(combinedReducers);
