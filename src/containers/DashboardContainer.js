import React from "react";
import { connect } from "react-redux";

import CreateGame from "../components/CreateGame";
import GameList from "../components/GameList";

class DashBoardContainer extends React.Component {
  createGame = () => {
    console.log("hello wrold");
  };

  render() {
    return (
      <div>
        <CreateGame handleCreateGame={this.createGame} />
        <GameList />
      </div>
    );
  }
}

export default connect()(DashBoardContainer);
