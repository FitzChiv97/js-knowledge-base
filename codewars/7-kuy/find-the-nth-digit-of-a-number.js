// Find the nth Digit of a Number
// https://www.codewars.com/kata/577b9960df78c19bca00007e

function findDigit(num,nth) {
  if(nth < 1) return -1;
  return Array.from(String(Math.abs(num)), el => Number(el)).reverse()[nth-1] || 0;
}