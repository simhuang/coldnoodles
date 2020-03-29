import React from "react";
import GameCard from "../components/GameCard";
import WordCard from "../components/WordCard";

class GameBoard extends React.Component {
  render() {
    const { game, map, selection } = this.props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 220px 220px 220px 220px",
          gridGap: "20px"
        }}
      >
        {game.map((card, index) => (
          <WordCard
            label={card}
            position={index}
            selected={selection[index]}
            key={card}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;
