import { CREATE_GAME, DELETE_GAME } from "../constants/actionTypes";
import firebase from "firebase";
import { GAMES } from "../constants/firebaseCollections";

/**
 * This action is responsible for creating a new game in our
 * database. There is a listener 'newGameCreatedListener' that listens for life updates
 * to dispatch a create game object.
 */
export const createNewGame = gameName => dispatch => {
  const db = firebase.firestore();
  db.collection(GAMES)
    .doc(gameName)
    .set({
      game: [],
      players: 0
    });
};

export const updateGameCardsForRedux = gameCards => {
  return {
    type: CREATE_GAME,
    payload: gameCards
  };
};

export const getAllOpenGames = () => dispatch => {
  const db = firebase.firestore();
  db.collection(GAMES)
    .get()
    .then(snapshot => {
      console.log(snapshot);
    });
};
