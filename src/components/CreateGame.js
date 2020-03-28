import React from "react";

import Box from "@material-ui/core/Box";
import PrimaryButton from "../ui_components/PrimaryButton";

class CreateGame extends React.Component {
  createNewGame = () => {
    console.log("hello world");
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Box mt={10} mb={10}>
          <PrimaryButton
            label="Create New Game"
            onClick={this.createNewGame}
            disabled={false}
          />
        </Box>
      </div>
    );
  }
}

export default CreateGame;
