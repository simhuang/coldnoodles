import firebase from "firebase";

import { GAMES } from "../constants/firebaseCollections";

export const newGameCreatedListener = () => dispatch => {
  const db = firebase.firestore();
  var unsubscribe = db.collection(GAMES).onSnapshot(snapshot => {
    console.log(snapshot);
  });

  return unsubscribe;
};
