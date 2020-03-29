import firebase from "firebase";

import { GAMES } from "../constants/firebaseCollections";

import { snapshotDataToNative } from "../utils/gameUtils";
import { updateGameCardsForRedux } from "../actions/createGame";

export const newGameCreatedListener = () => dispatch => {
  const db = firebase.firestore();
  var unsubscribe = db.collection(GAMES).onSnapshot(snapshot => {
    const gameCards = snapshotDataToNative(snapshot);
    dispatch(updateGameCardsForRedux(gameCards));
  });

  return unsubscribe;
};
