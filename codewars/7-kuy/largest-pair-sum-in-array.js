// Largest pair sum in array
// https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum (numbers) { 
  let [a, b] = numbers.sort((a,b) => b - a);
  return a + b;
};

console.log(largestPairSum([99, 2, 2, 23, 19]));