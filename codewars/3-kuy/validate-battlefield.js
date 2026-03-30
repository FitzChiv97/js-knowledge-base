// Battleship field validator
// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

function validateBattlefield(field) {
  let results = [];
  
  for(let i = 0; i < field.length; i++) {
    // inside a row
    for(let j = 0; j < field[i].length; j++) {
      // current cell
      if (field[i][j] === 1) {
        console.log(`row: ${i}, cell: ${j}`);
        
        // checkDiagonalCells clockwise around currentCellId 
        if(!checkDiagonalCells(field[i-1], field[i+1], j)) return false;
        
        // count length of ships and their amount 
        field[i][j] = 0;
        results.push(checkShipLength(field, i, j));
      }
    }
  }
  return checkResults(results);
}

function checkShipLength(field, rowId, cellId) {
  let length = 1;
  let step = 1;

  // horizontal check
  if(field[rowId][cellId + 1]) {
    // not using [cellId + step] here to prevent an Error with verticalCell below
    let horizontalCell = field[rowId][cellId + 1];
      while(horizontalCell !== 0) {
        console.log(`horizontalCell row: ${rowId}; cell: ${cellId + step}`);
        // checkDiagonalCells clockwise around further horizontalCells 
        if(!checkDiagonalCells(field[rowId - 1], field[rowId + 1], cellId + step)) return false;
        // assign 0 to current horizontalCell
        field[rowId][cellId + step] = 0;
        step++;                                
        length++;
        // move to the next horizontalCell
        horizontalCell = field[rowId][cellId + step];
      }
  }

  // vertical check
  if(field[rowId + 1][cellId]){
    let verticalCell = field[rowId + 1][cellId];
    while(verticalCell !== 0) {
      console.log(`verticalCell row: ${rowId + step}; cell: ${cellId}`);
      // checkDiagonalCells clockwise around further verticalCells 
      if(!checkDiagonalCells(field[rowId + (step - 1)], field[rowId + (step + 1)], cellId)) return false;
      // assign 0 to current verticalCell
      field[rowId + step][cellId] = 0;
      step++;
      length++;
      // move to the next verticalCell
      verticalCell = field[rowId + step][cellId];
    }
  }

  return length;
}

function checkDiagonalCells(upperRow, lowerRow, currentCellId) {
  if(upperRow) {
    let upperLeftDiagonal = upperRow[currentCellId - 1];
    console.log(`upperLeft: ${upperLeftDiagonal}`);
    
    let upperRightDiagonal = upperRow[currentCellId + 1];
    console.log(`upperRight: ${upperRightDiagonal}`);

    if(upperLeftDiagonal || upperRightDiagonal) return false;
  }

  if(lowerRow) {
    let lowerLeftDiagonal = lowerRow[currentCellId - 1];
    console.log(`lowerLeft: ${lowerLeftDiagonal}`);
    
    let lowerRightDiagonal = lowerRow[currentCellId + 1];
    console.log(`lowerRight: ${lowerRightDiagonal}`);

    if(lowerLeftDiagonal || lowerRightDiagonal) return false;
  }
  
  return true;
}

function checkResults(results){
  console.log(results);

  let fieldRules = {
    '1': 4,
    '2': 3,
    '3': 2,
    '4': 1,
  };

  for (let shipCount in fieldRules) {    
    for(let i = 0; i < shipCount; i++) {
      console.log(`shipCount: ${shipCount}, shipLength: ${fieldRules[shipCount]}`);

      let index = results.indexOf(fieldRules[shipCount]);
      if(index === -1) return false;
      results.splice(index, 1);
    }
  }

  return !results.length;
}

let test = validateBattlefield(
 [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]);

console.log(test);             