import firebase from "firebase";

import { GAMES } from "../constants/firebaseCollections";

import {
  JOIN_GAME_SUCCESS,
  SELECT_CARD_SUCCESS,
  SELECT_SPY_MASTER,
  SET_PLAYER_NAME
} from "../constants/actionTypes";

/**
 * We update the local state and then update the database
 */
export const updateGameMapReduxState = (position, selection) => {
  selection[position] = true;
  return {
    type: SELECT_CARD_SUCCESS,
    payload: selection
  };
};

export const selectKeyCard = position => (dispatch, getState) => {
  // dispatch(updateGameMapReduxState(position));
  const state = getState();
  const userState = state.userState;
  const gamePlay = state.gamePlay;
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(userState.game)
    .update({
      selection: gamePlay.selection
    });
};

export const selectSpyMaster = () => dispatch => {};

export const setPlayerName = () => dispatch => {};

export const instantiateGameData = gameData => {
  return {
    type: JOIN_GAME_SUCCESS,
    payload: gameData
  };
};
