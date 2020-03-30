import React from "react";
import WordCard from "../components/WordCard";

class GameBoard extends React.Component {
  render() {
    const { game, map, selection, onClick, isSpyMaster } = this.props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 200px 200px 200px 200px",
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
            isSpyMaster={isSpyMaster}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;
