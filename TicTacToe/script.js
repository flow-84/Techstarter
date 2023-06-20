const board = document.getElementById('board');
const cells = [];
let currentPlayer = 'X';
let xMoves = [];
let oMoves = [];

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    cells.push(cell);

    cell.addEventListener('click', () => makeMove(i));
  }
}

function makeMove(index) {
  if (cells[index].textContent === '') {
    cells[index].textContent = currentPlayer;

    if (currentPlayer === 'X') {
      cells[index].style.backgroundColor = 'lightblue';
      xMoves.push(index);
    } else {
      cells[index].style.backgroundColor = 'lightcoral';
      oMoves.push(index);
    }

    if (gameFinished()) {
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (currentPlayer === 'O') {
      botMove();
      if (gameFinished()) {
        return;
      }
      currentPlayer = 'X';
    }
  }
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function gameFinished() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (combination.every((value) => xMoves.includes(value))) {
      finishGame('Player X hat gewonnen');
      return true;
    }
    if (combination.every((value) => oMoves.includes(value))) {
      finishGame('Player O hat gewonnen');
      return true;
    }
  }

  const totalMoves = oMoves.length + xMoves.length;
  if (totalMoves === 9) {
    finishGame('Unentschieden');
    return true;
  }

  return false;
}

function finishGame(text) {
  setTimeout(() => {
    if (!alert(text)) {
      window.location.reload();
    }
  }, 100);
}

function botMove() {
  const availableMoves = cells
    .map((cell, index) => ({ cell, index }))
    .filter(({ cell }) => cell.textContent === '');

  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const index = availableMoves[randomIndex].index;

  cells[index].textContent = currentPlayer;
  cells[index].style.backgroundColor = 'lightcoral';
  oMoves.push(index);
}

createBoard();
