import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import GameCard from "../components/GameCard";

class GameList extends React.Component {
  static propTypes = {
    gameList: PropTypes.array.isRequired
  };

  render() {
    const { gameList, handleGameCardClick } = this.props;
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Box mb={2}>
          <Typography variant="h1">Current Open Games</Typography>
        </Box>
        <Box>
          {gameList.map(game => {
            return <GameCard title={game.name} onClick={handleGameCardClick} />;
          })}
        </Box>
      </div>
    );
  }
}

export default GameList;
