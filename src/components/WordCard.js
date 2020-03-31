import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import blue from "../../static/images/blue-1.png";
import red from "../../static/images/red-2.png";
import neutral from "../../static/images/neutral-1.png";
import bomb from "../../static/images/assassin.jpg";

const CARD_HEIGHT = "110px";
const CARD_WIDTH = "190px";

const useStyles = makeStyles({
  root: {
    background: "#FBF9E1",
    cursor: "pointer",
    minWidth: CARD_WIDTH,
    maxWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    maxHeight: CARD_HEIGHT,
    textAlign: "center",
    "&:hover": {
      background: "#FA8072",
      opacity: 0.3
    }
  }
});

const WordCard = ({
  isSelected,
  label,
  onClick,
  position,
  map,
  isSpyMaster
}) => {
  const renderPicture = () => {
    if (map[position] === "BLUE") {
      return blue;
    }

    if (map[position] === "RED") {
      return red;
    }

    if (map[position] === "NEUTRAL") {
      return neutral;
    }

    return bomb;
  };

  const renderBackground = () => {
    if (isSpyMaster && map) {
      if (map[position] === "BLUE") {
        return "#58ACFA";
      } else if (map[position] === "RED") {
        return "#F7819F";
      } else if (map[position] === "NEUTRAL") {
        return "#F3E2A9";
      } else if (map[position] === "BOMB") {
        return "#848484";
      }
    }
  };

  const classes = useStyles();
  return (
    <Card
      onClick={e => !isSpyMaster && onClick(position)}
      classes={classes}
      style={{
        background: renderBackground()
      }}
    >
      {isSelected ? (
        <CardMedia
          component="img"
          height={CARD_HEIGHT}
          width={CARD_WIDTH}
          title="image"
          image={renderPicture()}
        />
      ) : (
        <CardContent>
          <Typography>{label}</Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default WordCard;
