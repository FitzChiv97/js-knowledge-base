// Maximum Product(3 solutions)
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
  let nums = [];

  for(let i = 0; i < array.length - 1; i++) {
    nums.push(array[i] * array[i+1]);
  }

  return nums.sort((a,b) => b - a)[0];
}

/*
function adjacentElementsProduct(array) {
  return array.map((el, id, arr) => el * arr[id + 1]).sort((a, b) => b - a)[0];
}

function adjacentElementsProduct(array) {
  return Math.max(...array.map((el, id, arr) => el * arr[id + 1]).slice(0, -1));
}
*/

console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));