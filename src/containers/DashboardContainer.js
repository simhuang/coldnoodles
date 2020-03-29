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

  render() {
    const { gameList } = this.props;
    return (
      <div>
        <DashboardModalManager />
        <CreateGame handleCreateGame={this.createGame} />
        <GameList gameList={gameList.games} />
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
