import React from "react";
import PropTypes from "prop-types";
import CardActionArea from "@material-ui/core/CardActionArea";

import MuiCard from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "10px",
    padding: "20px",
    minWidth: "200px",
    maxWidth: "200px",
    minHeight: "150px",
    cursor: "pointer",
    display: "inline-block"
    // "&:hover": {
    //   background: "#FA8072",
    //   opacity: 0.3
    // }
  }
});

const Card = ({
  children,
  classes,
  disabled,
  handleClick,
  role,
  dataTestId
}) => {
  const customClasses = useStyles();
  return (
    <MuiCard onClick={handleClick} classes={customClasses} variant="outlined">
      <CardActionArea
        disabled={disabled}
        classes={classes}
        role={role}
        data-testid={dataTestId}
      >
        {children}
      </CardActionArea>
    </MuiCard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  classes: PropTypes.shape(0),
  handleClick: PropTypes.func,
  role: PropTypes.string,
  dataTestId: PropTypes.string
};

export default Card;
