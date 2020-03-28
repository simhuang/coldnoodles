import React from "react";
import { connect } from "react-redux";

import CreateGame from "../components/CreateGame";
import GameList from "../components/GameList";
import DashboardModalManager from "../containers/DashboardModalManager";

import {
  openCreateGameModal,
  closeCreateGameModal,
  openJoinGameModal,
  closeJoinGameModal
} from "../actions/modalAction";

class DashBoardContainer extends React.Component {
  createGame = () => {
    this.props.dispatch(openCreateGameModal());
  };

  render() {
    return (
      <div>
        <DashboardModalManager />
        <CreateGame handleCreateGame={this.createGame} />
        <GameList />
      </div>
    );
  }
}

export default connect()(DashBoardContainer);
