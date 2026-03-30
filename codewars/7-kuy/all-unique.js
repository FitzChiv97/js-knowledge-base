// All unique (2 solutions)
// https://www.codewars.com/kata/553e8b195b853c6db4000048
// tag: Set

function hasUniqueChars(str) {
  return [...str].every((char, id, arr) => arr.indexOf(char, id+1) == -1);
}

// function hasUniqueChars(str) {
//   return new Set(str).size === str.length;
// }

console.log(hasUniqueChars("abcdef"));

