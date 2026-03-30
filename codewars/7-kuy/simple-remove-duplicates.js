// Simple remove duplicates (3 solutions!)
// https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr) {
  arr.forEach((el, id) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      arr.splice(arr.indexOf(el), 1, null);
    }
  })
  return arr.filter(el => el !== null);
}
console.log(solve([1,2,1,2,1,2,3]));