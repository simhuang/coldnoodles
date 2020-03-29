import firebase from "firebase";

import { GAMES } from "../constants/firebaseCollections";

import { snapshotDataToNative } from "../utils/gameUtils";
import { updateGameCardsForRedux } from "../actions/createGame";
import { instantiateGameData } from "../actions/gamePlay";

export const newGameCreatedListener = () => dispatch => {
  const db = firebase.firestore();
  var unsubscribe = db.collection(GAMES).onSnapshot(snapshot => {
    const gameCards = snapshotDataToNative(snapshot);
    dispatch(updateGameCardsForRedux(gameCards));
  });

  return unsubscribe;
};

/**
 * Listen for changes in a specific game
 */
export const gamePlayListener = gameName => dispatch => {
  const db = firebase.firestore();
  var unsubscribe = db
    .collection(GAMES)
    .doc(gameName)
    .onSnapshot(snapshot => {
      const gameData = snapshot.data();
      dispatch(instantiateGameData(gameData));
    });

  return unsubscribe;
};
