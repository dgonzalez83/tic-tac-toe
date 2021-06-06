import React from "react";
import Square from "./Square";

const Board = ({ squares, handleClick }) => {
  return (
    <div className="w-96 h-96 grid grid-cols-3 grid-rows-3 border-4 border-solid border-blue-700 rounded-2xl m-auto">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

export default Board;
