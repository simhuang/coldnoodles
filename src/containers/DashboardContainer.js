import React from "react";
import { connect } from "react-redux";

import CreateGame from "../components/CreateGame";
import GameList from "../components/GameList";

class DashBoardContainer extends React.Component {
  render() {
    return (
      <div>
        <CreateGame />
        <GameList />
      </div>
    );
  }
}

export default connect()(DashBoardContainer);
