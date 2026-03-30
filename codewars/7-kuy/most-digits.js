// Most digits
// https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array){
  return array.reduce((a, b) => (`${a}`.length > `${b}`.length)? a: b);
}

console.log(findLongest([1, 10, 100]))