import {
  JOIN_GAME_SUCCESS,
  SELECT_CARD_SUCCESS,
  SELECT_SPY_MASTER,
  SET_PLAYER_NAME
} from "../constants/actionTypes";

const initialState = {
  game: [],
  keyMap: [],
  players: [],
  playerName: "",
  selected: []
};

const gamePlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_GAME_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SELECT_CARD_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SELECT_SPY_MASTER: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SET_PLAYER_NAME: {
      return {
        ...state,
        playerName: action.payload
      };
    }
    default:
      return state;
  }
};

export default gamePlayReducer;
