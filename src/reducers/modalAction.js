import {
  OPEN_JOIN_GAME_MODAL,
  CLOSE_JOIN_GAME_MODAL,
  OPEN_CREATE_GAME_MODAL,
  CLOSE_CREATE_GAME_MODAL
} from "../constants/actionTypes";

const initialState = {
  joinGameModalIsOpen: false,
  createGameModalIsOpen: false
};

const modalActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_JOIN_GAME_MODAL: {
      return {
        ...state,
        joinGameModalIsOpen: true,
        createGameModalIsOpen: false
      };
    }
    case CLOSE_JOIN_GAME_MODAL: {
      return {
        ...state,
        joinGameModalIsOpen: false
      };
    }
    case OPEN_CREATE_GAME_MODAL: {
      return {
        ...state,
        joinGameModalIsOpen: false,
        createGameModalIsOpen: true
      };
    }
    case CLOSE_CREATE_GAME_MODAL: {
      return {
        ...state,
        createGameModalIsOpen: false
      };
    }
    default:
      return state;
  }
};

export default modalActionReducer;
