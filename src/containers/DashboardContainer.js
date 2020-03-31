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

// import { getAllOpenGames } from "../actions/createGame";
import { newGameCreatedListener } from "../actions/firebaseListener";
import { setSelectedGame } from "../actions/userAction";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

class DashBoardContainer extends React.Component {
  state = {
    unsubscribe: null
  };

  /**
   * Get all the initial games
   * instantiate listener to listener for new games
   */
  componentDidMount() {
    // this.props.dispatch(getAllOpenGames());
    const unsubscribe = this.props.dispatch(newGameCreatedListener());
    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  createGame = () => {
    this.props.dispatch(openCreateGameModal());
  };

  /**
   * Click handler when user clicks on one of the game list card
   */
  handleGameCardClick = e => {
    const { dispatch } = this.props;
    const gameRoomName = e.target.textContent;
    dispatch(openJoinGameModal());
    dispatch(setSelectedGame(gameRoomName));
  };

  render() {
    const { gameList } = this.props;
    return (
      <div>
        <DashboardModalManager />
        <Box
          mt={3}
          style={{
            textAlign: "center"
          }}
        >
          <Typography
            style={{
              fontSize: "28px"
            }}
            variant="h1"
          >
            Codenames Online
          </Typography>
        </Box>
        <CreateGame handleCreateGame={this.createGame} />
        <GameList
          gameList={gameList.games}
          handleGameCardClick={this.handleGameCardClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameList: state.gameList
  };
};

export default connect(mapStateToProps)(DashBoardContainer);
