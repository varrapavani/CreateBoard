let box = '';
let number = '';

function getHorizontalLine(columns) {
  let line = '';
  for (let i = 0; i < columns; i++) {
    line += '-----';
  }
  return ' ' + line + '\n ';
}

function getBoard(rows, columns) {
  let board = '|';
  for (let i = 1; i <= columns; i++) {
    const insideCell = rows === 10 ? '❌' : '⭕️';
    board += ' ' + insideCell + ' |';
  }

  const rowBox = getHorizontalLine(columns) + board + '\n';
  if(rows !== 0) {
    rows = rows - 1;
    box = box + rowBox;
    getBoard(rows, columns);
  }

  return box + getHorizontalLine(columns);
}
console.log(getBoard(3, 3));
