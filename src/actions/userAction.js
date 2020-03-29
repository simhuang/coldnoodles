import { CHANGE_SCREEN, SET_SELECTED_GAME } from "../constants/actionTypes";

export const setUserScreen = screen => {
  return {
    type: CHANGE_SCREEN,
    payload: screen
  };
};

export const setSelectedGame = gameName => {
  return {
    type: SET_SELECTED_GAME,
    payload: gameName
  };
};
