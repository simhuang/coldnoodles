import { combineReducers } from "redux";

import userActionReducer from "./userAction";
import modalActionReducer from "./modalAction";
import createGameReducer from "./createGame";
import gamePlayReducer from "./gamePlay";

const combinedReducers = {
  userState: userActionReducer,
  modalState: modalActionReducer,
  gameList: createGameReducer,
  gamePlay: gamePlayReducer
};

export default combineReducers(combinedReducers);
