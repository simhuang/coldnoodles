import React from "react";
import { Typography } from "@material-ui/core";

class SpyMasterList extends React.Component {
  render() {
    const { names } = this.props;
    return (
      <div>
        <Typography
          style={{
            fontWeight: "bold"
          }}
        >
          Spy Masters
        </Typography>
        {names.map(name => {
          return <Typography component="span">{`${name} `}</Typography>;
        })}
      </div>
    );
  }
}

export default SpyMasterList;
