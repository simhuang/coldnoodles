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

export const selectSpyMaster = shouldAdd => (dispatch, getState) => {
  const state = getState();
  const userState = state.userState;
  const gamePlay = state.gamePlay;
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(userState.game)
    .update({
      spyMasters: shouldAdd
        ? firebase.firestore.FieldValue.arrayUnion(gamePlay.playerName)
        : firebase.firestore.FieldValue.arrayRemove(gamePlay.playerName)
    });
};

export const resetSpyMasters = () => (dispatch, getState) => {
  const state = getState();
  const userState = state.userState;
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(userState.game)
    .update({
      spyMasters: []
    });
};

export const setPlayerName = nickname => (dispatch, getState) => {
  const state = getState();
  const userState = state.userState;
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(userState.game)
    .update({
      players: firebase.firestore.FieldValue.arrayUnion(nickname)
    });

  dispatch({
    type: SET_PLAYER_NAME,
    payload: nickname
  });
};

export const leaveGameRoom = () => (dispatch, getState) => {
  const state = getState();
  const { gamePlay, userState } = state;
  const username = gamePlay.playerName;
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(userState.game)
    .update({
      players: firebase.firestore.FieldValue.arrayRemove(username)
    });
};

export const instantiateGameData = gameData => {
  return {
    type: JOIN_GAME_SUCCESS,
    payload: gameData
  };
};
