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

class DashboardModalManager extends React.Component {
  handleOnClose = () => {
    this.props.dispatch(closeCreateGameModal());
    this.props.dispatch(closeJoinGameModal());
  };

  createGame = () => {
    console.log("created a game");
  };

  joinGame = () => {
    console.log("joined a game");
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
