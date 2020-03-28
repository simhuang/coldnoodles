import { CHANGE_SCREEN } from "../constants/actionTypes";

import { DASHBOARD_SCREEN, GAME_SCREEN } from "../constants/userState";

const initialState = {
  screen: DASHBOARD_SCREEN
};

const userActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.payload
      };
    default:
      return state;
  }
};

export default userActionReducer;
