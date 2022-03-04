import React, { useState } from 'react';
import Cell from './Cell';
import { createBoard, gameWon } from './helpers';
import './Board.css';

const Board = props => {
  const { nRows = 5, nCols = 5, startingChance = 0.7 } = props;
  const [ board, setBoard ] = useState(
    createBoard(nRows, nCols, startingChance)
  );

  const renderBoard = () => {
    return board.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => {
            return (
              <Cell
                isLit={cell}
                x={cellIndex}
                y={rowIndex}
                onClick={flipCells}
                key={`${cellIndex}-${rowIndex}`}
              />
            );
          })}
        </tr>
      );
    });
  };

  const flipCells = (x, y) => {
    const cells = [
      { x, y },
      { x: x - 1, y },
      { x, y: y - 1 },
      { x: x + 1, y },
      { x, y: y + 1 }
    ];

    cells.forEach(({ x, y }) => {
      flipCell(x, y);
    });
  };

  const flipCell = (x, y) => {
    const nBoard = [ ...board ];
    if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
      nBoard[y][x] = !nBoard[y][x];
      setBoard(nBoard);
    }
  };

  return (
    <div className="Board">
      {
        gameWon(board) ? <h1 className="Board-title">
          <span>You</span>
          <span>Win!</span>
        </h1> :
        <div>
          <h1 className="Board-title">
            <span>Lights</span>
            <span>Out</span>
          </h1>
          <table className="Board-grid">
            <tbody>{renderBoard()}</tbody>
          </table>
        </div>}
    </div>
  );
};

export default Board;
