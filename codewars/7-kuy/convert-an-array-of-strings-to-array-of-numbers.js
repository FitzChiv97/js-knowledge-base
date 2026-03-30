// Convert an array of strings to array of numbers
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23

function toNumberArray(stringarray){ // parse a string arg and return a floating-point number
  return stringarray.map(parseFloat);
}

console.log(toNumberArray(["1.1","2.2","3.3"]));