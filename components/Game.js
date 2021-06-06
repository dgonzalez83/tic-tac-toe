import React, { useState } from "react";
import { calculateWinner } from "../helpers/calculateWinner";
import Board from "./Board";

const initialHistory = [Array(9).fill(null)];

const Game = () => {
  const [history, setHistory] = useState(initialHistory);
  const [move, setMove] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history[move]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, move + 1);
    const current = timeInHistory[move];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = move % 2 === 0 ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setMove(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const handleBackClick = () => {
    if (!move) return;
    setMove(move - 1);
    // setXisNext(move % 2 === 0);
  };

  const handleForwardClick = () => {
    if (move === history.length - 1) return;
    setMove(move + 1);
    // setXisNext(move % 2 === 0);
  };

  return (
    <>
      <div className="container min-h-screen flex justify-center items-center">
        <div className="w-full flex flex-col items-center">
          <h1
            className="px-4 py-2 mb-2 text-center text-4xl rounded-md border-2 border-black"
            style={
              winner ? { backgroundColor: "purple", color: "yellow" } : null
            }
          >
            {winner
              ? "Winner: " + winner
              : "Next player: " + (move % 2 === 0 ? "X" : "O")}
          </h1>
          <Board squares={history[move]} handleClick={handleClick} />
          <h3 className="font-mono py-2">Move: {move}</h3>
          <div className="inline-flex border border-solid border-black rounded overflow-hidden my-2">
            <button
              className="px-4 py-2 bg-gray-500 text-gray-50 border-r-0 hover:bg-gray-400"
              type="button"
              onClick={handleBackClick}
            >
              Back
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-gray-50 border-l-0 hover:bg-gray-400"
              type="button"
              onClick={handleForwardClick}
            >
              Forward
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
