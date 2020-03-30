import React from "react";
import { Typography } from "@material-ui/core";

class PlayerList extends React.Component {
  render() {
    const { names } = this.props;
    return (
      <div>
        <Typography
          style={{
            fontWeight: "bold"
          }}
        >
          Players
        </Typography>
        {names.map(name => {
          return <Typography>{name}</Typography>;
        })}
      </div>
    );
  }
}

export default PlayerList;
