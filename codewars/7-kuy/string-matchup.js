// String matchup (2 solutions)
// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

function solve(a,b) {
  return b.map(el => {
    return a.reduce((sum, curEl) => {
      return sum += (curEl === el)? 1:0;
    }, 0);
  })
}

// function solve(a,b) {
//   return b.map(el => a.filter(curr => el === curr).length);
// }

console.log(solve(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']));