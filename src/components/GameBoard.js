import React from "react";
import WordCard from "../components/WordCard";

class GameBoard extends React.Component {
  render() {
    const { game, map, selection, onClick } = this.props;
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
            onClick={onClick}
            label={card}
            position={index}
            isSelected={selection[index]}
            key={card}
            map={map}
            isSpyMaster={true}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;
