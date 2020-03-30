import React from "react";
import { connect } from "react-redux";
import GameBoard from "../components/GameBoard";

import { gamePlayListener } from "../actions/firebaseListener";
import { selectKeyCard, updateGameMapReduxState } from "../actions/gamePlay";

class GameContainer extends React.Component {
  componentDidMount() {
    const { dispatch, userState } = this.props;
    const gameJoined = userState.game;
    dispatch(gamePlayListener(gameJoined));
  }

  handleCardClick = position => {
    const { dispatch, gameState } = this.props;
    dispatch(updateGameMapReduxState(position, gameState.selection));
    dispatch(selectKeyCard(position));
  };

  render() {
    const { gameState } = this.props;
    return (
      <div>
        <GameBoard
          onClick={this.handleCardClick}
          game={gameState.game}
          map={gameState.keyMap}
          selection={gameState.selection}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userState: state.userState,
    gameState: state.gamePlay
  };
};

export default connect(mapStateToProps)(GameContainer);
