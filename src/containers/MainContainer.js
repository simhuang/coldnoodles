import React from "react";
import { connect } from "react-redux";

import { DASHBOARD_SCREEN, GAME_SCREEN } from "../constants/userState";
import DashBoardContainer from "./DashboardContainer";
import GameContainer from "./GameContainer";

class MainContainer extends React.Component {
  render() {
    const { userState } = this.props;

    // direct user to either the dashboard screen or game screen
    // the only two screens in the game
    if (userState.screen === DASHBOARD_SCREEN) {
      return <DashBoardContainer />;
    }

    return <GameContainer />;
  }
}

const mapStateToProps = state => ({ userState: state.userState });
export default connect(mapStateToProps)(MainContainer);
