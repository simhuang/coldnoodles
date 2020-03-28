import { CREATE_GAME, DELETE_GAME } from "../constants/actionTypes";
import firebase from "firebase";

export const createNewGame = () => {
  const db = firebase.firestore();
  db.collection("games")
    .doc("asd")
    .set({
      game: [],
      players: 0
    });
};
