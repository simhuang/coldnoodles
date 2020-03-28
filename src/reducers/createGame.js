import { CREATE_GAME, DELETE_GAME } from "../constants/actionTypes";

const initialState = {
  games: []
};

const createGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME: {
      return {
        ...state
      };
    }
    case DELETE_GAME: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export default createGameReducer;
