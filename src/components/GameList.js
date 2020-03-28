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
        <Typography variant="h1">Current Games</Typography>
      </div>
    );
  }
}

export default GameList;
