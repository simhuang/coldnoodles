import React from "react";
import { connect } from "react-redux";
import GameBoard from "../components/GameBoard";

import { gamePlayListener } from "../actions/firebaseListener";

class GameContainer extends React.Component {
  componentDidMount() {
    const { dispatch, userState } = this.props;
    const gameJoined = userState.game;
    dispatch(gamePlayListener(gameJoined));
  }
  render() {
    const { gameState } = this.props;
    console.log(gameState);
    return (
      <div>
        <GameBoard
          game={gameState.game}
          map={gameState.keyMap}
          selection={gameState.selection}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userState: state.userState,
    gameState: state.gamePlay
  };
};

export default connect(mapStateToProps)(GameContainer);
