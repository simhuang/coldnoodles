import React from "react";
import { connect } from "react-redux";
import GameBoard from "../components/GameBoard";
import SpyMasterToggle from "../components/SpyMasterToggle";
import SpyMasterList from "../components/SpyMasterList";
import PlayerList from "../components/PlayerList";

import { gamePlayListener } from "../actions/firebaseListener";
import {
  selectKeyCard,
  updateGameMapReduxState,
  selectSpyMaster
} from "../actions/gamePlay";

class GameContainer extends React.Component {
  componentDidMount() {
    const { dispatch, userState } = this.props;
    const gameJoined = userState.game;
    dispatch(gamePlayListener(gameJoined));
  }

  state = {
    isSpyMaster: false
  };

  onSpyMasterToggle = () => {
    this.setState({ isSpyMaster: !this.state.isSpyMaster }, () => {
      console.log("heloo wrold");
      this.props.dispatch(selectSpyMaster(this.state.isSpyMaster));
    });
  };

  handleCardClick = position => {
    const { dispatch, gameState } = this.props;
    dispatch(updateGameMapReduxState(position, gameState.selection));
    dispatch(selectKeyCard(position));
  };

  render() {
    const { gameState } = this.props;
    return (
      <div>
        <SpyMasterToggle
          checked={this.state.isSpyMaster}
          onChange={this.onSpyMasterToggle}
          disabled={
            gameState.spyMasters.length === 2 && !this.state.isSpyMaster
          }
        />

        <GameBoard
          onClick={this.handleCardClick}
          game={gameState.game}
          map={gameState.keyMap}
          selection={gameState.selection}
          isSpyMaster={this.state.isSpyMaster}
        />
        <SpyMasterList names={gameState.spyMasters} />
        <PlayerList names={gameState.players} />
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
