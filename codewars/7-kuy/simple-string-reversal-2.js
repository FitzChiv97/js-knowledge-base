// Simple string reversal II (2 solutions)
// https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac

function solve(st, a, b) {
  let word = st.split('');

  let reversed = word.slice(a, b+1).reverse().join('');;

  word.splice(a, Math.abs(a-b)+1, reversed);
  return word.join('');
}

// const solve = (st,a,b) => st.slice(0,a) + 
// st.slice(a,b+1).split('').reverse().join('') + st.slice(b+1);

console.log(solve('FunctionalProgramming', 2, 15));