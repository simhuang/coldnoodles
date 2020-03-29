import React from "react";

import Typography from "@material-ui/core/Typography";

import Card from "../ui_components/Card";

class GameCard extends React.Component {
  render() {
    const { onClick, title } = this.props;
    return (
      <Card handleClick={onClick}>
        <Typography variant="h1" value={title} name={title}>
          {title}
        </Typography>
      </Card>
    );
  }
}

export default GameCard;
