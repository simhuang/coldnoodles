import { CHANGE_SCREEN, SET_SELECTED_GAME } from "../constants/actionTypes";

import { DASHBOARD_SCREEN, GAME_SCREEN } from "../constants/userState";

const initialState = {
  screen: DASHBOARD_SCREEN,
  game: ""
};

/**
 * This reducer represents what the user is doing in the app so
 * far, i.e what page they are on or what game they selected
 */
const userActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.payload
      };
    case SET_SELECTED_GAME:
      return {
        ...state,
        game: action.payload
      };
    default:
      return state;
  }
};

export default userActionReducer;
