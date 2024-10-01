let players = ['x', 'o'];
let activePlayer = 0;
let board = [
  ['','',''],
  ['','',''],
  ['','',''],
];

startGame();

function startGame () {
  activePlayer = 0;
  board = [
    ['','',''],
    ['','',''],
    ['','',''],
  ];
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  if (checkVertical(col) || checkHorizontal(row) || checkMainDiagonal(row, col) || checkSecondaryDiagonal(row, col)) {
    showWinner(activePlayer);
  } else {
    activePlayer = activePlayer ? 0 : 1;
  }
}

// Проверка победы по вертикали
function checkVertical(col) {
  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === players[activePlayer]) {
      counter++;
    }
  }
  return (counter === board.length);
}


// Проверка победы по горизонтали
function checkHorizontal(row) {
  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === players[activePlayer]) {
      counter++;
    }
  }
  return (counter === board.length);
}

// Проверка Главной диагонали
function checkMainDiagonal(row, col) {
  if (row === col) {
    let counter = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[row][col] === board[i][i]){
       counter++;
      }
    }
    return (counter === board.length);
  }
}

// Проверка побочной диагонали
function checkSecondaryDiagonal (row, col) {
  let counter = 0;
  for (let i = 0, j = board.length - 1; i < board.length; i++, j--) {
    if (board[row][col] === board[i][j]) {
      counter++;
    }
  }
  return (counter === board.length);
}