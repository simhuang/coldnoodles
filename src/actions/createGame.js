import { CREATE_GAME, DELETE_GAME } from "../constants/actionTypes";
import firebase from "firebase";
import { GAMES } from "../constants/firebaseCollections";

export const createNewGame = gameName => dispatch => {
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(gameName)
    .set({
      game: [],
      players: 0
    });
};

export const getAllOpenGames = () => dispatch => {
  const db = firebase.firestore();
  db.collection(GAMES)
    .get()
    .then(snapshot => {
      console.log(snapshot);
    });
};
