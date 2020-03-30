import React from "react";
import { connect } from "react-redux";

import JoinGameModal from "../modals/JoinGameModal";
import CreateGameModal from "../modals/CreateGameModal";

import {
  openCreateGameModal,
  closeCreateGameModal,
  openJoinGameModal,
  closeJoinGameModal
} from "../actions/modalAction";

import { createNewGame } from "../actions/createGame";
import { setUserScreen } from "../actions/userAction";
import { setPlayerName } from "../actions/gamePlay";

import { GAME_SCREEN } from "../constants/userState";

class DashboardModalManager extends React.Component {
  handleOnClose = () => {
    const { dispatch } = this.props;
    dispatch(closeCreateGameModal());
    dispatch(closeJoinGameModal());
  };

  createGame = gameName => {
    this.props.dispatch(createNewGame(gameName));
  };

  joinGame = nickName => {
    const { dispatch } = this.props;
    dispatch(setPlayerName(nickName));
    dispatch(setUserScreen(GAME_SCREEN));
  };

  render() {
    const {
      joinGameModalIsOpen,
      createGameModalIsOpen
    } = this.props.modalState;

    return (
      <React.Fragment>
        <JoinGameModal
          isOpen={joinGameModalIsOpen}
          onClose={this.handleOnClose}
          joinGame={this.joinGame}
        />
        <CreateGameModal
          isOpen={createGameModalIsOpen}
          onClose={this.handleOnClose}
          createGame={this.createGame}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { modalState: state.modalState };
};

export default connect(mapStateToProps)(DashboardModalManager);
