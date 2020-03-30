import { CREATE_GAME, DELETE_GAME } from "../constants/actionTypes";
import firebase from "firebase";
import { GAMES } from "../constants/firebaseCollections";
import {
  generateGameWords,
  generateKeyMap,
  instantiateToFalseSelected
} from "../utils/gameUtils";

/**
 * This action is responsible for creating a new game in our
 * database. There is a listener 'newGameCreatedListener' that listens
 * for live updates to dispatch a create game object.
 * Thins that happen:
 * 1) generate an array of words representing the game board
 * 2) generate an array representing blue/red/neutral/bomb
 */
export const createNewGame = gameName => dispatch => {
  const game = generateGameWords();
  const keyMap = generateKeyMap();
  const selection = instantiateToFalseSelected();
  const db = firebase.firestore();
  gameName = gameName.replace(" ", "-");
  db.collection(GAMES)
    .doc(gameName)
    .set({
      keyMap,
      game,
      players: [],
      selection,
      spyMasters: []
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
