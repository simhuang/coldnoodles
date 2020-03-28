import { CREATE_GAME, DELETE_GAME } from "../constants/actionTypes";

const initialState = {
  games: [],
  totalGames: 0
};

const createGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME: {
      return {
        ...state,
        totalGames: totalGames + 1
      };
    }
    case DELETE_GAME: {
      return {
        ...state,
        totalGames: totalGames - 1
      };
    }
    default: {
      return state;
    }
  }
};

export default createGameReducer;
