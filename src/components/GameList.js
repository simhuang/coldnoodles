import React from "react";
import { Typography } from "@material-ui/core";

class GameList extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Typography variant="h1">Current Open Games</Typography>
      </div>
    );
  }
}

export default GameList;
