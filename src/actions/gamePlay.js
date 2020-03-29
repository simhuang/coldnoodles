import {
  JOIN_GAME_SUCCESS,
  SELECT_CARD_SUCCESS,
  SELECT_SPY_MASTER,
  SET_PLAYER_NAME
} from "../constants/actionTypes";

export const selectKeyCard = () => dispatch => {};

export const selectSpyMaster = () => dispatch => {};

export const setPlayerName = () => dispatch => {};

export const instantiateGameData = gameData => {
  return {
    type: JOIN_GAME_SUCCESS,
    payload: gameData
  };
};
