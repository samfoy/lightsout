const createBoard = (nRows, nCols, chance) => {
  const board = [];
  for (let row = 0; row < nRows; row++) {
    board[row] = [];
    for (let col = 0; col < nCols; col++) {
      board[row][col] = Math.random() > chance;
    }
  }
  board[2][2] = false;
  board[1][1] = false;
  board[1][3] = false;
  board[3][3] = false;
  board[3][1] = false;

  return board;
};

const gameWon = board => {
  const flat = [].concat(...board);
  return !flat.includes(true);
};

export { createBoard, gameWon };
