import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-blue-200 border border-solid border-blue-700 text-2xl font-bold cursor-pointer outline-none"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
