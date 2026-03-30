// Reverse a Number (2 solutions)
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

function reverseNumber(n) {
  let str = Array.from(String(n));

  if (!str.indexOf('-')) {
    str.shift();
    return -str.reverse().join('');
  } else {
    return +str.reverse().join('');
  }
}

// function reverseNumber(n) {
//   return Math.sign(n) * Math.abs(n).toString().split('').reverse().join('');
// }

console.log(reverseNumber(-456));