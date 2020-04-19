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
  selectSpyMaster,
  resetSpyMasters,
  leaveGameRoom,
} from "../actions/gamePlay";

import { resetGame } from "../actions/createGame";
import { setUserScreen } from "../actions/userAction";

import { DASHBOARD_SCREEN } from "../constants/userState";

class GameContainer extends React.Component {
  componentDidMount() {
    const { dispatch, userState } = this.props;
    const gameJoined = userState.game;
    dispatch(gamePlayListener(gameJoined));
    window.addEventListener("beforeunload", (event) => {
      dispatch(leaveGameRoom());
    });
  }

  state = {
    isSpyMaster: false,
  };

  onSpyMasterToggle = () => {
    this.setState({ isSpyMaster: !this.state.isSpyMaster }, () => {
      this.props.dispatch(selectSpyMaster(this.state.isSpyMaster));
    });
  };

  handleCardClick = (position) => {
    const { dispatch, gameState } = this.props;
    dispatch(updateGameMapReduxState(position, gameState.selection));
    dispatch(selectKeyCard(position));
  };

  /**
   * Reset the game and remove existing spy masters
   */
  resetGame = () => {
    this.props.dispatch(resetGame());
    this.setState({ isSpyMaster: false }, () => {
      this.props.dispatch(resetSpyMasters());
    });
  };

  componentWillUnmount() {
    this.leaveGame();
  }

  leaveGame = () => {
    const { dispatch } = this.props;
    dispatch(leaveGameRoom());
    dispatch(setUserScreen(DASHBOARD_SCREEN));
  };

  render() {
    const { gameState } = this.props;
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={5}
      >
        <Box component="div">
          <GameBoard
            onClick={this.handleCardClick}
            game={gameState.game}
            map={gameState.keyMap}
            selection={gameState.selection}
            isSpyMaster={this.state.isSpyMaster}
          />
        </Box>
        <Box
          borderColor="primary.main"
          border={1}
          borderRadius={5}
          px={2}
          py={2}
          component="div"
          style={{
            minWidth: "100px",
          }}
        >
          <Box
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Box>
              <Box>
                <PrimaryButton
                  label="Reset Game"
                  onClick={this.resetGame}
                  fullWidth
                />
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
            <Box>
              <PrimaryButton
                label="Leave Game"
                onClick={this.leaveGame}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    gameState: state.gamePlay,
  };
};

export default connect(mapStateToProps)(GameContainer);
