import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import GameBoard from "../components/GameBoard";
import SpyMasterToggle from "../components/SpyMasterToggle";
import SpyMasterList from "../components/SpyMasterList";
import PlayerList from "../components/PlayerList";
import PrimaryButton from "../ui_components/PrimaryButton";

import { gamePlayListener } from "../actions/firebaseListener";
import {
  selectKeyCard,
  updateGameMapReduxState,
  selectSpyMaster
} from "../actions/gamePlay";

import { resetGame } from "../actions/createGame";

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
      this.props.dispatch(selectSpyMaster(this.state.isSpyMaster));
    });
  };

  handleCardClick = position => {
    const { dispatch, gameState } = this.props;
    dispatch(updateGameMapReduxState(position, gameState.selection));
    dispatch(selectKeyCard(position));
  };

  resetGame = () => {
    this.props.dispatch(resetGame());
  };

  render() {
    const { gameState } = this.props;
    return (
      <Box
        style={{
          display: "flex"
        }}
      >
        <Box>
          <GameBoard
            onClick={this.handleCardClick}
            game={gameState.game}
            map={gameState.keyMap}
            selection={gameState.selection}
            isSpyMaster={this.state.isSpyMaster}
          />
        </Box>
        <Box
          style={{
            minWidth: "100px"
          }}
        >
          <Box>
            <PrimaryButton label="Reset Game" onClick={this.resetGame} />
          </Box>
          <SpyMasterToggle
            checked={this.state.isSpyMaster}
            onChange={this.onSpyMasterToggle}
            disabled={
              gameState.spyMasters.length === 2 && !this.state.isSpyMaster
            }
          />
          <SpyMasterList names={gameState.spyMasters} />
          <Box mt={2}>
            <PlayerList names={gameState.players} />
          </Box>
        </Box>
      </Box>
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
