// Build a square (2 solutions)
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
// tag: ascii art

function generateShape(n){
  return ('+'.repeat(n) + '\n').repeat(n).trim();
}

// function generateShape(n){
//   return [...Array(n)].map(str => '+'.repeat(n)).join('\n');
// }

console.log(generateShape(37));