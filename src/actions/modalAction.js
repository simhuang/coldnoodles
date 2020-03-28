import {
  OPEN_JOIN_GAME_MODAL,
  CLOSE_JOIN_GAME_MODAL,
  OPEN_CREATE_GAME_MODAL,
  CLOSE_CREATE_GAME_MODAL
} from "../constants/actionTypes";

export const openJoinGameModal = () => {
  return {
    type: OPEN_JOIN_GAME_MODAL
  };
};

export const closeJoinGameModal = () => {
  return {
    type: CLOSE_JOIN_GAME_MODAL
  };
};

export const openCreateGameModal = () => {
  return {
    type: OPEN_CREATE_GAME_MODAL
  };
};

export const closeCreateGameModal = () => {
  return {
    type: CLOSE_CREATE_GAME_MODAL
  };
};
